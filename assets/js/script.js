$( document ).ready(function() {
  // animated svg
  function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let paths = document.querySelectorAll("path");
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
  setTextAnimation(0.1,5.9,2,'ease','#000000',true);

  // scrolly video
  new ScrollyVideo({
    scrollyVideoContainer: "scrolly-video",
    src: "/assets/videos/Blackwater-park-Navan-video.mp4"
  });

  // leafletjs map
  var lat = 53.662161;
  var long = -6.695038;
  var map = L.map('map').setView([lat,long], 12);
      
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  var marker = L.marker([lat,long]).addTo(map);
});
