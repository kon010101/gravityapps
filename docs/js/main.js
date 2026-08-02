(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    document.body.classList.add("is-ready");
  }
})();
