import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.3.1";

async function initMap(locations) {
  console.log(locations)
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16
    ,
    center: { lat: 13.8485341, lng: 100.5679966 },
    mapId: "DEMO_MAP_ID",
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const pinGlyph = new google.maps.marker.PinElement({
      glyph: label,
      glyphColor: "white",
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
      content: pinGlyph.element,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(position.lat + ", " + position.lng);
      infoWindow.open(map, marker);

    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ map, markers });
}

const locations = [
  { lat: 13.848638052055286, lng: 100.56930806000034, name:'bar-vit' },
  { lat: 13.849941084797761, lng: 100.57169825837535 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];

// const stadium = [{ lat: 13.850000203318615, lng: 100.57845207271471 }]
// const Atm = [{ lat: -39.927193, lng: 175.053218 }]
// const bus = [{ lat: -39.927193, lng: 175.053218 }]
// const cafe = [{ lat: -39.927193, lng: 175.053218 }]

// const cafeteria = document.querySelectorAll['.menu'][0].

const cafeteria = document.getElementsByClassName("menu")[0].addEventListener("click", () => initMap([
  { lat: 13.845639864698926, lng: 100.57053636304832 },
  { lat: 13.846237253555342, lng: 100.56971639971428 },
  { lat: 13.848747697163782, lng: 100.56694297798099 }
]));
const stadium = document.getElementsByClassName("menu")[1].addEventListener("click", () =>
initMap([
  { lat: 13.846237253555342, lng: 100.56971639971428 },
]));
const ATM = document.getElementsByClassName("menu")[2].addEventListener("click", () => initMap([
  { lat: 13.845639864698926, lng: 100.57053636304832 }
]));
const bus = document.getElementsByClassName("menu")[3].addEventListener("click", () => initMap([
  { lat: 13.848747697163782, lng: 100.56694297798099 }
]));
const cafe = document.getElementsByClassName("menu")[4].addEventListener("click", () => initMap([
  { lat: 13.845639864698926, lng: 100.57053636304832 },
  { lat: 13.846237253555342, lng: 100.56971639971428 },
  { lat: 13.848747697163782, lng: 100.56694297798099 }
]));
initMap();