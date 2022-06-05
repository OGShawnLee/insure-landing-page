import {
  introDesktop,
  introMobile,
  pIntroLeftMobile,
  pIntroRightMobile,
  pIntroLeftDesktop,
  pIntroRightDesktop
} from "@assets";
import { useWindowSize } from "@signals";
import { createMemo } from "solid-js";

export default function Hero() {
  const { x } = useWindowSize();
  const imageSrc = createMemo(() => (x() > 375 ? introDesktop : introMobile));
  return (
    <section
      class="relative md:(pt-28 py-32 bg-primary-violet) lg:bg-transparent"
      id="hero-section"
    >
      <div class="mx-auto | grid sm:grid-cols-12 md:(grid grid-cols-2 max-w-2xl gap-8) lg:max-w-4xl xl:max-w-6xl">
        <div class="@sm:col-span-5 md:order-2">
          <img
            class="h-full w-full object-cover"
            src={imageSrc()}
            alt=""
            height="675"
            width="560"
          />
        </div>
        <div class="relative py-18 px-8 | bg-primary-violet overflow-hidden | @sm:col-span-7 md:(order-1 p-0 bg-transparent static)">
          <div class="<sm:max-w-xs <sm:mx-auto flex flex-col items-center gap-6 | text-center sm:(items-start text-left) md:p-0">
            <header class="flex flex-col items-center gap-16 | md:items-start">
              <div aria-hidden="true" class="hidden w-32 h-0.5px | bg-gray-50 | md:block" />
              <h2 class="text-4xl text-gray-50 font-dm lg:text-7xl">Humanizing your insurance.</h2>
            </header>
            <p class="text-gray-50/90 leading-relaxed">
              Get your life insurance coverage easier and faster. We blend our expertise and
              technology to help you find the plan that’s right for you. Ensure you and your loved
              ones are protected.
            </p>
            <button class="button button--white | relative z-10 max-w-[fit-content] mt-3">
              View plans
            </button>
            <picture aria-hidden="true">
              <source media="(min-width: 1024px)" srcset={pIntroLeftDesktop} />
              <img
                class="absolute top-0 left-0 lg:(top-auto bottom-0) pointer-events-none"
                src={pIntroLeftMobile}
                alt=""
              />
            </picture>
            <picture aria-hidden="true">
              <source media="(min-width: 1024px)" srcset={pIntroRightDesktop} />
              <img
                class="absolute top-full right-0 transform <lg:-translate-y-1/2 lg:top-0 pointer-events-none"
                src={pIntroRightMobile}
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
