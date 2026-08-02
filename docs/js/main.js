(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  const main = document.querySelector("main");
  if (main) main.classList.add("is-ready");
})();
