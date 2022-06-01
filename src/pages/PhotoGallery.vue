<template>
  <div id="photogallery">
    <NavBar />

    <span v-if="photos.length">
      <h2>{{ photos.length }} Photos of {{ species.replace("_", " ") }}</h2>
      <p>Please Note: These photos are my own work, and I reserve all copyright privileges to them.</p>
      <br/>
    </span>
    <span v-if="!photos.length">
      <br/>
      <h2>Photos not found.</h2>
    </span>

    <span v-for="photo in photos" :key="photo">
      <br/>
      <h4>{{ photo.split("/")[1].split(".")[0].replace("_", " ").replace("_", " - ").replace("_", " ") }}</h4>
      <img :src="require(`../assets/photos/${photo}`)"/>
      <br/>
    </span>

    <br/>
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
    if (thisSpecies.length < 5 || thisSpecies.indexOf("_") < 0) {
      // this needs to be a valid search string
      thisSpecies = "";
    }
  }

  // grab all the photos, inside folders called Genus_species
  var thesePhotos = [];
  if (thisSpecies) {
    const photoz = require.context('@/assets/photos/', true, /\.(png|jpe?g)$/i).keys();
    for (var i=0; i < photoz.length ; i++) {
      let pp = photoz[i];
      if (pp.indexOf(thisSpecies) >= 0) {
        thesePhotos.push(pp.split("./")[1]);
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
      this.species = thisSpecies;
    },
  };
</script>
