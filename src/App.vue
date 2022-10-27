<template>
  <div class="app">
    <div class="app__panel app__panel-border">
      <ListConfigItems />
    </div>
    <div class="app__panel">
      <ListViewItems />
    </div>
  </div>
</template>

<script>
import ListViewItems from '@/components/ListViewItems.vue'
import ListConfigItems from "@/components/ListConfigItems"

export default {
  name: 'App',
  components: {
    ListViewItems,
    ListConfigItems,
  }
}
</script>

<style lang="scss">
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
#app {
  font-family: Ubuntu;
  
}
.app {
  display: flex;
  flex-direction: row;

  &__panel {
    width: 50%;
    height: 100vh;

    &-border {
      border-right: 2px solid grey;
    }
  }

}
</style>
