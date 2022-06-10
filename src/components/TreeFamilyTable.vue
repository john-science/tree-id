<template>
  <div>
    <h2>{{ filteredData.length }} Tree Famlies</h2>
    <br />
    <form id="search">
      Search <input name="query" class="inputClass" v-model="searchQuery" />
    </form>
    <br />

    <table class="center">
      <thead>
        <th v-for="header in headers" :key="header" @click="sortBy(header)" :class="{ active: sortKey == header }">
          {{ header | capitalize }}
        <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'"></span>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in filteredData" :key="item.family">
          <td v-for="header in headers" :key="header"><a :href="wiki(item[header])">{{ item[header] }}</a></td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>


<script>
  // Data should be loaded from an external JSON file (nearly a CSV).
  import rawestData from "../assets/tree_species.json";
  var rawH = rawestData[0].split(",");
  let rawHeaders = [rawH[0], rawH[1]];
  var rawData = [];
  for (var i=1; i<rawestData.length; i++){
    let line = rawestData[i].split(",");
    var newObj = {}
    for (var j=0; j<2; j++){
      newObj[rawHeaders[j]] = line[j];
    }
    // ditch the duplicates (this assumes a pre-ordered file)
    if (rawData.length == 0) {
      rawData.push(newObj);
    } else {
      if (newObj["clade"] != rawData[rawData.length - 1]["clade"] || newObj["family"] != rawData[rawData.length - 1]["family"]) {
      // || (newObj[1] != rawData[rawData.length - 1][1])) {
        rawData.push(newObj);
      }
    }
  }

  export default {
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
        searchQuery: "",
        sortOrders: sortOrders,
        listData: rawData,
      }
    },
    computed: {
      filteredData: function() {
        var sortKey = this.sortKey;
        var order = this.sortOrders[sortKey] || 1;
        var data = this.listData;
        var sQuery = this.searchQuery.toLowerCase();

        if (sQuery) {
          data = data.filter(function(row) {
            return Object.keys(row).some(function(key) {
              return (
                String(row[key])
                .toLowerCase()
                .indexOf(sQuery) > -1
              );
            });
          });
        }
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
      },
      wiki: function(s) {
        return "https://en.wikipedia.org/wiki/" + s;
      }
    },
  };
</script>


<style scoped>
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

