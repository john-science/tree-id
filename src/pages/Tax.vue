<template>
  <div id="tax">
    <NavBar />

    <h2>Tree Taxonomy</h2>
    <TreeTaxTable />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import TreeTaxTable from '@/components/TreeTaxTable.vue';
  import "@/global-style.css";

  export default {
    name: 'Tax',
    components: {
      NavBar,
      TreeTaxTable
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
