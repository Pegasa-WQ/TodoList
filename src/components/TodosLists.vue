<template>
<div>
  <div v-for="item in dela" :key="item.id" @click="$emit('send', item.todos)">
  {{ item.title }}
  </div>
</div>
</template>
<script>
export default {
  name: 'TodosLists',
  props: [],
  data () {
    return {
      dela: [{
        title: 'Список дел на сентябрь',
        id: 0,
        todos: [
          {
            title: 'Дело всей жизни',
            id: 0,
            completed: false,
            active: true
          }
        ]
      },
      {
        title: 'Список дел на сентябрь',
        id: 1,
        todos: [
          {
            title: 'Дело всей жизни2',
            id: 1,
            completed: false,
            active: true
          }
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
