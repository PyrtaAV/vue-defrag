<template>
    <div class="app__item">
      <div class="app__checkbox">
        <label>
          <input
              type="checkbox"
              id="item__checkbox"
              class="checkbox__item"
              @change="$store.commit('toggleChecked')"
          >
          item {{ id }}
        </label>
      </div>
      <div class="checkbox__config">
        <input
            type="text"
            class="checkbox__count"
            :value="count"
            @change="changeCount">
        <input
            type="color"
            class="checkbox__color"
            :value="color"
            @change="changeColor"
        >
      </div>
    </div>
</template>
<script>
export default {
  name: 'ItemConfig',
  props: {
    count: Number,
    color: String,
    id: Number
  },
  data() {
    return({
      isVisible: false,
    })
  },
  computed: {

  },
  methods: {
    changeColor(event) {
      const newItem = this.$store.getters.getItemConfig(this.id)
      newItem.color = `${event.target.value}`
      this.$store.commit('changeItemConfigColor', newItem)
    },
    changeCount(event) {
      const newItem = this.$store.getters.getItemConfig(this.id)
      newItem.count = parseInt(event.target.value)
      this.$store.commit('changeItemConfigCount', newItem)
    }
  },
}
</script>
<style lang="scss" scoped>
    .app__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 12px 15px;
    }
    .app__modal {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: space-between;
    }
    .checkbox {
      &__item {
        margin-right: 10px;
      }
      &__config {
        display: flex;
        align-items: center;
        position: relative;
      }
      &__count {
        border: none;
        width: 30px;
      }
      &__color {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        border: none;
        background-color: transparent;
      }
    }
    .modal__btn {
      background-color: transparent;
      border: 1px solid lightgray;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
</style>