<template>
  <div id="photos">
    <NavBar />

    <h2>Photos of Trees, by Species</h2>
    <p class="not-too-wide">My going theory is that a good way to get better at identifying trees is to do it. So, these pictures probably won't be high hard, they are meant to help me get better at identifying trees.</p>
   <br/>
   <br/>

    <div class="center-it">
      <template>
        <div v-for="item in data" :key="item">
          <h3>{{ item.style }}</h3>
          <h4 v-if="item.examples.length > 0">Examples: {{ item.examples }}</h4>
          <p class="not-too-wide">{{ item.desc }}</p>
          <br/>
          <br/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";

  export default {
    name: 'Photos',
    components: {
      NavBar
    },
  };
</script>

<style scoped>
.center-it {
  text-align:center;
}
.not-too-wide {
  width:min(800px, 90%);
  display:inline-block;
  text-align: left;
}
</style>
