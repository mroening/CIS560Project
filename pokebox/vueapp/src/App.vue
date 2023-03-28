<template>
  <div>
    <div class="nav-panel">
      <div class="menu">
        <button><router-link :to="{ name: 'home' }">Home</router-link></button>
        <!-- <button>
          <router-link :to="{ name: 'about' }">About</router-link>
        </button>
        <button>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
        </button> -->
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   color: #2c3e50;
}

.nav-panel {
  background-color: #23262e;
  color: #eee;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 1em;
  height: 60px;
}
</style>
