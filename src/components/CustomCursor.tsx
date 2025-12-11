import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    // We use a ref to track initialization to avoid re-renders on every mousemove
    const isCursorInited = useRef(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const initCursor = () => {
            cursor.classList.add("custom-cursor--init");
            isCursorInited.current = true;
        };

        const destroyCursor = () => {
            cursor.classList.remove("custom-cursor--init");
            isCursorInited.current = false;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            if (!isCursorInited.current) {
                initCursor();
            }

            // Directly set the translate property causing NO transition (position is instant)
            // This matches the user's: cursor.style = `translate: ${mouseX}px ${mouseY}px`;
            cursor.style.translate = `${mouseX}px ${mouseY}px`;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for links, buttons
            const isLink = target.closest('a') || target.closest('button') || target.closest('.cursor-hover');

            if (isLink) {
                cursor.classList.add("custom-cursor--link");
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isLink = target.closest('a') || target.closest('button') || target.closest('.cursor-hover');

            if (isLink) {
                cursor.classList.remove("custom-cursor--link");
            }
        };

        const handleMouseDown = () => {
            cursor.classList.add("custom-cursor--click");
        };

        const handleMouseUp = () => {
            cursor.classList.remove("custom-cursor--click");
        };

        // Attach global listeners
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);
        // Use capture phase for mouseout to ensure we catch bubbling events correctly if needed, 
        // though the user's code used standard bubbling. Let's stick to standard.
        document.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);


        // Also listen for document mouseout to destroy cursor (move out of window)
        document.addEventListener("mouseout", (e) => {
            if (!e.relatedTarget) {
                destroyCursor();
            }
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor" />
    );
};

export default CustomCursor;
