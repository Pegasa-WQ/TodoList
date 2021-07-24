<template>
  <div class="todo-item">
  <div class="todo-item__content">
      <input class="check" type="checkbox" v-model="todo.completed" />
    <h2 class="title">
      {{ todo.title }}
    </h2>
  </div>
  <div class="todo-item__date-remove">
      <span class="time"> {{ todo.date }} </span>
    <button class="remove-item" @click="$emit('remove-todo')"></button>
  </div>
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
<style>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 10px 15px;
  border: 2px solid rgba(0, 73, 134);
}
.todo-item__content {
  display: flex;
  align-items: center;
}
.todo-item__date-remove {
  display: flex;
    align-items: center;
}
.time {
  margin-right: 10px;
}
.check {
  margin: 0;
  margin-right: 10px;
}
</style>
