<template>
  <div>
    {{msg}}
  </div>
</template>

<script setup>
import { ref, inject} from 'vue'
const httpOk = inject('httpOk');
console.log(httpOk);
httpOk({
  url: 'TEST_INFO'
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
