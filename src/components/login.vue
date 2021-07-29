<template>
<div>
<button v-if="visibleLogin" class="v-text cursor" @click="getVisible">Авторизоваться</button>
<div v-else-if="visible === 1" class="login">
<form class="form">
<div class="closeLogin">
<span class="v-popup__delete cross" @click="closeLogin">x</span>
</div>
<div class="form-group">
<label class="label" for="name">Ваше имя</label>
<input class="todo-input" type="text" id="name">
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input class="todo-input" type="password" id="password">
</div>
<div>
<button class="button-todo">Войти</button>
<button class="button-register button-todo" @click="visiblReregister">Зарегистрироваться</button>
</div>
</form>
</div>
<div v-else-if="visible === 2" class="register">
<form>
<div class="closeLogin">
<span class="v-popup__delete cross" @click="closeLogin">x</span>
</div>
<div class="form-group">
<label class="label" for="name">Ваше имя</label>
<input class="todo-input" type="text" id="name">
</div>
<div class="form-group">
<label class="label" for="email">Ваш E-mail</label>
<input class="todo-input" type="text" id="email">
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input class="todo-input" type="password" id="password">
</div>
<button class="button-todo">Зарегистрироваться</button>
<button class="button-todo" @click="openLogin">Войти</button>
</form></div>
</div>
</template>
<script>
export default {
  name: 'login',
  props: [],
  data () {
    return {
      visibleLogin: true,
      visible: 0
    }
  },
  methods: {
    getVisible () {
      this.visibleLogin = false
      this.visible++
    },
    visiblReregister () {
      this.visible++
    },
    closeLogin () {
      this.visibleLogin = true
      this.visible = 0
    },
    openLogin () {
      this.visible--
    }
  }
}
</script>
<style>
.cursor {
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease 0s;
}
.cursor:hover {
  color: rgba(0, 73, 134);
}
.cursor:focus-visible {
  color: rgba(0, 73, 134);
}
.cursor:active {
  color: rgba(0, 73, 134);
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.label {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 73, 134);
}
.button-todo {
  margin-right: 20px;
}
.closeLogin {
display: flex;
justify-content: flex-end;
}
.cross {
font-size: 20px;
}
</style>
