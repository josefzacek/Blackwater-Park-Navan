// init AOS (animate on scroll - https://michalsnik.github.io/aos/ )
AOS.init();


// reload AOS when every lazy loaded image loads
document.querySelectorAll('img').forEach(function(img) {
  img.addEventListener('load', function() {
    AOS.refresh();
    console.log("ref")
  });
});

$( document ).ready(function() {
  // animated svg
  function setTextAnimation(element, delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let svgElement = document.getElementById(element);
    let paths = svgElement.querySelectorAll("path");
    let mode=repeat?'infinite':'forwards'
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }
  setTextAnimation("animated-svg-text",0.1,5.9,2,'ease','#000000',true);

  // scrolly video
  new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video",
    src: "/assets/videos/Blackwater-park-Navan-video.mp4"
  });
});

// load map when it comes to view
var mapInitialized = false;
function onSectionVisible(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (mapInitialized == false){
        // leafletjs map
        var lat = 53.662161;
        var long = -6.695038;
        var map = L.map('map', {
          dragging: !L.Browser.mobile,
          tap: !L.Browser.mobile
        }).setView([lat,long], 12);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([lat,long]).addTo(map);
        mapInitialized = true;
      }
    }
  });
}

// Target the specific section
const targetSection = document.getElementById('map');

// Create an intersection observer
const observer = new IntersectionObserver(onSectionVisible, {
  root: null, // Use the viewport as the root
  threshold: 0 // Execute when 0% of the target is visible, comes to view
});

// Observe the target section
observer.observe(targetSection);
