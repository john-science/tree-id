<template>
  <div id="wanted">
    <NavBar />

    <h2>Sauces I Want to Try</h2>
    <div class="center-it">
      <ul class="big-list">
        <li v-for="item in data" :key="item">
          <template v-if="item.link">
            <a :href="item['link']" target="_blank">{{ item.brewery }}</a>
          </template>
          <template v-else>
            {{ item.brewery }}
          </template>
          - {{ item.sauce }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";
  import rawData from "../assets/wanted_hot_sauces.json";

  // sort the list by brewery name - just for fun
  rawData.sort((a, b) => {
    let fa = (a.brewery + a.sauce).toLowerCase(),
      fb = (b.brewery + a.sauce).toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  export default {
    name: 'Wanted',
    components: {
      NavBar
    },
    data: function() {
      this.data = rawData;
    },
  };
</script>

<style scoped>
.center-it {
  text-align:center;
}
.big-list {
  display:inline-block;
  text-align: left;
}
</style>

