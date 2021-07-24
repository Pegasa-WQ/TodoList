<template>
  <div class="todo-item" @click="$emit('send', item.todos, item.title); $emit('getId')">
      <h2 class="title-lists">
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
    }
  },
  methods: {
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
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: rgba(92, 136, 218);
}
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 10px 15px;
  border: 2px solid rgba(0, 73, 134);
  cursor: pointer;
}
.active {
  background-color: red;
}
</style>
