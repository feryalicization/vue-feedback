<template>
  <v-card
    class="px-2 mx-auto"
    max-width="300"
    rounded="lg"
    text="How satisfied are you with developing using Vuetify?"
    theme="dark"
    title="SURVEY"
    variant="flat"
  >
    <template v-slot:append>
      <div class="me-n2">
        <v-btn
          density="comfortable"
          icon="$close"
          variant="plain"
        ></v-btn>
      </div>
    </template>

    <v-item-group
      v-model="model"
      class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
    >
      <v-item
        v-for="n in 5"
        :key="n"
      >
        <v-btn
          :active="model === n"
          :icon="`mdi-numeric-${n}`"
          height="40"
          variant="text"
          width="40"
          border
          @click="model = n"
        ></v-btn>
      </v-item>
    </v-item-group>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      model: null,
    };
  },
};
</script>
