// TypeScript declarations for GSAP plugins that may not have type exports for deep imports.
// This file prevents TS errors like "Could not find a declaration file for module ..." during build.

declare module "gsap/ScrollTrigger" {
  import { Plugin } from "gsap";
  const ScrollTrigger: Plugin;
  export { ScrollTrigger };
  export default ScrollTrigger;
}

declare module "gsap/SplitText" {
  // Minimal typings for GSAP SplitText plugin.
  // The plugin accepts selectors or elements (or arrays thereof) and always returns
  // tombed arrays for chars/words/lines.
  export interface SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }

  const SplitText: {
    new (
      target: string | Element | Element[] | NodeListOf<Element> | string[] | Array<Element | string>,
      vars?: any
    ): SplitText;
  };

  export { SplitText };
  export default SplitText;
}

declare module "gsap/ScrollSmoother" {
  import { Plugin } from "gsap";
  const ScrollSmoother: Plugin;
  export { ScrollSmoother };
  export default ScrollSmoother;
}
