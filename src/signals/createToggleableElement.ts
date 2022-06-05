import { isFocusable, isHTMLElement, isWithin } from "malachite-ui/predicate";
import { createListener, createToggler, createWindowListener } from "@signals";
import { onCleanup } from "solid-js";

export function createToggleableElement(initialValue: boolean) {
  const [isOpen, toggle, setIsOpen] = createToggler(initialValue);
  const elements: { button: HTMLElement | undefined; panel: HTMLElement | undefined } = {
    button: undefined,
    panel: undefined
  };

  function isClosed() {
    return !isOpen();
  }

  function close(ref?: Event | HTMLElement) {
    setIsOpen(false);
    const { button, panel } = elements;

    if (!ref) return button?.focus();

    if (ref instanceof Event) {
      const { target } = ref;
      if (isHTMLElement(target) && isFocusable(target)) return;
      else return button?.focus();
    }

    if (ref instanceof HTMLElement) {
      if (isFocusable(ref) && !isWithin(panel, ref)) ref.focus();
      else button?.focus();
    }
  }

  function button(element: HTMLElement) {
    elements.button = element;

    createListener(element, "click", toggle);

    onCleanup(() => (elements.button = undefined));
  }

  function panel(panel: HTMLElement) {
    elements.panel = panel;

    createWindowListener("click", (event) => {
      const { target } = event;
      if (isClosed() || isWithin(elements.button, target)) return;
      if (!isWithin(panel, target)) return close();
    });

    createWindowListener("keydown", ({ key }) => {
      if (key === "Escape") close();
    });

    createWindowListener("focusin", (event) => {
      const target = event.target;
      if (isWithin(elements.button, target) || isWithin(panel, target)) return;
      close(event);
    });

    onCleanup(() => (elements.panel = undefined));
  }

  return { isOpen, isClosed, close, toggle, setIsOpen, panel, button };
}
