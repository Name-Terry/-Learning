<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
	name: 'App',
	isRouter: true,
	components: { HelloWorld },
	setup() {},
})
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>