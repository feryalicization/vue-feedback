<template>
  <div class="d-flex align-center" style="height: 100vh;">
    <v-card
      class="px-2 mx-auto"
      max-width="600"
      rounded="lg"
      theme="white"
      title=""
      variant="flat"
    >
      <v-progress-linear model-value="20"></v-progress-linear>

      <div class="text-h6 px-6 pt-2 pb-6">
        How satisfied are you with developing using Vuetify?
      </div>

      <div class="d-flex align-center justify-center flex-column">
        <v-rating
          v-model="rating"
          :item-labels="[1, 2, 3, 4, 5]"
          class="ma-2"
          item-label-position="bottom"
          size="100px"
        ></v-rating>
      </div>

      <br>
      
      <div class="text-p d-flex justify-between px-6">
        <span class="text-start" style="flex: 1;">Very Dissatisfied</span>
        <span class="text-end" style="flex: 1;">Satisfied</span>
      </div>

    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4,
    };
  },
};
</script>
