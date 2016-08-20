<template>
    <div>
        <h1>Footer component, {{ name }}!</h1>
        <input type="text" v-model="name">
        <!-- named route -->
        <a v-link="{ name: 'About', params: { userId: 123 }}">About</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Vue.js'
            };
        }
    };
</script>

<style lang="scss" scoped>
    $color: red;
    h1 {
        color: $color;
    }
</style>