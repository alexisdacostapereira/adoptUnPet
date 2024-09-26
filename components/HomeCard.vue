<template>
  <div class="home-card flex justify-center">
    <div
      class="home-card__container flex flex-col items-center text-center gap-4 border-2 border-primary bg-white rounded-lg p-6 relative shadow-lg"
    >
      <div
        class="home-card__icon bg-white p-2 rounded-full border-2 border-primary absolute -top-8"
      >
        <NuxtImg
          loading="lazy"
          preload
          src="img/svg/patte.svg"
          height="50px"
          width="50px"
        />
      </div>

      <div class="home-card__title mt-6">
        <h1 class="font-semibold text-lg text-primary">{{ title }}</h1>
      </div>

      <div class="home-card__content text-gray-500">
        {{ content }}
      </div>

      <Button mode="dark" :content="$t('learn_more')" class="relative top-14" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
