import "./src/assets/style.css";
import "leaflet/dist/leaflet.css";
import locationIcon from "./src/assets/icon-location.svg";
import L from "leaflet";

var map = L.map("map", {
  center: [49.8419, 24.0315],
  zoom: 16,
  layers: [
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }),
  ],
});
var myIcon = L.icon({
  iconUrl: locationIcon,
});

L.marker([49.8419, 24.0315],  {icon: myIcon}).addTo(map);
