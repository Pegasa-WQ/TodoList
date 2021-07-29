<template>
  <div class="list-item" :class="{full: findAll(item), ready: getComp(item)}">
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
      item.green = item.todos.length
      return item.green
    },
    findAll (item) {
      item.gray = item.todos.length === item.todos.filter(i => i.completed).length && item.todos.length > 0
      return item.gray
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
  padding: 10px 0;
  min-width: 93%;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: rgba(103, 135, 183);
}
.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 12px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid rgba(103, 135, 183);
  background-color: #FFF;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.list-item:hover {
  background-color: rgba(103, 135, 183, 0.2);
}
.list-item:active {
  background-color: rgba(103, 135, 183, 0.4);
}
.active {
  border: 1px solid rgba(0, 73, 134);
}
.ready {
  background-color: rgba(189, 214, 230);
}
.full {
  background-color: rgba(185, 201, 204);
}
</style>
