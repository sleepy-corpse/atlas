<script setup lang="ts">
import { Content } from 'vitepress';
</script>

<template>
    <div class="my-layout">
        <h1>AHUY</h1>
        <Content class="my-layout__content vp-doc" />
    </div>
</template>

<style lang="scss">
.my-layout {
    padding: 4rem;
    h1 {
        font-size: 55px;
    }
}
</style>