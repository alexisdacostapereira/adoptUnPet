<template>
  <footer class="bg-primary text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">AdopteUnPet.com</h3>
          <p class="text-sm">
            {{ $t("footer_tagline") }}
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">
            {{ $t("quick_links_title") }}
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="hover:underline">{{
                $t("home_link")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:underline">{{
                $t("about_link")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/adopt" class="hover:underline">{{
                $t("adopt_link")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/donate" class="hover:underline">{{
                $t("donate_link")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:underline">{{
                $t("contact_link")
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ $t("contact_us") }}</h4>
          <p class="text-sm mb-2">
            {{ $t("email_label") }} contact@adopteunpet.com
          </p>
          <p class="text-sm mb-2">{{ $t("phone_label") }} 01 23 45 67 89</p>
          <div class="flex space-x-4 mt-4">
            <NuxtLink to="#" class="text-white hover:text-gray-300">
              <span class="sr-only">Facebook</span>
              <img
                src="../public/img/svg/facebook.svg"
                alt="Facebook"
                class="h-6 w-6"
              />
            </NuxtLink>
            <NuxtLink to="#" class="text-white hover:text-gray-300">
              <span class="sr-only">Instagram</span>
              <img
                src="../public/img/svg/instagram.svg"
                alt="Instagram"
                class="h-6 w-6"
              />
            </NuxtLink>
            <NuxtLink to="#" class="text-white hover:text-gray-300">
              <span class="sr-only">Twitter</span>
              <img
                src="../public/img/svg/twitter.svg"
                alt="Twitter"
                class="h-6 w-6"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-white pt-8 text-center">
        <p class="text-sm">
          &copy; 2024 AdopteUnPet.com. {{ $t("all_rights_reserved") }}.
        </p>
      </div>
    </div>
  </footer>
</template>
