import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.esm.min.mjs';

const this_js_script = document.getElementById('mermaid_script');
const light_theme = this_js_script.getAttribute('data-light-theme');
const dark_theme = this_js_script.getAttribute('data-dark-theme');

function runmermaid() {
  const theme = (document.body.classList.contains('dark') ? dark_theme : light_theme)
  mermaid.initialize({ startOnLoad: false, theme: theme});
  const items = document.querySelectorAll('.mermaid');
  let counter = 0;
  for (const item of items) {
    const id = counter++;
    if(item.originalCode === undefined) {
      item.originalCode = item.textContent.trim();
    }
    mermaid.render("mermaid"+id, item.originalCode).then((val) => {
      item.innerHTML = val.svg
    }, (err) => {
        console.log(err);
        // Workaround: move incorrectly placed error messages into their diagram
        item.innerHTML = "";
        item.appendChild(document.getElementById("mermaid" + id));
      });
  }
}
document.addEventListener('DOMContentLoaded', runmermaid);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', runmermaid);
