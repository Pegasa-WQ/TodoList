<template>
<div class="todos-lists">
  <div class="container-lists">
  <div v-for="(item, index) in dela" :key="index">
      <TodosListsItem v-bind:item="item" v-on:send="$emit('send', item.todos, item.title)" v-on:getId="getId(index)" v-on:remove-todo='removeList(index)' :class="{active: activeId === index}"/>
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
      activeId: '',
      dela: [],
      idForList: 0
    }
  },
  methods: {
    getId (index) {
      this.activeId = index
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

      this.idForList++
      this.newList = ''
    },
    getIdActive (index) {
      if (this.activeId < index) {
        return
      }
      if (this.activeId >= index) {
        this.activeId -= 1
      }
    },
    removeList (index) {
      if (this.dela.length === 1) {
        this.$emit('remove', 0, '')
        this.dela.splice(index, 1)
        this.getIdActive(index)
      } else {
        this.getIdActive(index)
        this.dela.splice(index, 1)
        this.$emit('remove', this.dela[this.activeId].todos, this.dela[this.activeId].title)
      }
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
</style>
