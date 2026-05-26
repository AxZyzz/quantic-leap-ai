"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import humanImage from "@/assets/1st.png"
import roboImage from "@/assets/2nd.png"

export function TerminalHandsShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene | null
    camera: THREE.OrthographicCamera | null
    renderer: THREE.WebGLRenderer | null
    mesh: THREE.Mesh | null
    uniforms: any
    animationId: number | null
    themeObserver: MutationObserver | null
  }>({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
    themeObserver: null,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const container = canvas.parentElement
    if (!container) return

    const { current: refs } = sceneRef

    const vertexShader = `
      varying vec2 vUv;
      attribute vec3 position;
      void main() {
        vUv = position.xy * 0.5 + 0.5;
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float isDark;
      uniform sampler2D tDiffuse;
      uniform float imageAspect;
      uniform vec2 mouse;
      uniform float offsetY;

      varying vec2 vUv;

      void main() {
        // Size of the pixel/dot cell - smaller for finer detail
        float pixelSize = 4.0; 
        
        // Calculate the grid cell index (integer coordinates)
        vec2 gridPos = floor(gl_FragCoord.xy / pixelSize);
        
        // Calculate the center of the grid cell in screen space
        vec2 cellCenter = (gridPos + 0.5) * pixelSize;
        
        // Mouse interaction effect
        float mouseDist = distance(cellCenter, mouse);
        float mouseEffect = smoothstep(180.0, 0.0, mouseDist); // 180px radius effect, more subtle
        
        // Map cell center to UV for texture sampling
        vec2 sampleUv = cellCenter / resolution;
        
        // Add a very subtle lens/repulsion effect to the UV coordinates based on mouse
        vec2 uvDir = sampleUv - (mouse / resolution);
        if (length(uvDir) > 0.0) {
            sampleUv += normalize(uvDir) * mouseEffect * 0.005; // Reduced from 0.03 to 0.005
        }
        
        float screenAspect = resolution.x / resolution.y;
        
        vec2 finalUv = sampleUv - 0.5;
        
        // Always fit to width! 
        // This ensures the left and right edges (arms) are never chopped off on mobile screens.
        // On tall screens, this acts like object-fit: contain.
        finalUv.y *= imageAspect / screenAspect;
        
        // Apply vertical offset
        finalUv.y += offsetY;
        
        finalUv += 0.5;
        
        vec4 texColor = vec4(1.0); // Default to white background (which maps to 0 brightness after inversion)
        if (finalUv.x >= 0.0 && finalUv.x <= 1.0 && finalUv.y >= 0.0 && finalUv.y <= 1.0) {
            texColor = texture2D(tDiffuse, finalUv);
        }
        
        // The image has a white background and dark hands.
        // We invert it so hands have high brightness (large dots) and background has 0 brightness (no dots).
        float brightness = 1.0 - texColor.r; 
        
        // Add some noise/flicker based on time
        float noise = fract(sin(dot(gridPos.xy + vec2(time * 0.1), vec2(12.9898, 78.233))) * 43758.5453);
        brightness += (noise - 0.5) * 0.15; 
        
        // Cursor makes the pixels glow/expand slightly (reduced intensity)
        brightness += mouseEffect * 0.2;
        
        // Add a scanline effect
        float scanline = sin(gl_FragCoord.y * 0.1 - time * 5.0) * 0.05;
        brightness += scanline;

        // Draw dot
        float dist = distance(gl_FragCoord.xy, cellCenter);
        // Size depends on brightness. smoothstep limits it.
        float dotRadius = pixelSize * 0.45 * smoothstep(0.1, 0.6, brightness); 
        
        // Anti-alias the dot edge slightly
        float alpha = 1.0 - smoothstep(dotRadius - 0.5, dotRadius + 0.5, dist);
        
        // Hide dots that are too small
        if (dotRadius < 1.0) {
            alpha = 0.0;
        }
        
        vec3 dotColor = isDark > 0.5 ? vec3(0.9) : vec3(0.1);
        
        // Output the dot color with the calculated alpha.
        // Where alpha is 0 (background), it will be fully transparent.
        gl_FragColor = vec4(dotColor, alpha);
      }
    `

    const initScene = () => {
      refs.scene = new THREE.Scene()
      // Enable alpha for transparent background
      refs.renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      refs.renderer.setClearColor(0x000000, 0) // Fully transparent clear color

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1)

      const isDarkTheme = document.documentElement.classList.contains('dark') || document.documentElement.classList.contains('blue');

      refs.uniforms = {
        resolution: { value: [container.clientWidth, container.clientHeight] },
        time: { value: 0.0 },
        isDark: { value: isDarkTheme ? 1.0 : 0.0 },
        tDiffuse: { value: null },
        imageAspect: { value: 1.0 },
        mouse: { value: [-1000, -1000] }, // Default off-screen
        offsetY: { value: 0.0 }
      }

      // Load both textures and merge them onto a single canvas
      Promise.all([
        new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = humanImage;
          img.onload = () => resolve(img);
        }),
        new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = roboImage;
          img.onload = () => resolve(img);
        })
      ]).then(([humanImg, roboImg]) => {
        const canvas = document.createElement('canvas');
        // 2:1 wide aspect ratio to keep them properly separated on opposite sides
        canvas.width = 2048;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          // Fill white background (maps to transparent in our shader)
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          const drawContained = (img: HTMLImageElement, x: number, y: number, w: number, h: number) => {
            const imgAspect = img.width / img.height;
            const boxAspect = w / h;
            let drawW = w;
            let drawH = h;
            if (imgAspect > boxAspect) {
              drawH = w / imgAspect;
            } else {
              drawW = h * imgAspect;
            }
            const drawX = x + (w - drawW) / 2;
            const drawY = y + (h - drawH) / 2;
            ctx.drawImage(img, drawX, drawY, drawW, drawH);
          }
          
          // Draw human on the left half
          drawContained(humanImg, 0, 0, 1024, 1024);
          // Draw robot on the right half
          drawContained(roboImg, 1024, 0, 1024, 1024);
          
          const texture = new THREE.CanvasTexture(canvas);
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          
          const aspect = canvas.width / canvas.height;
          
          if (refs.uniforms) {
            refs.uniforms.tDiffuse.value = texture;
            refs.uniforms.imageAspect.value = aspect;
          }
        }
      });

      const themeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.target === document.documentElement && mutation.attributeName === 'class') {
            if (refs.uniforms) {
              const isDark = document.documentElement.classList.contains('dark') || document.documentElement.classList.contains('blue');
              refs.uniforms.isDark.value = isDark ? 1.0 : 0.0;
            }
          }
        });
      });

      themeObserver.observe(document.documentElement, { attributes: true });
      refs.themeObserver = themeObserver;

      const position = [
        -1.0, -1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0, -1.0, 0.0,
        -1.0,  1.0, 0.0,
         1.0,  1.0, 0.0,
      ]

      const positions = new THREE.BufferAttribute(new Float32Array(position), 3)
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", positions)

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
        transparent: true,
      })

      refs.mesh = new THREE.Mesh(geometry, material)
      refs.scene.add(refs.mesh)

      handleResize()
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (refs.uniforms && refs.renderer) {
        const pixelRatio = refs.renderer.getPixelRatio()
        const rect = canvas.getBoundingClientRect()
        // Convert to WebGL coordinates (bottom-left origin)
        refs.uniforms.mouse.value = [
          (e.clientX - rect.left) * pixelRatio,
          (rect.height - (e.clientY - rect.top)) * pixelRatio
        ]
      }
    }

    const animate = () => {
      if (refs.uniforms) {
        refs.uniforms.time.value += 0.05 // Controls the overall animation speed
      }
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera)
      }
      refs.animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return
      
      const width = container.clientWidth
      const height = container.clientHeight
      
      refs.renderer.setSize(width, height, false)
      
      // Fix: Account for device pixel ratio when passing resolution to shader
      const pixelRatio = refs.renderer.getPixelRatio()
      refs.uniforms.resolution.value = [width * pixelRatio, height * pixelRatio]
      
      // Shift the image slightly on mobile to avoid overlapping with text if needed
      refs.uniforms.offsetY.value = width < 768 ? -0.15 : 0.0;
    }

    initScene()
    animate()
    
    const resizeObserver = new ResizeObserver(() => {
      handleResize()
    })
    resizeObserver.observe(container)
    
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId)
      resizeObserver.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
      if (refs.themeObserver) {
        refs.themeObserver.disconnect()
      }
      if (refs.renderer) {
        refs.renderer.dispose()
      }
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh)
        refs.mesh.geometry.dispose()
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose()
        }
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
    />
  )
}
