<template>
<div class="container__login">
<div v-if="visible === 1" class="login">
<form @submit.prevent="signIn" class="form">
<div class="form-group">
<label class="label" for="email">Ваш E-mail</label>
<input class="input" type="text" id="email" v-model="email">
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input class="input" type="password" id="password" v-model="password">
</div>
<div>
<button class="button-todo">Войти</button>
<button class="button-register button-todo" @click="visiblReregister">Зарегистрироваться</button>
</div>
</form>
</div>
<div v-else-if="visible === 2" class="register">
<form>
<div class="form-group">
<label class="label" for="name">Ваше имя</label>
<input class="input" type="text" id="name">
</div>
<div class="form-group">
<label class="label" for="email">Ваш E-mail</label>
<input class="input" type="text" id="email">
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input class="input" type="password" id="password">
</div>
<button class="button-todo" @click="signUp">Зарегистрироваться</button>
<button class="button-todo" @click="openLogin">Войти</button>
</form></div>
<div>
  {{ info }}
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'login',
  props: [],
  data () {
    return {
      mode: 'signIn',
      visibleLogin: true,
      visible: 1,
      email: '',
      password: '',
      errors: [],
      info: null
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
    openLogin () {
      this.visible--
    },
    async signIn () {
      try {
        const data = (await this.$api.auth.signIn({
          email: this.email,
          password: this.password
        })).data
        localStorage.setItem('user', JSON.stringify(data))
        this.$store.dispatch('user/setUser', data)
      } catch (error) {
        this.errors.push(error)
        console.log(this.errors)
      }
    },
    signUp () {
      console.log('авторизация')
    }
  },
  mounted () {
    axios
      .get('https://academy2.smw.tom.ru/kerov-evgeny/api2/user')
      .then(response => (this.info = response))
  }
}
</script>
<style>
.input {
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  height: 30px;
  transition: all 0.3s ease 0s;
}
.container__login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}
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
