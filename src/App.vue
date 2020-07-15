<template>
  <div id="app">
    <titleeare id="titlediv"></titleeare>
    <div id="menudiv">
      <lefteare></lefteare>
      <!-- <menueare></menueare> -->
      <router-view class='approuterview'></router-view>
    </div>
    <buttomeare id="buttomdiv"></buttomeare>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import titleeare from './components/title.vue'
import buttomeare from './components/buttom.vue'
import lefteare from './components/left.vue'
//import router from './plugins/router'
//import menueare from './components/menu.vue'
@Component({
  components: {
    HelloWorld,
    titleeare,
    buttomeare,
    lefteare,
   
  },
})
export default class App extends Vue {}
</script>

<style scope>
#app {
  margin: 0;
  padding: 0;
  box-shadow: 0px 5px 5px #D1D0D0;
}

#titlediv{
    height:60px;
    width:100%;
    background-color:#c62F2F;
}

#menudiv{
    position: relative;
    height: 90%;
    width:100%;
    display: flex;
    background-color: pink;
    min-height:574px;
    box-sizing: border-box;
}

#buttomdiv{
    position: relative;
    height:60px;
    width:100%;
    background-color:#f6f6f6;
    border: 1px solid #E1E1E1;
}

.approuterview{
  background-color: #fafafa;
  position: absolute;
  height: 100%;
  left: 165px;
  overflow: scroll;
  box-sizing: border-box;
}
</style>
