<template>
	<div class="app">
		<!-- <router-view></router-view> -->
		<h1>这是根组件</h1>
		<h2>这是根组件的子标题</h2>
	</div>
</template>

<script lang="ts">
export default {
	name: 'App',
};
</script>

<script setup lang="ts">
const a = 3;
console.log(a);
</script>

<style lang="scss"></style>
