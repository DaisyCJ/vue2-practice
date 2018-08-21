<template>
    <div>
        <input
            type="text"
            class="input"
            :value="value"
            v-on="listeners">
        <button @click="$emit('add')">添加</button>
    </div>
    
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        listeners () {
            return {
                // Override input listener to work with v-model
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style>
.input {
    width:330px;
}
</style>
