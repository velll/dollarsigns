const $ = (id: string): HTMLElement | null => document.getElementById(id);
const $$ = (selector: string): HTMLElement | null => document.querySelector(selector);
const $$$ = (selector: string): NodeListOf<HTMLElement> => (
  document.querySelectorAll(selector)
);

export { $, $$, $$$ };
