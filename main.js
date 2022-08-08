import L from "leaflet";
import { getGeo, getCurrentIP } from "./src/js/service";
import { changeText } from "./src/js/utils";
import "./src/assets/style.css";
import "leaflet/dist/leaflet.css";
import locationIcon from "./src/assets/icon-location.svg";

const map = L.map("map", {
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

const marker = L.marker([49.8419, 24.0315], { icon: myIcon }).addTo(map);

export const centerMap = ({ lat, lng }) => {
  map.setView([lat, lng], 16);
  marker.setLatLng(new L.LatLng(lat, lng));
};

export const changeView = (res) => {
  // cange DOM
  const textIP = document.getElementById("ip-address");
  const textLocation = document.getElementById("location");
  const textTimezone = document.getElementById("timezone");
  const textISP = document.getElementById("isp");

  if (res.location) {
    const { location, isp, ip } = res;
    changeText(textIP, ip);
    changeText(textLocation, `${location.city}, ${location.country}`);
    changeText(textTimezone, `UTC ${location.timezone}`);
    changeText(textISP, isp);
    centerMap({
      lat: location.lat,
      lng: location.lng,
    });
  } else {
    changeText(textIP, "....");
    changeText(textLocation, "....");
    changeText(textTimezone, "....");
    changeText(textISP, "....");
  }
};

getCurrentIP().then((res) => {
  getGeo({ ipAddress: res.ip }).then((res) => changeView(res));
});

document.getElementById("input-ip").addEventListener("submit", (e) => {
  e.preventDefault();
  /// value api
  const ipAddress = document.getElementById("ip");

  // const
  getGeo({ ipAddress: ipAddress.value }).then((res) => changeView(res));
});
