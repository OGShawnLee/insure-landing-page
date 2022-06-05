import { pHowWeWorkDesktop, pHowWeWorkMobile } from "@assets";

export default function Banner() {
  return (
    <section class="bounding relative lg:h-250px w-full mx-auto overflow-hidden | bg-primary-violet">
      <picture aria-hidden="true">
        <source media="(min-width: 1024px)" srcset={pHowWeWorkDesktop} />
        <img class="absolute right-0" src={pHowWeWorkMobile} alt="" />
      </picture>
      <div class="relative z-10 py-16 px-8 h-full my-auto | flex flex-col items-center gap-9 | lg:(px-16 grid grid-cols-12)">
        <h3 class="col-span-8 | text-4xl text-gray-50 text-center font-dm | lg:(text-5xl text-left) xl:text-6xl">
          Find out more <br /> about how we work
        </h3>
        <button class="button button--white | max-w-[fit-content] | col-span-4 | lg:ml-auto">
          How we work
        </button>
      </div>
    </section>
  );
}
