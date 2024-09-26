<template>
  <header class="bg-white shadow-md">
    <nav
      class="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div class="navbar_title text-primary mb-4 md:mb-0">
        <NuxtLink to="/" class="font-extrabold text-2xl"
          >AdopteUnPet.com</NuxtLink
        >
      </div>
      <div
        class="navbar_links flex flex-col md:flex-row items-center gap-4 md:gap-6 text-primary font-bold"
      >
        <NuxtLink
          to="/about"
          activeClass="selected"
          class="px-3 py-1 hover:bg-primary hover:text-white hover:rounded-xl transition duration-300"
          >{{ $t("about_link") }}</NuxtLink
        >
        <NuxtLink
          to="/adopt"
          activeClass="selected"
          class="px-3 py-1 hover:bg-primary hover:text-white hover:rounded-xl transition duration-300"
          >{{ $t("adopt_link") }}</NuxtLink
        >
        <NuxtLink
          to="/donate"
          activeClass="selected"
          class="px-3 py-1 hover:bg-primary hover:text-white hover:rounded-xl transition duration-300"
          >{{ $t("donate_link") }}</NuxtLink
        >
        <NuxtLink
          to="/contact"
          activeClass="selected"
          class="px-3 py-1 hover:bg-primary hover:text-white hover:rounded-xl transition duration-300"
          >{{ $t("contact_link") }}</NuxtLink
        >
        <select
          @change="switchLanguage($event.target.value)"
          class="focus:outline-none focus:ring-0 bg-transparent"
        >
          <option value="fr">{{ $t("french") }}</option>
          <option value="en">{{ $t("english") }}</option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { locale } = useI18n();
const switchLanguage = (lang) => {
  locale.value = lang;
};
</script>

<style scoped>
.selected {
  background-color: var(--primaryColor);
  color: white;
  border-radius: 12px;
}
</style>
