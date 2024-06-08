import { createRouter, createWebHistory } from 'vue-router';
import FeedbackForm from '../components/FeedbackForm.vue';
import Test from '../components/TestForm.vue';

const routes = [
  {
    path: '/',
    name: 'FeedbackForm',
    component: FeedbackForm,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
