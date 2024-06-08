<template>
  <div>
    <h2>How would you rate your satisfaction with our product?</h2>
    <div class="rating">
      <label v-for="n in 5" :key="n">
        <input type="radio" :value="n" v-model="rating">
        {{ n }}
      </label>
    </div>
    <div class="rating-description">
      <span>Very dissatisfied</span>
      <span>Very satisfied</span>
    </div>
    <button @click="submitFeedback">Submit</button>
    <div v-if="feedbacks.length">
      <h3>Submitted Feedbacks:</h3>
      <ul>
        <li v-for="feedback in feedbacks" :key="feedback.id">
          Score: {{ feedback.score }}
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  data() {
    return {
      rating: 1,
      feedbacks: [],
    };
  },
  methods: {
    async submitFeedback() {
      try {
        await axios.post('http://localhost:8000/feedback/', {
          score: this.rating,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

        alert('Feedback submitted successfully!');
        this.fetchFeedbacks();
      } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('Failed to submit feedback. Please try again.');
      }
    },
    async fetchFeedbacks() {
      try {
        const response = await axios.get('http://localhost:8000/feedbacks/');
        this.feedbacks = response.data;
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    },
  },
  mounted() {
    this.fetchFeedbacks();
  },
};
</script>




<style scoped>
.rating {
  margin-bottom: 10px;
}
.rating-description {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
