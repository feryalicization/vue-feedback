import { createRouter, createWebHistory } from 'vue-router';
import FeedbackForm from '../components/FeedbackForm.vue';

const routes = [
  {
    path: '/',
    name: 'FeedbackForm',
    component: FeedbackForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
