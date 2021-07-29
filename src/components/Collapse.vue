<template>
	<div class="wrap">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "Collapse",
		methods: {
			cut(childId) {
				this.$children.forEach(child => {
					console.log('ci', child._uid)
					if (child._uid !== childId) {
						child.show = false;
					}
				});
			}
		}
	}
</script>

<style>
</style>
