<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.completed" />
    <h2 class="title">
      {{ todo.title }}
    </h2>
    <span> {{ todo.date }} </span>
    <button class="remove-item" @click="$emit('remove-todo')"></button>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
  }
}
</script>
