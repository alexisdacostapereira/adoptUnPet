<template>
  <div ref="mapContainer" class="w-full h-96"></div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from "vue";
import "leaflet/dist/leaflet.css";

const props = defineProps({
  animals: {
    type: Array,
    default: () => [],
  },
  zoom: {
    type: Number,
    default: 6,
  },
  setView: {
    type: Array,
    required: true,
  },
});

const mapContainer = ref(null);
let map = null;
let L = null;
let markers = [];

const createCustomIcon = (imageUrl) => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `
      <div class="marker-pin">
        <div class="pin-background"></div>
        <div class="pin-image" style="background-image: url('${imageUrl}');"></div>
      </div>
    `,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42],
  });
};

const createPopupContent = (animal) => {
  return `
    <div class="custom-popup">
      <img src="${animal.avatar}" alt="${animal.name}" class="animal-avatar">
      <div class="animal-info">
        <p><strong>Animal:</strong> ${animal.type}</p>
        <p><strong>Race:</strong> ${animal.race}</p>
        <p><strong>Nom:</strong> ${animal.name}</p>
        <p><strong>Age:</strong> ${animal.age} ans</p>
      </div>
    </div>
  `;
};

const updateMarkers = () => {
  markers.forEach((marker) => marker.remove());
  markers = [];

  if (props.animals.length > 0) {
    props.animals.forEach((animal) => {
      console.log(animal.avatar);

      const marker = L.marker(
        [animal.geolocation.latitude, animal.geolocation.longitude],
        { icon: createCustomIcon(animal.avatar) }
      )
        .addTo(map)
        .bindPopup(createPopupContent(animal));

      markers.push(marker);
    });
  } else {
    const marker = L.marker(props.setView, {
      icon: createCustomIcon(),
    })
      .addTo(map)
      .bindPopup("Notre siège est ici");
    markers.push(marker);
  }
};

const initMap = async () => {
  if (process.client && !map) {
    L = (await import("leaflet")).default;

    map = L.map(mapContainer.value).setView(props.setView, props.zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    updateMarkers();
  }
};

onMounted(initMap);

watch(() => props.animals, updateMarkers, { deep: true });

onUnmounted(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>

<style scoped>
.leaflet-container {
  height: 100%;
  width: 100%;
}

:global(.custom-div-icon) {
  background: none;
  border: none;
}

:global(.marker-pin) {
  width: 30px;
  height: 42px;
  position: relative;
}

:global(.pin-background) {
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: var(--primaryColor);
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 0 0 -15px;
}

:global(.pin-image) {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -12px 0 0 -12px;
}

:global(.custom-popup) {
  text-align: center;
}

:global(.custom-popup .animal-avatar) {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: block;
  object-fit: cover;
}

:global(.custom-popup .animal-info) {
  text-align: left;
}

:global(.custom-popup .animal-info p) {
  margin: 5px 0;
}
</style>
