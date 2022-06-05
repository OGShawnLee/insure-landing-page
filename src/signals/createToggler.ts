import type { Accessor, Setter } from "solid-js";
import { createSignal } from "solid-js";

export function createToggler(
  initialValue: boolean
): [get: Accessor<boolean>, toggle: () => void, set: Setter<boolean>] {
  const [isActive, setIsActive] = createSignal(initialValue);
  return [isActive, () => setIsActive((isActive) => !isActive), setIsActive];
}
