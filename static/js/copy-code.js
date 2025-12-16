document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copy-code-button");

  copyButtons.forEach((copyButton) => {
    // Code block must be the element before the button
    const codeBlock = copyButton.previousElementSibling;

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
          }, 500); // Reset the button text after 2 seconds
        })
        .catch((err) => {
          console.error("Unable to copy text:", err);
        });
    });
  });
});
