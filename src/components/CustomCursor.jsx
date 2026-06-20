import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    let timeout;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("active");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("active");
    };

    // Hover effect on interactive elements
    const handleMouseEnter = () => {
      cursor.classList.add("active");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("active");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add hover effect to buttons and links
    const interactiveElements = document.querySelectorAll("a, button, .group");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}