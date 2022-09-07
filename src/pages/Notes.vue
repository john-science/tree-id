<template>
  <div id="notes">
    <NavBar />

    <h2>Just my personal notes</h2>
    <p>These are just my notes while I learn to ID trees.</p>
    <p>The Arbor Day website is a good resource for IDing trees in North America. (For now, I’m confining this work to just the trees of North America. It’s where I live, and is a big enough topic for
    one mortal.)</p>

    <h3>High-Level Taxonomy</h3>
    <p>All trees are either Gymnosperms / softwoods or Angiosperms / hardwoods.</p>
    <p>Angiosperms are flowering plants. They are relatively newer than Gymnosperms, and are really catching on. Between 140 and 120 million years ago flowering plants started to spread and they
    haven’t stopped since. Apparently, Darwin thought this was quite the mystery.</p>
    <p>Gymnosperms include: conifers, cycads, and ginko trees. All other trees are Angiosperms.</p>
    <p>Angiosperms aren’t just flowering, their seeds also have casings.</p>

    <h3>Identifying Conifers</h3>
    <p><a href="https://leafyplace.com/identifying-conifers-pine-fir-spruce/">This guide</a> to identifying conifers is just excellent. Worth a second read.</p>

    <h3>Pronouncing Scientific Names</h3>

    <ul><li>“-aceae” is pronounced “A-C-I” or “ay-see-eye”</li></ul>
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
.big-list {
  display:inline-block;
  text-align: left;
}
p {
  max-width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
ul {
  list-style-type: none;
}
</style>
