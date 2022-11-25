import mutations from './mutations';
import actions from './actions';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
      return {
        lastFetch: null,
        coaches:[
            {
              id: 'c1',
              firstName: 'Büşra',
              lastName: 'Yalınkılıç',
              areas: ['frontend', 'backend'],
              description:
                "I'm Büşra and I've worked as a web developer for years. Let me help you become a developer as well!",
              hourlyRate: 88
            },
            {
              id: 'c2',
              firstName: 'Kübra',
              lastName: 'Kesici',
              areas: ['engineering', 'career',],
              description:
                'I am Kübra and as a endustrial engineer in a big tech company, I can help you get your first job or progress in your current role.',
              hourlyRate: 45
            },
            {
              id: 'c3',
              firstName: 'Abdullah Akın',
              lastName: 'Tokluoğlu',
              areas: ['fullstack', 'career'],
              description:
                'I am Akın and I am working as a full-stack developer in a big tech company, I can help you get your first job and I can give advice to you become a full-stack developer',
              hourlyRate: 50
            }
          ]
      };
  },
  mutations,
  actions,
  getters
};