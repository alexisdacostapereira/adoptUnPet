<template>
  <div class="relative inline-block w-60">
    <div
      @click="toggleDropdown"
      class="w-full h-14 p-2 flex justify-between items-center rounded-xl cursor-pointer text-primary bg-white border-2 border-primary"
    >
      <span>{{ modelValue || placeholder }}</span>
      <svg
        class="w-4 h-4"
        :class="{ 'rotate-180': isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>

    <div
      v-if="isOpen"
      class="absolute mt-2 w-full max-h-[166px] bg-white border border-primary rounded-xl shadow-lg z-10 overflow-y-scroll"
    >
      <ul>
        <li
          v-for="item in data"
          :key="item"
          @click="selectItem(item)"
          class="p-2 hover:bg-primary-light cursor-pointer transition-colors duration-300 ease-in-out"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
  },
  data: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item) => {
  emit("update:modelValue", item);
  isOpen.value = false;
};

watch(
  () => props.modelValue,
  () => {
    isOpen.value = false;
  }
);
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}
</style>
