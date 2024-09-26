<template>
  <div class="donate bg-primary-light min-h-screen py-8 md:py-12 px-4 md:px-8">
    <div class="donate__container max-w-3xl mx-auto">
      <h1
        class="donate__title text-3xl md:text-4xl font-bold text-primary text-center mb-6 md:mb-8"
      >
        {{ $t("donation_title") }}
      </h1>

      <div
        class="donate__select-amount bg-white shadow-md rounded-lg p-4 md:p-6 mb-6 md:mb-8"
      >
        <p class="donate__description text-gray-700 mb-4">
          {{ $t("donation_description") }}
        </p>
        <div
          class="donate__amount flex flex-wrap justify-center gap-2 md:gap-4 mb-6"
        >
          <button @click="setAmount(10)" class="btn-amount">10€</button>
          <button @click="setAmount(25)" class="btn-amount">25€</button>
          <button @click="setAmount(50)" class="btn-amount">50€</button>
          <button @click="setAmount(100)" class="btn-amount">100€</button>
        </div>
        <div class="donate__custom-amount mb-6">
          <label
            for="custom-amount"
            class="block text-sm font-medium text-gray-700 mb-2"
            >{{ $t("custom_amount_prompt") }}</label
          >
          <input
            type="number"
            id="custom-amount"
            v-model="amount"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div
        class="payment-info__container bg-white shadow-md rounded-lg p-4 md:p-6"
      >
        <h2
          class="payment-info__title text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6"
        >
          {{ $t("payment_info_title") }}
        </h2>
        <form
          @submit.prevent="processDonation"
          class="payment-info__form space-y-4"
        >
          <div>
            <label
              for="card-number"
              class="block text-sm font-medium text-gray-700 mb-2"
              >{{ $t("card_number") }}</label
            >
            <input
              type="text"
              id="card-number"
              v-model="cardNumber"
              placeholder="1234 5678 9012 3456"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div
            class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
          >
            <div class="w-full md:w-1/2">
              <label
                for="expiry"
                class="block text-sm font-medium text-gray-700 mb-2"
                >{{ $t("expiration_date") }}</label
              >
              <input
                type="text"
                id="expiry"
                v-model="expiry"
                placeholder="MM/AA"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div class="w-full md:w-1/2">
              <label
                for="cvc"
                class="block text-sm font-medium text-gray-700 mb-2"
                >CVC</label
              >
              <input
                type="text"
                id="cvc"
                v-model="cvc"
                placeholder="123"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 mb-2"
              >{{ $t("name_on_card") }}</label
            >
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="John Doe"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-dark transition duration-300"
          >
            {{ $t("donate_button") }} {{ amount }}€
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "AdopteUnPet - Donation",
});

const amount = ref(25);
const cardNumber = ref("");
const expiry = ref("");
const cvc = ref("");
const name = ref("");

const setAmount = (value) => {
  amount.value = value;
};

const processDonation = () => {
  console.log("Traitement du don:", {
    amount: amount.value,
    cardNumber: cardNumber.value,
    expiry: expiry.value,
    cvc: cvc.value,
    name: name.value,
  });
  cardNumber.value = "";
  expiry.value = "";
  cvc.value = "";
  name.value = "";
};
</script>

<style scoped>
.btn-amount {
  @apply bg-primary-light text-primary font-semibold py-2 px-4 rounded-md hover:bg-primary hover:text-white transition duration-300;
}
</style>
