import maps from './maps.js';


document.addEventListener("DOMContentLoaded", function() {
    
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    function toggleMenu() {
      menu.classList.toggle("hide");
    }
    
    menuButton.addEventListener("click", toggleMenu);

    const mapElement = document.getElementById('map');


    function mapTemplate(mapIndex) {
      return `<div class="map-banner">
                <img class="map-img" src="${maps[mapIndex].mapThumbnail}" alt="Hero Image">
                <h1 class="map-name">${maps[mapIndex].mapName}</h1>
            </div>
            <p class="map-desc">${maps[mapIndex].mapDesc}</p>

            <h2 class="callouts">Callouts</h2>
            <img class="callouts-img" src="${maps[mapIndex].mapCallouts}" alt="callouts">`
    }

    const mapIndex = sessionStorage.getItem('mapIndex');
    if (mapIndex !== null) {
        mapElement.innerHTML = mapTemplate(mapIndex);
    } else {
        mapElement.innerHTML = "<p>No map selected</p>";
    }

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