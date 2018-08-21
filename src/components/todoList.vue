<template>
    <li @click='$emit("delete", content.id)'>
        {{ content.text }}
    </li>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
