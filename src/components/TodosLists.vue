<template>
<div>
  <div v-for="item in dela" :key="item.id">
      <TodosListsItem v-bind:item="item" v-on:send="$emit('send', item.todos)"/>
  </div>
</div>
</template>
<script>
import TodosListsItem from './TodosListsItem.vue'
export default {
  name: 'TodosLists',
  props: [],
  components: {
    TodosListsItem
  },
  data () {
    return {
      dela: [{
        title: 'Список дел на сентябрь',
        id: 0,
        todos: [
        ]
      }]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
