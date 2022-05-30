<template>
  <div id="photos">
    <NavBar />

    <h2>Photos of Trees, by Species</h2>
    <p class="not-too-wide">My going theory is that a good way to get better at identifying trees is to do it. So, these pictures probably won't be high art, they are meant to help me get better at identifying trees.</p>
    <p>It also expect to share some of these with Wikipedia, as time goes on.</p>
    <br/>
    <br/>

    <div class="center-it">
      <template>
        <div v-for="item in gen_spec" :key="item">
          <h4>{{ item }}</h4>
          <br/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";

  // grab all the photos, inside folders called Genus_species
  const photos = require.context('@/assets/photos/', true, /\.(png|jpe?g)$/i).keys()
  console.log(photos)
  var gs = new Set();
  for (var i=0; i< photos.length ; i++) {
    let pp = photos[i].split("./")[1].split("/")[0];
    if (pp.length > 3 && pp.indexOf("_") >= 0) {
      gs.add(pp);
    }
  }

  export default {
    name: 'Photos',
    components: {
      NavBar
    },
    data: function() {
      this.photoPaths = photos;
      this.gen_spec = gs;
      return {};
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
