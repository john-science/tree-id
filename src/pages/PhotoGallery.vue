<template>
  <div id="photogallery">
    <NavBar />

    <h2>Photos of Trees, by Species</h2>
    <p class="not-too-wide">My going theory is that a good way to get better at identifying trees is to do it. So, these pictures probably won't be high art, they are meant to help me get better at identifying trees.</p>
    <p>Please Note: These photos are my own work, and I reserve all copyright privileges to them.</p>
    <br/>
    <br/>
    <ul v-for="photo in photos" :key="photo">
      <li>{{ photo }}</li>
    </ul>

  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";

  // figure out which 
  let urlParams = new URLSearchParams(window.location.search);
  var thisSpecies = "";
  if (urlParams.has('gs')) {
    thisSpecies = urlParams.get('gs');
  }

  // grab all the photos, inside folders called Genus_species
  var thesePhotos = [];
  if (thisSpecies) {
    const photoz = require.context('@/assets/photos/', true, /\.(png|jpe?g)$/i).keys();
    for (var i=0; i < photoz.length ; i++) {
      let pp = photoz[i];
      if (pp.indexOf(thisSpecies) >= 0) {
        thesePhotos.push(pp);
      }
    }
  }

  export default {
    name: 'PhotoGallery',
    components: {
      NavBar,
    },
    props: {
      photos: Array,
    },
    data: function() {
      this.photos = thesePhotos;
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
