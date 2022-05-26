<template>
  <div id="styles">
    <NavBar />

    <h2>Hot Sauce Styles</h2>
    <p class="not-too-wide">At some point, the variety of hot sauces just sky-rocketed. But before the craft hot sauce movement, there were distinct styles of spicy sauces around the world. We attempt to identify the most popular here.</p>
   <br/>
   <br/>

    <div class="center-it">
      <template>
        <div v-for="item in data" :key="item">
          <h3>{{ item.style }}</h3>
          <h4 v-if="item.examples.length > 0">Examples: {{ item.examples }}</h4>
          <p class="not-too-wide">{{ item.desc }}</p>
          <br/>
          <br/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";
  import styleData from "../assets/styles_of_sauces.json";
  import sauceData from "../assets/hot_sauce_reviews.json";

  /** Grab style examples from our reviews */
  let styleToSauce = {};
  for (let item in styleData) {
    styleToSauce[styleData[item].style] = [];
  }
  for (let item in sauceData) {
    styleToSauce[sauceData[item].style].push(sauceData[item].sauce.split(" - ")[0] + " by " + sauceData[item].brewery);
  }
  /** Load 3 arbitrary examples into our style guide */
  for (let item in styleData) {
    styleData[item].examples = [];
    let exs = styleToSauce[styleData[item].style];
    if (exs && exs.length > 0) {
      styleData[item].examples = exs.slice(0, 2);
    }
  }

  export default {
    name: 'Styles',
    components: {
      NavBar
    },
    data: function() {
      this.data = styleData;
    },
  };
</script>

<style scoped>
.center-it {
  text-align:center;
}
.not-too-wide {
  width:min(800px, 90%);
  display:inline-block;
  text-align: left;
}
</style>
