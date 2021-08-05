<template>
<div class="todos-lists">
  <div class="container-lists">
  <TodoSelect v-bind:options="options" @select="sortByCategories"/>
  <div v-for="(item, index) in dela" :key="index">
      <TodosListsItem v-bind:item="item" v-on:send="$emit('send', item.task, item.name, item.id)" v-on:getId="getId(index)" v-on:remove-todo='removeList(index, item)' :class="{active: activeId === index}"/>
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
import TodoSelect from './TodoSelect.vue'
import axios from 'axios'
export default {
  name: 'TodosLists',
  components: {
    TodosListsItem,
    TodoSelect
  },
  props: ['completed'],
  data () {
    return {
      newList: '',
      activeId: '',
      idForList: 0,
      dela: [],
      token: {
        Authorization: 'Bearer' + this.$cookie.get('accessToken')
      },
      options: [
        { name: 'Все', value: 1 },
        { name: 'Исполненные', value: 2 },
        { name: 'Неисполненные', value: 3 }
      ],
      array: 0,
      idList: ''
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
      const it = this
      axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/list/create', { attributes: { name: this.newList } }, { headers: { Authorization: 'Bearer' + this.$cookie.get('accessToken') } })
        .then((result) => {
          it.idList = result.data.data.attributes.id
          console.log(it.idList)
        })
      this.dela.push({
        id: it.idList,
        name: this.newList,
        task: []
      })
      this.sortAbc()
      this.idForList++
      this.newList = ''
      // this.sortByCategories()
      document.querySelector('.select').value = 'Все'
    },
    getIdActive (index) {
      if (this.activeId < index) {
        return
      }
      if (this.activeId >= index) {
        this.activeId -= 1
      }
    },
    removeList (index, item) {
      axios.delete(`https://academy2.smw.tom.ru/artem-bereza/api2/list/delete/${item.id}`, { headers: { Authorization: 'Bearer' + this.$cookie.get('accessToken') } })
        .then((result) => {
          console.log(result)
        })
      if (this.dela.length === 1) {
        this.$emit('remove', 0, '')
        this.dela.splice(index, 1)
        this.getIdActive(index)
      } else {
        this.getIdActive(index)
        this.dela.splice(index, 1)
        this.$emit('remove', this.dela[this.activeId].task, this.dela[this.activeId].name)
      }
    },
    sortByCategories (option) {
      this.array = 0
      if (option === 'Исполненные') {
        this.array = this.dela.filter(function (item) {
          return item.gray
        })
      }
      if (option === 'Неисполненные') {
        this.array = this.dela.filter(function (item) {
          if (item.gray === false) {
            return item
          }
        })
      }
      return this.dela
    },
    sortAbc () {
      this.dela = this.dela.sort(function (a, b) {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0 // Никакой сортировки
      })
    },
    async getJson () {
      const lt = this
      await axios.get('https://academy2.smw.tom.ru/artem-bereza/api2/user/get-lists', { headers: { Authorization: 'Bearer' + this.$cookie.get('accessToken') } })
        .then((result) => {
          lt.dela = result.data.data
        })
    }
  },
  computed: {
    filteredTodos () {
      if (this.array !== 0) {
        return this.array
      } else {
        return this.dela
      }
    }
  },
  created: function () {
    this.getJson()
    this.sortAbc()
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
  width: 380px;
  height: 550px;
}
</style>
