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
