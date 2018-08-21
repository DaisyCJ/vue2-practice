<template>
    <div>
        <baseInput
            v-model="newInput"
            @keydown.enter='addItem'
            @add='addItem'
        />
        <ul v-if="todos.length">
            <todoList
                v-for="todo in todos"
                :key="todo.id"
                :content="todo"
                @delete="removeItem"
            />
        </ul>
        <p v-else>nothing here</p>
    </div>
</template>

<script>
import baseInput from '../components/baseInput'
import todoList from '../components/todoList'

let idNum = 1

export default {
    components: {
        baseInput, todoList
    },
    data () {
        return {
            newInput: '',
            todos: []
        }
    },
    methods: {
        addItem: function() {
            if(this.newInput) {
                this.todos.push({id: idNum++, text: this.newInput})
                this.newInput = ''
            }
        },
        removeItem: function(id) {
            this.todos = this.todos.filter(todo => {
                return todo.id!=id
            })
        }
    }
}
</script>

<style>

</style>
