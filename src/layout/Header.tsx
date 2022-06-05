import type { ParentComponent as PC } from "solid-js";
import { Show, createEffect, onMount } from "solid-js";
import { logo, iClose, iHamburger } from "@assets";
import { createToggleableElement, useWindowSize } from "@signals";
import { hideScrollbar } from "@actions";

const { isOpen, close, button, panel } = createToggleableElement(false);

export default function Header() {
  const { x } = useWindowSize();

  createEffect(() => {
    if (x() >= 768 && isOpen()) close();
  });

  return (
    <header class="fixed top-0 right-0 left-0 h-20 z-20 | bg-white">
      <div class="h-full bounding w-full mx-auto flex items-center justify-between">
        <img src={logo} alt="" />

        <button class="md:hidden" use:button>
          <img src={isOpen() ? iClose : iHamburger} alt="" />
          <span class="sr-only">{isOpen() ? "Open" : "Close"} Site Navigation</span>
        </button>

        <Show when={isOpen()}>
          <MobileNavigation />
        </Show>

        <DesktopNavigation />
      </div>
    </header>
  );
}

function MobileNavigation() {
  onMount(() => hideScrollbar());

  const LinkItem: PC<{ href: string }> = ({ children, href }) => (
    <LinkListItem
      class="outline-none hover:(text-white underline) focus:(text-white underline)"
      href={href}
    >
      {children}
    </LinkListItem>
  );

  return (
    <div class="fixed top-20 z-10 right-0 bottom-0 left-0 | bg-violet-900" use:panel>
      <nav class="max-w-xs mx-auto py-10">
        <ul class="flex flex-col items-center gap-9 | text-gray-50 text-xl uppercase tracking-wider">
          <LinkItem href="#how-we-work">How we Work</LinkItem>
          <LinkItem href="#blog">Blog</LinkItem>
          <LinkItem href="#account">Account</LinkItem>
          <li class="w-full">
            <a class="block button button--white text-lg text-center" href="#plans">
              View plans
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const DesktopNavigation = () => (
  <nav class="hidden md:block">
    <ul class="flex items-center justify-center gap-8 | text-violet-400 uppercase tracking-wider">
      <LinkListItem
        class="font-bold hover:text-primary-violet focus:text-primary-violet"
        href="#how-we-work"
      >
        How we Work
      </LinkListItem>
      <LinkListItem
        class="font-bold hover:text-primary-violet focus:text-primary-violet"
        href="#blog"
      >
        Blog
      </LinkListItem>
      <LinkListItem
        class="font-bold hover:text-primary-violet focus:text-primary-violet"
        href="#account"
      >
        Account
      </LinkListItem>
      <li>
        <a class="button button--violet" href="#plans">
          View plans
        </a>
      </li>
    </ul>
  </nav>
);

const LinkListItem: PC<{ class?: string; href?: string }> = (props) => {
  const { children, class: className, href } = props;
  return (
    <li>
      <a class={className} href={href}>
        {children}
      </a>
    </li>
  );
};
