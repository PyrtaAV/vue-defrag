import { createStore } from 'vuex'
import { listConfigModule } from "@/store/listConfigModule";

export default createStore({
  modules: {
    listConfig: listConfigModule
  }
})
