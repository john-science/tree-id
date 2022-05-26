<template>
  <div id="app">
    <NavBar />

    <h2>Identifying Trees</h2>
    <br />

    <HotSauceTable />

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
