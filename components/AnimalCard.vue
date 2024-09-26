<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <div class="relative h-48 overflow-hidden">
      <NuxtImg
        loading="lazy"
        preload
        :src="avatar"
        :alt="name"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute top-0 left-0 bg-primary text-white px-2 py-1 m-2 rounded-md text-sm"
      >
        {{ $t(type) }} {{ avatar }}
      </div>
    </div>
    <div class="p-4">
      <h2 class="text-xl font-semibold text-primary mb-2">{{ name }}</h2>
      <div class="flex justify-between mb-2">
        <span class="text-sm text-gray-600">{{ race }}</span>
        <span class="text-sm text-gray-600"
          >{{ age }} an{{ age > 1 ? "s" : "" }}</span
        >
      </div>
      <div class="text-sm text-gray-600 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 inline-block mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {{ city }}
      </div>
      <p class="text-sm text-gray-700 mb-4 line-clamp-3">
        {{ $t(description) }}
      </p>
      <button
        class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        {{ $t("learn_more") }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});
</script>
