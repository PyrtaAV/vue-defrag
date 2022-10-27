<template>
  <div
      class="app__configure"
      v-for="list in getListFromStore"
      :key="list.id"
  >
    <div configure__checkbox >
      <img
          :src="require('@/assets/arrow-down.svg')"
          class="configure__arrow"
          :class="{ active: configureVisible }"
          alt="Стрелка вниз"
          @click="toggleVisible(list.id)"
      >
      <input type="checkbox" class="configure__checkbox">
      <label>List {{ list.id }}</label>
    </div>
    <div
        v-if="configureVisible"
        class="configure__items"
        v-for="item in list.itemsConfig"
        :key="item.id"
    >
      <ItemConfig
          :id = "item.id"
          :count="item.count"
          :color="item.color"
          @changeColor="changeColor"
          @changeCount="changeCount"
      />
    </div>
  </div>
</template>

<script>
import ItemConfig from "@/components/ItemConfig";
export default {
  name: "ListConfigItems",
  components: {
    ItemConfig
  },
  data() {
    return ({
      configureVisible: false,
      currentListId: 1
    })
  },
  computed: {
    getListFromStore() {
      return this.$store.state.listConfig.listItems
    }
  },
  methods: {
    toggleVisible(id) {
      this.currentListId = id
      this.configureVisible = !this.configureVisible
    },
    changeColor(color, id) {
      const newListItem = this.$store.getters.getListItems(this.currentListId, id)
      newListItem.color = color
      this.$store.commit('changeItemConfigColor', newListItem, this.currentListId)
    },
    changeCount(count, id) {
      const newListItem = this.$store.getters.getListItems(this.currentListId, id)
      newListItem.count = parseInt(count)
      this.$store.commit('changeItemConfigCount', newListItem, this.currentListId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app__configure {
    margin: 15px;
  }
  .configure {
    &__arrow {
      width: 15px;
      height: 15px;
      margin-right: 10px;
      transform: rotate(-90deg);
      transition: 0.4s;
    }
    &__checkbox {
      margin-right: 10px;
    }
    &__items {
      width: 70%;
      align-items: center;
    }
  }
  .active {
    transform: rotate(0deg);
    transition: 0.4s;
  }
</style>