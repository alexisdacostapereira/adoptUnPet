<template>
  <button
    @click="onClick"
    class="rounded-full min-w-40 bg-primary font-bold py-3 px-6"
    :class="modeClasses"
  >
    {{ content }}
  </button>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    default: "light",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});

const modeClasses = computed(() => ({
  " hover:bg-primary-dark bg-primary text-white": props.mode === "dark",
  "hover:bg-primary hover:text-white bg-transparent text-primary border-2 border-primary":
    props.mode === "light",
}));
</script>
