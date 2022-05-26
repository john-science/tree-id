<template>
  <div id="app">
    <NavBar />

    <h2>Identifying Trees</h2>
    <br />

    <TreeTaxTable />

    <br />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TreeTaxTable from '@/components/TreeTaxTable.vue';
import "@/global-style.css";

export default {
  name: 'App',
  components: {
    NavBar,
    TreeTaxTable
  }
}
</script>

<style>
</style>
