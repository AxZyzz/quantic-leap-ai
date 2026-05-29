import { useRef, useState, useEffect } from "react";

interface InteractiveImageViewerProps {
  src: string;
  alt: string;
  caption?: string;
}

export const InteractiveImageViewer = ({ src, alt, caption }: InteractiveImageViewerProps) => {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const [viewerScale, setViewerScale] = useState<number>(1);
  const MIN_SCALE = 0.2;
  const MAX_SCALE = 4;
  const prevBodyOverflow = useRef<string | null>(null);
  const panRef = useRef({ x: 0, y: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isPanningRef = useRef(false);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  const lockBodyScroll = () => {
    try {
      prevBodyOverflow.current = document.body.style.overflow || "";
      document.body.style.overflow = "hidden";
    } catch (e) {
      // ignore (SSR or unavailable)
    }
  };

  const unlockBodyScroll = () => {
    try {
      if (prevBodyOverflow.current !== null) {
        document.body.style.overflow = prevBodyOverflow.current;
        prevBodyOverflow.current = null;
      } else {
        document.body.style.overflow = "";
      }
    } catch (e) {
      // ignore
    }
  };

  const handleViewerWheel = (e: React.WheelEvent) => {
    // Always prevent and stop propagation for wheel events captured on the viewer
    e.preventDefault();
    e.stopPropagation();
    const delta = -e.deltaY; // invert so wheel up -> zoom in
    const speed = e.shiftKey ? 0.008 : 0.002;
    setViewerScale((s) => {
      const next = s + delta * speed;
      return Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
    });
  };

  const handleViewerKey = (e: React.KeyboardEvent) => {
    if (e.key === "+" || e.key === "=") {
      setViewerScale((s) => Math.min(MAX_SCALE, s + 0.05));
    } else if (e.key === "-" || e.key === "_") {
      setViewerScale((s) => Math.max(MIN_SCALE, s - 0.05));
    } else if (e.key === "0") {
      setViewerScale(1);
      setPan({ x: 0, y: 0 });
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!viewerRef.current) return;
    if (e.button !== 0) return;
    isPanningRef.current = true;
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    panRef.current = { x: pan.x, y: pan.y };
    viewerRef.current.setPointerCapture?.(e.pointerId);
    e.preventDefault();
    e.stopPropagation();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPanningRef.current || !pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    const next = { x: panRef.current.x + dx, y: panRef.current.y + dy };
    setPan(next);
    e.preventDefault();
    e.stopPropagation();
  };

  const endPan = (e?: React.PointerEvent) => {
    if (!isPanningRef.current) return;
    isPanningRef.current = false;
    pointerStartRef.current = null;
    try {
      viewerRef.current?.releasePointerCapture?.((e && e.pointerId) || 0);
    } catch (err) {
      // ignore
    }
  };

  useEffect(() => {
    return () => {
      if (prevBodyOverflow.current !== null) {
        try {
          document.body.style.overflow = prevBodyOverflow.current;
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div className="space-y-4">
      <div
        ref={viewerRef}
        tabIndex={0}
        className="relative w-full h-[600px] overflow-hidden rounded-xl border border-border/40 bg-muted/20 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-accent/40 animate-fade-in"
        onWheel={handleViewerWheel}
        onKeyDown={handleViewerKey}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPan}
        onPointerCancel={endPan}
        onPointerLeave={endPan}
        onMouseEnter={lockBodyScroll}
        onMouseLeave={unlockBodyScroll}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${viewerScale})`,
            transformOrigin: "center center",
            transition: isPanningRef.current ? "none" : "transform 0.15s ease-out",
            userSelect: "none",
            pointerEvents: "none",
          }}
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-muted-foreground border border-border/40 select-none">
          {Math.round(viewerScale * 100)}%
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        Scroll to zoom • Click and drag to pan • Press 0 to reset
      </p>
      {caption && (
        <p className="text-xs text-center text-muted-foreground py-3 bg-muted/20 rounded-lg">
          {caption}
        </p>
      )}
    </div>
  );
};

export default InteractiveImageViewer;
