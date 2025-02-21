function isAuto() {
  return document.body.classList.contains("auto");
}

function setTheme() {
  if (!isAuto()) {
    return
  }

  document.body.classList.remove("auto");
  let cls = "light";
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    cls = "dark";
  }

  document.body.classList.add(cls);
}

function invertBody() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

if (isAuto()) {
  window.matchMedia('(prefers-color-scheme: dark)').addListener(invertBody);
}

setTheme();
