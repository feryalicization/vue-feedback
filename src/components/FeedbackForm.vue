<template>
  <div class="d-flex align-center justify-center" style="height: 100vh;">
    <v-btn @click="showPopup = true">Give Feedback</v-btn>

    <v-dialog v-model="showPopup" max-width="600">
      <v-card>
        <v-card-text>
          <div class="d-flex align-center">
            <v-card
              class="px-2 mx-auto"
              max-width="600"
              rounded="lg"
              theme="white"
              variant="flat"
            >
              <v-alert
                v-if="showAlert"
                :type="alertType"
                dismissible
                @input="showAlert = false"
              >
                Feedback submitted successfully!
              </v-alert>

              <br>
              
              <v-progress-linear :model-value="rating * 20" color="#0000FF"></v-progress-linear>

              <div class="text-h6 px-6 pt-2 pb-6">
                How would you rate your satisfaction with our product?
              </div>

              <div class="d-flex align-center justify-center flex-column">
                <v-rating
                  v-model="rating"
                  :item-labels="[1, 2, 3, 4, 5]"
                  class="ma-2"
                  item-label-position="bottom"
                  size="100px"
                  style="font-size: 40px; margin: 10px;"
                  color="#818589"
                  @click="submitFeedback"
                ></v-rating>
              </div>

              <div class="text-p d-flex justify-between px-6">
                <span class="text-start" style="flex: 1;color: #818589;">Very Dissatisfied</span>
                <span class="text-end" style="flex: 1;color: #818589">Very Satisfied</span>
              </div>
            </v-card>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closePopup">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import feedbackApi from '@/api/feedbackApi';

export default {
  data() {
    return {
      rating: 4,
      showAlert: false,
      alertType: 'success',
      showPopup: false
    };
  },
  methods: {
    async submitFeedback() {
      try {
        await feedbackApi.submitFeedback(this.rating);
        this.showAlert = true;
        this.alertType = 'success';
        setTimeout(() => {
          this.closeAlert();
        }, 3000);
      } catch (error) {
        console.error('Error submitting feedback:', error);
        this.showAlert = true;
        this.alertType = 'error';
      }
    },
    closeAlert() {
      this.showAlert = false;
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

