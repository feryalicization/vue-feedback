import { createRouter, createWebHistory } from 'vue-router';
import FeedbackForm from '../components/FeedbackForm.vue';
import TestForm from '../components/TestForm.vue';

const routes = [
  {
    path: '/',
    name: 'FeedbackForm',
    component: FeedbackForm,
  },
  {
    path: '/test',
    name: 'TestForm',
    component: TestForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
