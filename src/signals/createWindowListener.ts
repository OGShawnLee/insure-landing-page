import { onCleanup } from "solid-js";

export function createWindowListener<T extends keyof WindowEventMap>(
  type: T,
  handler: (event: WindowEventMap[T]) => void,
  options?: AddEventListenerOptions
) {
  window.addEventListener(type, handler, options);
  onCleanup(() => window.removeEventListener(type, handler, options));
}
