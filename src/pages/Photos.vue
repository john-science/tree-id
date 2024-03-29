<template>
  <div id="photos">
    <NavBar />

    <h2>Photos of Trees, by Species</h2>
    <p class="not-too-wide">My going theory is that a good way to get better at identifying trees is to do it. So, these pictures probably won't be high art, they are meant to help me get better at identifying trees.</p>
    <p>Please Note: These photos are my own work, and I reserve all copyright privileges to them.</p>
    <br/>
    <br/>

    <table class="center">
      <thead>
        <th v-for="header in headers.slice(0, -1)" :key="header" @click="sortBy(header)" :class="{ active: sortKey == header }">
          {{ header | capitalize }}
        <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'"></span>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.genus + item.species">
          <td v-for="header in headers.slice(0, -2)" :key="header">{{ item[header] }}</td>
          <template v-if="item['link']">
            <td><a :href="'photogallery.html?gs=' + item['genus'] + '_' + item['species']">{{ item["common"] }}</a></td>
          </template>
          <template v-else>
            <td>{{ item["common"] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import "@/global-style.css";

  // grab all the photos, inside folders called Genus_species
  const photos = require.context('@/assets/photos/', true, /\.(png|jpe?g)$/i).keys();
  var gs = new Set();
  for (var pi=0; pi< photos.length ; pi++) {
    let pp = photos[pi].split("./")[1].split("/")[0];
    if (pp.length > 3 && pp.indexOf("_") >= 0) {
      gs.add(pp);
    }
  }

  // Data should be loaded from an external JSON file (nearly a CSV).
  import rawestData from "../assets/tree_species.json";
  let rawHeaders = rawestData[0].split(",");
  var rawData = [];
  for (var i=1; i<rawestData.length; i++){
    let line = rawestData[i].split(",");
    // check if this tree has photos
    if (gs.has(line[2] + "_" + line[3])) {
      // if the common name is missing, insert the genius+species
      if (line[4].trim().length == 0) {
        line[4] = line[2] + " " + line[3];
      }
      var newObj = {}
      for (var j=0; j<rawHeaders.length; j++){
        newObj[rawHeaders[j]] = line[j];
      }
      rawData.push(newObj);
    }
  }

  export default {
    name: 'Photos',
    components: {
      NavBar,
    },
    props: {
      headers: Array,
    },
    data: function() {
      this.headers = rawHeaders;
      this.sortKey = "";
      var sortOrders = {};
      this.headers.forEach(function(key) {
        sortOrders[key] = 1;
      });
      return {
        sortKey: "",
        sortOrders: sortOrders,
        listData: rawData,
      }
    },
    computed: {
      filteredData: function() {
        var sortKey = this.sortKey;
        var order = this.sortOrders[sortKey] || 1;
        var data = this.listData;

        if (sortKey) {
          data = data.slice().sort(function(a, b) {
            a = a[sortKey];
            b = b[sortKey];
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          });
        }
        return data;
      }
    },
    filters: {
      capitalize: function(str) {
        return str.replaceAll("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
      }
    },
    methods: {
      sortBy: function(key) {
        this.sortKey = key;
        this.sortOrders[key] = this.sortOrders[key] * -1;
      }
    }
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
.center {
  margin-left: auto;
  margin-right: auto;
}

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table, th, td {
  border: 1px solid rgb(1,4,9);
  border-collapse: collapse;
  color:rgb(201, 209, 217);
}

tr {
  background-color: #191919;
}

tr:hover {
  background-color: #2b2b2b;
}

th {
  background-color: green;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

th,
td {
  padding: 10px 10px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
