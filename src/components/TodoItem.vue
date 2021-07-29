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
  margin: 0;
  margin-bottom: 12px;
  padding: 8px 10px;
  border-radius: 5px;
  background-color: rgba(103, 135, 183);
  transition: all 0.3s ease 0s;
}
.title {
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: #fff;
}
span {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
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
.remove-item {
  width: 20px;
  height: 20px;
  border: none;
  background-image: url('../assets/cross.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  cursor: pointer;
}
.urgent {
 background-color: rgba(118, 35, 47, 0.9);
}
.completed {
  text-decoration: line-through;
  background-color: rgba(86, 176, 147, 1);
}
</style>
