<template>
    <div>
        <span>
            {{props.total}}
        </span>
    </div>
</template>

<script setup>

const props = defineProps({
    total: Number,
    page: Number
})
</script>

<style>

</style>