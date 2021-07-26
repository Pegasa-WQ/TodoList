<template>
  <div class="todo-item" :class="{full: findAll(item), ready: getComp(item)}">
      <h2 class="title-lists" @click="$emit('send', item.todos, item.title); $emit('getId')">
      {{ item.title }}
    </h2>
    <button class="remove-item" @click="$emit('remove-todo')"></button>
  </div>
</template>
<script>
export default {
  name: 'TodosListsItem',
  props: ['item'],
  data () {
    return {
      array: []
    }
  },
  methods: {
    getComp (item) {
      return item.todos.filter(i => i.completed).length > 0 && item.todos.filter(i => i.completed).length < item.todos.length
    },
    findAll (item) {
      return item.todos.length === item.todos.filter(i => i.completed).length && item.todos.length > 0
    }
  },
  created: function () {
    this.$emit('send', this.item.todos, this.item.title)
    this.$emit('getId')
  }
}
</script>
<style scoped>
.title-lists {
  margin: 0;
  padding: 0;
  min-width: 90%;
  font-size: 20px;
  font-weight: 600;
  line-height: 35px;
  color: rgba(92, 136, 218);
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 0 5px;
  border: 2px solid rgba(0, 73, 134);
  cursor: pointer;
}
.active {
  border: 2px solid rgb(165, 0, 52);
}
.ready {
  background-color: green;
}
.full {
  background-color: gray;
}
</style>
