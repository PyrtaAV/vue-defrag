<template>
  <div class="app__configure">
    <div configure__checkbox >
      <img
          :src="require('@/assets/arrow-down.svg')"
          class="configure__arrow"
          :class="{ active: configureVisible }"
          alt="Стрелка вниз"
          @click="toggleVisible"
      >
      <input type="checkbox" class="configure__checkbox">
      <label>List 1</label>
    </div>
    <div
        v-if="configureVisible"
        class="configure__items"
        v-for="item in $store.state.listConfig.itemsConfig"
        :key="item.id"
    >
      <ItemConfig
          :id = "item.id"
          :count="item.count"
          :color="item.color"
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
      configureVisible: false
    })
  },
  methods: {
    toggleVisible() {
      this.configureVisible = !this.configureVisible
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