<template>
<div class="todos-lists">
  <div class="container-lists">
  <div v-for="(item, index) in dela" :key="index">
      <TodosListsItem v-bind:item="item" v-on:send="$emit('send', item.todos, item.title)" v-on:getId="getId(index)" v-on:remove-todo='removeList(index)' :class="{active: smth === index, readies: getComp(item)}"/>
  </div>
  </div>
  <div class="add">
  <input ref="input" type="text" class="todo-input" v-model="newList" @keyup.enter="addList" placeholder="Введите список">
  <button class="button-todo" @click="addList">Добавить список</button>
  </div>
</div>
</template>
<script>
import TodosListsItem from './TodosListsItem.vue'
export default {
  name: 'TodosLists',
  components: {
    TodosListsItem
  },
  props: ['completed'],
  data () {
    return {
      newList: '',
      smth: '',
      dela: [],
      ready: false,
      i: '',
      array: [],
      idForList: 0
    }
  },
  methods: {
    getId (index) {
      this.smth = index
    },
    addList () {
      if (this.newList.trim().length === 0) {
        return
      }
      this.dela.push({
        id: this.idForList,
        title: this.newList,
        green: false,
        todos: []
      })

      this.idForList++
      this.newList = ''
    },
    getIndex (index) {
      if (this.smth < index) {
        return
      }
      if (this.smth >= index) {
        this.smth -= 1
      }
    },
    removeList (index) {
      if (this.dela.length === 1) {
        this.$emit('remove', 0, '')
        this.dela.splice(index, 1)
        this.getIndex(index)
      } else {
        this.getIndex(index)
        this.dela.splice(index, 1)
        this.$emit('remove', this.dela[this.smth].todos, this.dela[this.smth].title)
      }
    },
    getComp (item) {
      item.todos.filter(i => {
        item.green = i.completed
      })
      return item.green
    }
  },
  computed: {
  }
}
</script>
<style scoped>
.todos-lists {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;
  padding-bottom: 25px;
  width: 360px;
  height: 600px;
}
.readies {
  background-color: green;
}
</style>
