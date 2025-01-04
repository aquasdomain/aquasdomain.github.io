document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader-wrapper");
    const content = document.querySelector(".content");
  
    // Wait for loader animation to finish
    setTimeout(() => {
      loader.style.display = "none";
      content.classList.add("visible");
    }, 2500);
  });
  