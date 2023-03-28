<template>
  <div class="post">
    <div v-if="loading" class="loading">"Loading... Server might be down"</div>
    <div v-if="post" class="content">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="forecast in post" :key="forecast.date">
            <td>{{ forecast.date }}</td>
            <td>{{ forecast.temperatureC }}</td>
            <td>{{ forecast.temperatureF }}</td>
            <td>{{ forecast.summary }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            loading: false,
            post: null
        };
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.post = null;
            this.loading = true;

            fetch('weatherforecast')
                .then(r => r.json())
                .then(json => {
                    this.post = json;
                    this.loading = false;
                    return;
                });
        }
    },
});
</script>

<style scoped>
.post {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #eee;
  background-color: #23262e;
  padding: 1em;
  border-radius: 0.25em;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  width: 30em;
}
</style>
