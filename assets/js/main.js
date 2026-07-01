(function () {
  const select = document.querySelector("[data-lang-select]");
  if (!select) return;
  select.addEventListener("change", function () {
    if (this.value) window.location.href = this.value;
  });
})();