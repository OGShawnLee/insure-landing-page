import { onCleanup } from "solid-js";

export function hideScrollbar() {
  const body = document.body;
  const initialOverlflow = body.style.overflow;
  body.style.overflow = "hidden";
  onCleanup(() => (body.style.overflow = initialOverlflow));
}
