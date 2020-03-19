function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";

    mapLink.href = `    https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    mapLink.textContent = `voir sur google map`;
  }

  function error() {
    status.textContent = "Impossible d'avoir votre geolocalisation";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation est pas supporter par votre navigateur";
  } else {
    status.textContent = "Chargement…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

if (document.querySelector("#find-me")) {
  document.querySelector("#find-me").addEventListener("click", geoFindMe);
}
