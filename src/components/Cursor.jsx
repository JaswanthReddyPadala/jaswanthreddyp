import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    // Ring follows with lag via lerp
    const loop = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnterLink = () => {
      dot.classList.add('cursor-hover');
      ring.classList.add('cursor-hover');
    };
    const onLeaveLink = () => {
      dot.classList.remove('cursor-hover');
      ring.classList.remove('cursor-hover');
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    const bindLinks = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };
    bindLinks();

    // Re-bind when DOM changes (drawer opens etc.)
    const observer = new MutationObserver(bindLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Small solid dot — snaps to cursor */}
      <div ref={dotRef} className="cursor-dot" />
      {/* Larger ring — lags behind */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
