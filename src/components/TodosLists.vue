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
        todos: [{
          id: 0,
          title: 'Новое дело',
          completed: false,
          active: true
        }]
      },
      {
        title: 'Список дел на октябрь',
        id: 1,
        todos: [{
          id: 1,
          title: 'Старое дело',
          completed: false,
          active: true
        }]
      }]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
