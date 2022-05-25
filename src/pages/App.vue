<template>
  <div id="app">
    <NavBar />

    <h2>Hot Sauce Reviews</h2>
    <p>by Some Pepper Head</p>
    <br />

    <HotSauceTable />

    <br />
    <p>The above are just, like... my opinions, man.</p>
    <br />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HotSauceTable from '@/components/HotSauceTable.vue';
import "@/global-style.css";

export default {
  name: 'App',
  components: {
    NavBar,
    HotSauceTable
  }
}
</script>

<style>
</style>
