<template>
<div class="popup-wrapper" ref="popup_wrapper">
  <div class="v-popup">
  <div class="v-popup__header">
  <span class="v-text">Дело добавлено</span>
  <span class="v-popup__delete" @click="$emit('closePopupAdd')">X</span>
  </div>
  <div class="v-popup__content">
  {{ `"${this.titleTodo}" добавлено в "${this.title}"` }}
  </div>
  <button class="button-modal" v-focus @click="$emit('closePopupAdd')">OK</button>
  </div>
</div>
</template>
<script>
export default {
  name: 'addTodoModal',
  props: ['titleTodo', 'title'],
  data () {
    return {
    }
  },
  directives: {
    focus: {
    // определение директивы
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
  }
}
</script>
<style>
.popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(64, 64, 64, 0.4);
}
.v-popup {
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  width: 300px;
  background: #fff;
  z-index: 10;
}
.v-popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(0, 73, 134)
}
.v-text {
  font-size: 14px;
  font-weight: 400;
  color: rgba(103, 135, 183);
}
.v-popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(103, 135, 183);
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-popup__delete {
  font-size: 14px;
  font-weight: 400;
  color: rgba(103, 135, 183);
  cursor: pointer;
}
.button-modal {
  padding: 3px 7px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(103, 135, 183);
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.button-modal:hover {
  background-color: rgba(103, 135, 183, 0.8);
}
.button-modal:active {
  background-color: rgba(103, 135, 183, 1);
}
</style>
