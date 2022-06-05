import { onCleanup } from "solid-js";

export function createListener<T extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  type: T,
  handler: (event: HTMLElementEventMap[T]) => void,
  options?: AddEventListenerOptions
) {
  element.addEventListener(type, handler, options);
  onCleanup(() => element.removeEventListener(type, handler, options));
}
