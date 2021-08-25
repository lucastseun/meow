<template>
  <div>
    {{msg}}
  </div>
</template>

<script setup>
import { ref, inject} from 'vue'
const httpOk = inject('httpOk');
const msg = ref('hello vue3');
const username = "Lily"
const password = "123456"
httpOk({
    url: 'LOGIN',
    data: {
        username,
        password
    }
}).then(res=>{
  console.log(res);
})
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
