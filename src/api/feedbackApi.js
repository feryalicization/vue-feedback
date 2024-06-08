import axios from 'axios';

export default {
  async submitFeedback(rating) {
    try {
      const response = await axios.post('http://localhost:8000/feedback', {
        score: rating
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting feedback:', error);
      throw error;
    }
  }
};
