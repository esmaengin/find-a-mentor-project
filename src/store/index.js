import { createStore, storeKey } from "vuex";

import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules:{
      coaches: coachesModule
  }
});
export default storeKey;