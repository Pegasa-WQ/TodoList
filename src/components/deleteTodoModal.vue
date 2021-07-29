<template>
<div class="popup-wrapper" ref="popup_wrapper">
  <div class="v-popup">
  <div class="v-popup__header">
  <span class="v-popup__text">Удалить дело</span>
  <span class="v-popup__delete"  @click="$emit('closePopup')">X</span>
  </div>
  <div class="v-popup__content">
  {{ `Удалить дело "${this.todo.title}"?` }}
  </div>
  <div class="buttons">
  <button class="button-modal"  @click="$emit('closePopup')">Отмена</button>
  <button class="button-modal" @click="$emit('deleteTodo')">Удалить</button>
  </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'deleteTodoModal',
  props: ['todo'],
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs.popup_wrapper) {
        vm.$emit('closePopup')
      }
    })
  }
}
</script>
<style>
</style>
