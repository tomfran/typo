import mermaid from "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs";

const this_js_script = document.getElementById("mermaid_script");
const light_theme = this_js_script.getAttribute("data-light-theme");
const dark_theme = this_js_script.getAttribute("data-dark-theme");

let render_count = 0;

function is_dark() {
  if (document.body.classList.contains("dark")) return true;
  if (document.body.classList.contains("light")) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

async function render_with_theme(code, theme) {
  const id = "mermaid" + render_count++;
  mermaid.initialize({ startOnLoad: false, theme: theme });
  const val = await mermaid.render(id, code);
  return val.svg;
}

async function runmermaid(force_light = false) {
  const active_theme = !force_light && is_dark() ? dark_theme : light_theme;
  const other_theme = active_theme === light_theme ? dark_theme : light_theme;
  const items = document.querySelectorAll(".mermaid");

  for (const item of items) {
    if (item.originalCode === undefined) {
      item.originalCode = item.textContent.trim();
    }
    if (!item.svgCache) {
      item.svgCache = {};
    }

    if (item.svgCache[active_theme]) {
      item.innerHTML = item.svgCache[active_theme];
      continue;
    }

    const id = "mermaid" + render_count++;
    mermaid.initialize({ startOnLoad: false, theme: active_theme });
    try {
      const val = await mermaid.render(id, item.originalCode);
      item.svgCache[active_theme] = val.svg;
      item.innerHTML = val.svg;

      if (other_theme !== active_theme && !item.svgCache[other_theme]) {
        item.svgCache[other_theme] = await render_with_theme(
          item.originalCode,
          other_theme,
        );
      }
    } catch (err) {
      console.log(err);
      item.innerHTML = "";
      const errEl = document.getElementById(id);
      if (errEl) {
        item.appendChild(errEl);
      }
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => runmermaid());
} else {
  runmermaid();
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => runmermaid());
window.addEventListener("beforeprint", () => runmermaid(true));
window.addEventListener("afterprint", () => runmermaid());
