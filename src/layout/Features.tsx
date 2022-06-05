import type { ParentComponent as PC } from "solid-js";
import { affordable, peopleFirst, snappyProcess } from "@assets";

export default function Features() {
  return (
    <section class="bounding mx-auto | grid gap-24">
      <header class="flex flex-col items-center gap-10 | lg:items-start">
        <div aria-hidden="true" class="w-32 h-0.5px | bg-violet-900" />
        <h2 class="text-5xl text-violet-900 text-center font-dm | lg:text-7xl">We're different</h2>
      </header>
      <div class="grid gap-24 | lg:(grid-cols-3 gap-9)">
        <Feature title="Snappy Process" icon={snappyProcess}>
          Our application process can be completed in minutes, not hours. Don’t get stuck filling in
          tedious forms.
        </Feature>
        <Feature title="Affordable Prices" icon={affordable}>
          We don't want you worrying about high monthly costs. Our prices may be low, but we still
          offer the best coverage possible.
        </Feature>
        <Feature title="People First" icon={peopleFirst}>
          Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're
          covered when you need it.
        </Feature>
      </div>
    </section>
  );
}

const Feature: PC<{ title: string; icon: string }> = ({ children, title, icon }) => {
  return (
    <article class="flex flex-col gap-6 | text-center lg:text-left">
      <header class="flex flex-col gap-10">
        <div class="self-center lg:self-auto">
          <img src={icon} alt="" height="86" width="86" />
        </div>
        <h3 class="text-3xl text-violet-900 font-dm">{title}</h3>
      </header>
      <div>
        <p>{children}</p>
      </div>
    </article>
  );
};
