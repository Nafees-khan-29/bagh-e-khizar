document.title = "Bagh-e-Khizar — Launching Soon";

const media = window.matchMedia("(prefers-reduced-motion: reduce)");
const corners = document.querySelectorAll(".corner");

if (!media.matches && corners.length) {
  window.addEventListener("pointermove", (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    corners.forEach((el, i) => {
      const strength = i === 0 ? 6 : -6;
      el.style.transform = `translate(${nx * strength}px, ${ny * strength}px)`;
    });
  });
}
