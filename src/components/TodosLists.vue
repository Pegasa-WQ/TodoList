<template>
<div class="todos-lists">
  <div class="container-lists">
  <div v-for="(item, index) in dela" :key="item.id">
      <TodosListsItem  v-bind:item="item" v-on:send="$emit('send', item.todos, item.title)" v-on:remove-todo='removeList(index)' v-on:getId="getId(item)" :class="{active: smth === index}"/>
  </div>
  </div>
    <div class="add">
  <input ref="input" type="text" class="todo-input" v-model="newList" @keyup.enter="addList" placeholder="Введите список">
  <button class="button-todo" @click="addList()">Добавить список</button>
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
      newList: '',
      idForList: 2,
      smth: '',
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
    getId (item) {
      this.smth = item.id
      console.log(this.smth)
    },
    addList () {
      if (this.newList.trim().length === 0) {
        return
      }

      this.dela.push({
        id: this.idForList,
        title: this.newList,
        todos: []
      })

      this.newList = ''
      this.idForList++
    },
    removeList (index) {
      this.dela.splice(index, 1)
    }
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
.color {
  background-color: red;
}
</style>
