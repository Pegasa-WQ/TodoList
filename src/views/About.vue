<template>
<div class="container__login">
<div v-if="visibleModal" class="popup-wrapper" ref="popup_wrapper">
  <div class="v-popup">
  <div class="v-popup__header">
  <span class="v-text">Вы зарегистированы!</span>
  <span class="v-popup__delete" @click="closeModal ">X</span>
  </div>
  <div class="v-popup__content">
  Пожалуйста, авторизируйтесь!
  </div>
  <button class="button-modal" v-focus @click="closeModal">OK</button>
  </div>
</div>
<div v-if="visible === 1" class="login">
<form @submit.prevent="signIn" class="form">
<div class="form-group">
<label class="label" for="email">Ваш E-mail</label>
<input class="input" type="text" id="email" v-model="formLog.email">
<span class="v-text"> {{ errorEmail }} </span>
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input class="input" type="password" id="password" v-model="formLog.password">
<span class="v-text"> {{ errorPassword }} </span>
</div>
<div>
<button type="submit" class="button-todo">Войти</button>
<button class="button-register button-todo" @click="visiblReregister">Зарегистрироваться</button>
</div>
</form>
</div>
<div v-else-if="visible === 2" class="register">
<form @submit.prevent="signUp">
<div class="form-group">
<label class="label" for="name">Ваше имя</label>
<input v-model="formReg.name" class="input" type="text" id="name">
<span class="v-text"> {{ errorRegName }} </span>
</div>
<div class="form-group">
<label class="label" for="email">Ваш E-mail</label>
<input v-model="formReg.email" class="input" type="text" id="email">
<span class="v-text"> {{ errorRegEmail }} </span>
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input v-model="formReg.password" class="input" type="password" id="password">
<span class="v-text"> {{ errorRegPassword }} </span>
</div>
<button class="button-todo" type="submit">Зарегистрироваться</button>
<button class="button-todo" @click="openLogin">Войти</button>
</form></div>
</div>
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      mode: 'signIn',
      visibleLogin: true,
      visibleModal: false,
      visible: 1,
      errorEmail: '',
      errorPassword: '',
      errorRegName: '',
      errorRegEmail: '',
      errorRegPassword: '',
      formLog: {
        email: '',
        password: ''
      },
      formReg: {
        email: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'USER_LOGIN'
    ]),
    getVisible () {
      this.visibleLogin = false
      this.visible++
    },
    visiblReregister () {
      this.visible++
    },
    openLogin () {
      this.visible--
      this.visibleButton = true
    },
    getRoud () {
      this.$router.push({ name: 'Home' })
    },
    async signIn () {
      const it = this
      await axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/user/login', { email: it.formLog.email, password: it.formLog.password })
        .then((result) => {
          console.log(result.data.data.refresh_token)
          this.$cookie.set('accessToken', result.data.data.access_token)
          this.$cookie.set('refreshToken', result.data.data.refresh_token)
        })
        .catch(function (error) {
          if (error.response.data.email[0]) {
            it.errorEmail = error.response.data.email[0]
            it.errorPassword = error.response.data.password[0]
          }
        })
      // this.USER_LOGIN({
      //   email: this.email,
      //   password: this.password
      // })
      setTimeout(() => this.getRoud(), 1000)
    },
    async signUp () {
      const it = this
      axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/user/register', { name: it.formReg.name, email: it.formReg.email, password: it.formReg.password })
        .then((response) => {
          this.$cookie.set('accessToken', response.data.data.access_token)
          it.visibleModal = true
          return response
        })
        .catch(function (error) {
          console.log(error.response)
          if (error.response.data.email[0]) {
            it.errorRegEmail = error.response.data.email[0]
            it.errorRegPassword = error.response.data.password[0]
            it.errorRegName = error.response.data.name[0]
          }
        })

      setTimeout(() => this.getRoud(), 1000)
    },
    closeModal () {
      this.visibleModal = false
      this.openLogin()
    }
  },
  mounted () {
  }
}
</script>
<style>
.input {
  margin-right: 10px;
  margin-bottom: 5px;
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
