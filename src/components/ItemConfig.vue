<template>
    <div class="app__item">
      <div class="app__checkbox">
        <input
            type="checkbox"
            id="item__checkbox"
            class="checkbox__item"
            @change="$store.commit('toggleChecked')"
        >
        <label for="item__checkbox"> item 1</label>
      </div>
      <div class="checkbox__config">
        <p @click="toggleVisible">{{ $store.state.item.count }}</p>
          <div class="app__modal" v-if="isVisible">
            <button
                class="modal__btn"
                @click="$store.commit('incrementCount')"
            >+</button>
            <button
                class="modal__btn"
                @click="$store.commit('decrementCount')"
            >-</button>
          </div>
        <input
            type="color"
            class="checkbox__color"
            :value="$store.state.item.color"
            @change="$store.commit('setColor', $event.target.value)"
        >
      </div>
    </div>
</template>
<script>

export default {
  name: 'ItemConfig',
  data() {
    return({
      isVisible: false,
    })
  },
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>
<style lang="scss" scoped>
    .app__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px;
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