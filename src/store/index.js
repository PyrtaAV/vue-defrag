import { createStore } from 'vuex'
import { itemModule } from '@/store/itemModule'
import { listModule } from "@/store/listModule";

export default createStore({
  modules: {
    item: itemModule,
    list: listModule
  }
})
