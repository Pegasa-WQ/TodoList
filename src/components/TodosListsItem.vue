<template>
  <div class="todo-item">
      <h2 class="title" @click="$emit('send', item.todos)">
      {{ item.title }}
    </h2>
  </div>
</template>
<script>
export default {
  name: 'TodosListsItem',
  props: ['item'],
  data () {
    return {

    }
  },
  methods: {}
}
</script>
