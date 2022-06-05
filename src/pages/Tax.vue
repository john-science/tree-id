<template>
  <div id="tax">
    <NavBar />
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
