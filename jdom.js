export default class $J {
  static #win = typeof window !== "undefined" ? window : undefined;
  static setWindow(win) { $J.#win = win; }

  static parse(text, type) { return new $J.#win.DOMParser().parseFromString(text, type); }
  static create(html) {
    const tpl = $J.#win.document.createElement("template");
    tpl.innerHTML = html.trim();

    const nodes = tpl.content.children;
    return nodes.length === 1 ? nodes[0] : [...nodes];
  }

  static ready(callback) { $J.#win.document.addEventListener("DOMContentLoaded", callback); }
  static id(elementId) { return $J.#win.document.getElementById(elementId) }
  static one(selector, base = $J.#win.document) { return base.querySelector(selector); }
  static all(selector, base = $J.#win.document) { return [...base.querySelectorAll(selector)]; }
}