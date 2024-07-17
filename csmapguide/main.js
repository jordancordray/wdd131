import maps from './maps.js';

document.addEventListener("DOMContentLoaded", function() {
    
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");

    function toggleMenu() {
      menu.classList.toggle("hide");
    }
    
    menuButton.addEventListener("click", toggleMenu);

    function loadMapPage(mapIndex) {
      sessionStorage.setItem('mapIndex', mapIndex);
      window.location.href = "./map.html";
    }

    const ancient = document.querySelector(".anc");
    ancient.addEventListener("click", function() { loadMapPage(1); });
    
    const anubis = document.querySelector(".anb");
    anubis.addEventListener("click", function() { loadMapPage(0); });

    const dust2 = document.querySelector(".d2");
    dust2.addEventListener("click", function() { loadMapPage(2); });

    const inferno = document.querySelector(".inf");
    inferno.addEventListener("click", function() { loadMapPage(3); });

    const mirage = document.querySelector(".mrg");
    mirage.addEventListener("click", function() { loadMapPage(4); });

    const nuke = document.querySelector(".nke");
    nuke.addEventListener("click", function() { loadMapPage(5); });

    const vertigo = document.querySelector(".vtg");
    vertigo.addEventListener("click", function() { loadMapPage(6); });

    const ancient2 = document.querySelector(".anc2");
    ancient2.addEventListener("click", function() { loadMapPage(1); });
    
    const anubis2 = document.querySelector(".anb2");
    anubis2.addEventListener("click", function() { loadMapPage(0); });

    const dust22 = document.querySelector(".d22");
    dust22.addEventListener("click", function() { loadMapPage(2); });

    const inferno2 = document.querySelector(".inf2");
    inferno2.addEventListener("click", function() { loadMapPage(3); });

    const mirage2 = document.querySelector(".mrg2");
    mirage2.addEventListener("click", function() { loadMapPage(4); });

    const nuke2 = document.querySelector(".nke2");
    nuke2.addEventListener("click", function() { loadMapPage(5); });

    const vertigo2 = document.querySelector(".vtg2");
    vertigo2.addEventListener("click", function() { loadMapPage(6); });

    document.getElementById('search-btn').addEventListener('click', searchHandler);
    
    function searchHandler(e) {
      e.preventDefault();
      
      const searchInput = document.getElementById('search-map').value;
      const lowerCaseInput = searchInput.toLowerCase();
      
      const map = searchMaps(lowerCaseInput);
      
      if (map.length > 0) {
          loadMapPage(map[0].mapIndex);
      } else {
          console.log("Map not found");

      }
    }
    
    function searchMaps(query){
        const map = maps.filter(map => map.mapName.toLowerCase().includes(query));
        return map
    }
});