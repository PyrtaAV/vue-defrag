<template>
  <div class="app">
    <div class="app__panel app__panel-border">
      <list-items>
        <Item>
          <ItemConfig></ItemConfig>
        </Item>
      </list-items>
    </div>
    <div class="app__panel">
      <list-items>
        <Item>
          <ItemView></ItemView>
        </Item>
      </list-items>
    </div>
  </div>
</template>

<script>
import ListItems from '@/components/ListItems.vue'
import Item from '@/components/Item.vue'
import ItemConfig from '@/components/ItemConfig.vue'
import ItemView from '@/components/ItemView.vue'


export default {
  name: 'App',
  components: {
    ListItems, 
    Item, 
    ItemConfig, 
    ItemView,
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
