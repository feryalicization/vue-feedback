<template>
  <div class="d-flex align-center justify-center flex-column">
    <v-rating
      v-model="rating"
      :item-labels="['sad', '', '', '', 'happy']"
      class="ma-2"
      item-label-position="bottom"
    ></v-rating>
  </div>
</template>
<script>
  export default {
    data: () => ({ rating: 4 }),
  }
</script>