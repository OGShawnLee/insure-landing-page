import { Component, createMemo, ParentComponent as PC } from "solid-js";
import { logo } from "@assets";

export default function Footer() {
  return (
    <footer class="bg-gray-50">
      <div class="bounding mx-auto py-20 | flex flex-col items-center | md:items-start">
        <div class="w-full pb-9 | flex flex-col items-center gap-4 | border-b border-violet-400/40 | md:(flex-row justify-between)">
          <div>
            <img class="md:h-6" src={logo} alt="" />
          </div>
          <div class="flex items-center gap-3 | text-2xl text-violet-400 | md:text-3xl">
            <SocialMediaIcon icon="facebook-square" />
            <SocialMediaIcon icon="twitter" />
            <SocialMediaIcon icon="pinterest" />
            <SocialMediaIcon icon="instagram" />
          </div>
        </div>
        <div class="w-full pt-9 | flex flex-col gap-y-9 md:(flex-row justify-between)">
          <LinkCollection title="Our Company">
            <LinkItem href="#how-we-work">How we work</LinkItem>
            <LinkItem href="#why-insure">Why Insure?</LinkItem>
            <LinkItem href="#pricing">Check Price</LinkItem>
            <LinkItem href="#rewiews">Reviews</LinkItem>
          </LinkCollection>
          <LinkCollection title="Help Me">
            <LinkItem href="#faq">FAQ</LinkItem>
            <LinkItem href="#terms-of-use">Terms of use</LinkItem>
            <LinkItem href="#privacy-policy">Privacy policy</LinkItem>
            <LinkItem href="#cookies">Cookies</LinkItem>
          </LinkCollection>
          <LinkCollection title="Contact">
            <LinkItem href="#sales">Sales</LinkItem>
            <LinkItem href="#support">Support</LinkItem>
            <LinkItem href="#live-chat">Live Chat</LinkItem>
          </LinkCollection>
          <LinkCollection title="Others">
            <LinkItem href="#careers">Careers</LinkItem>
            <LinkItem href="#press">Press</LinkItem>
            <LinkItem href="#licenses">Licenses</LinkItem>
          </LinkCollection>
        </div>
      </div>
    </footer>
  );
}

const LinkCollection: PC<{ title: string }> = ({ children, title }) => {
  return (
    <div class="flex flex-col items-center gap-5 | md:items-start">
      <span class="text-sm text-violet-400 font-bold uppercase tracking-wide">{title}</span>
      <ul class="flex flex-col items-center gap-2 | md:items-start">{children}</ul>
    </div>
  );
};

const LinkItem: PC<{ href: string }> = ({ href, children }) => {
  return (
    <li>
      <a
        class="text-sm font-bold uppercase tracking-wide hover:underline focus:underline"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

const SocialMediaIcon: Component<{ icon: string }> = ({ icon }) => {
  const finalIcon = createMemo(() => `bx bxl-${icon}`);
  return (
    <button class="flex items-center justify-center | text-2xl text-violet-400 | md:text-3xl | hover:text-violet-900 focus:text-violet-900">
      <i class={finalIcon()} />
    </button>
  );
};
