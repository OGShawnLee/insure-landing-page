import { createWindowListener } from "@signals";
import { createSignal } from "solid-js";

export function useWindowSize() {
  const [x, setX] = createSignal(window.innerWidth);
  const [y, setY] = createSignal(window.innerHeight);

  createWindowListener("resize", () => {
    setX(window.innerWidth);
    setY(window.innerHeight);
  });

  return { x, y };
}
