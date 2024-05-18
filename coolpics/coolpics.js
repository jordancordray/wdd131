document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");
  
  function toggleMenu() {
    menu.classList.toggle("hide");
  }
  
  menuButton.addEventListener("click", toggleMenu);

  function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

  function viewerTemplate( alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="images/norris-full.jpeg" alt="${alt}">
    </div>`;
  }

  function viewHandler(event) {
    // Create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;

    // Get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement.getAttribute('src');
    const parts = src.split('-');

    // Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newImageSrc = `${parts[0]}-full.jpeg`;
  
    // Insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate( "Clicked Image"));
  
    // Add a listener to the close button (X) that calls a function called closeViewer when clicked
    function closeViewer() {
      const viewer = document.querySelector(".viewer");
      if (viewer) {
        viewer.remove();
      }
    }

    const closeButton = document.querySelector(".close-viewer");
    if (closeButton) {
      closeButton.addEventListener("click", closeViewer);
    }
  }

  // Add event listener to each image in the gallery
  const gallery = document.querySelector(".gallery");
  if (gallery) {
    gallery.addEventListener("click", function(event) {
      if (event.target.tagName === 'IMG') {
        viewHandler(event);
      }
    });
  }
});