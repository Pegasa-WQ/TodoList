<template>
  <div class="todo-item">
      <h2 class="title">
      {{ item.title }}
    </h2>
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
    this.$emit('send', this.item.todos)
  }
}
</script>
