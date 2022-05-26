<template>
  <div id="notes">
    <NavBar />

    <h2>Just my personal notes</h2>
    <h3>on identifying trees</h3>
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

  export default {
    name: 'Notes',
    components: {
      NavBar
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
