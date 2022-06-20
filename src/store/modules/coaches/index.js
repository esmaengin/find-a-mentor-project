import mutations from './mutations';
import actions from './actions';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
      return {
        coaches:[
            {
              id: 'c1',
              firstName: 'Büşra',
              lastName: 'Yalınkılıç',
              areas: ['frontend', 'backend', 'career'],
              description:
                "I'm Büşra and I've worked as a web developer for years. Let me help you become a developer as well!",
              hourlyRate: 30
            },
            {
              id: 'c2',
              firstName: 'Kübra',
              lastName: 'Kesici',
              areas: ['endustrial engineering', 'career', 'planning engineer'],
              description:
                'I am Kübra and as a endustrial engineer in a big tech company, I can help you get your first job or progress in your current role.',
              hourlyRate: 30
            }
          ]
      };
  },
  mutations,
  actions,
  getters
};