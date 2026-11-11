// Gestos de deslizar para carruseles en pantallas táctiles.
// Uso: <div {...swipeHandlers(irAnterior, irSiguiente)}>
const THRESHOLD = 50; // px mínimos de arrastre horizontal

export function swipeHandlers(onPrev, onNext) {
  let startX = 0;
  let startY = 0;
  return {
    onTouchStart: (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    onTouchEnd: (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      // ignorar si fue más vertical que horizontal (scroll normal)
      if (Math.abs(dx) < THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) onNext();
      else onPrev();
    },
  };
}
