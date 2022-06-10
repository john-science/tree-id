<template>
  <div id="genus">
    <NavBar />
    <TreeFamilyTable />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import TreeFamilyTable from '@/components/TreeFamilyTable.vue';
  import "@/global-style.css";

  export default {
    name: 'Family',
    components: {
      NavBar,
      TreeFamilyTable
    },
  };
</script>
