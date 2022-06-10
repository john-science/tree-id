<template>
  <div id="species">
    <NavBar />
    <TreeSpeciesTable />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import TreeSpeciesTable from '@/components/TreeSpeciesTable.vue';
  import "@/global-style.css";

  export default {
    name: 'Species',
    components: {
      NavBar,
      TreeSpeciesTable
    },
  };
</script>
