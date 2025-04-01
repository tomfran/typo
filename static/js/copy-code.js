document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach((codeBlock) => {
    if (codeBlock.className == "mermaid") return;
    const copyButton = document.createElement("button");
    copyButton.className = "copy-code-button";
    copyButton.textContent = "copy";

    // Insert the button inside the <pre> block
    codeBlock.appendChild(copyButton);

    copyButton.addEventListener("click", function () {
      const code = codeBlock.querySelector("code");
      // Get the code content
      const textToCopy = code.textContent || code.innerText;

      // Use the Clipboard API to copy the text
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          // Change button text to "Copied"
          copyButton.textContent = "copied";

          setTimeout(() => {
            copyButton.textContent = "copy";
          }, 2000); // Reset the button text after 2 seconds
        })
        .catch((err) => {
          console.error("Unable to copy text:", err);
        });
    });
  });
});
