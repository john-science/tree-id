<template>
  <div id="app">
    <NavBar />

    <h2>Identifying Trees</h2>
      <p>I am trying to learn to identify trees. But there’s a lot to learn, so I’m putting my notes here.</p>

    <div class="app-content">
      <ul class="app-list">
        <li><a href="species.html">Species</a> - all tree species, with Wiki links</li>
        <li><a href="family.html">Families</a> - all tree families, with Wiki links</li>
        <li><a href="photos.html">Photos</a> - my own, original photos of trees, by species</li>
        <li><a href="notes.html">Notes</a> - my own, simple, notes to help me learn</li>
      </ul>
    </div>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import "@/global-style.css";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.app-content {
  padding: 1em;
  text-align: center;
}

.app-list {
  display: inline-block;
  text-align: left;
}
</style>
