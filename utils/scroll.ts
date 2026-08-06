/**
 * Smoothly scrolls to an in-page section by id, accounting for the
 * fixed navbar height.
 */
export function scrollToId(id: string, offset = 88) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
