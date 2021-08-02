<template>
<div class="container__login">
<div v-if="visible === 1" class="login">
<form @submit.prevent="signIn" class="form">
<div class="form-group">
<label class="label" for="email">Ваш E-mail</label>
<input class="input" type="text" id="email" v-model="formLog.email">
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input class="input" type="password" id="password" v-model="formLog.password">
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
</div>
<div class="form-group">
<label class="label" for="email">Ваш E-mail</label>
<input v-model="formReg.email" class="input" type="text" id="email">
</div>
<div class="form-group">
<label class="label" for="password">Пароль</label>
<input v-model="formReg.password" class="input" type="password" id="password">
</div>
<button class="button-todo" type="submit">Зарегистрироваться</button>
<button class="button-todo" @click="openLogin">Войти</button>
</form></div>
<div>
  <!-- {{ info }} -->
</div>
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
      visible: 1,
      formLog: {
        email: '',
        password: ''
      },
      formReg: {
        email: '',
        password: '',
        name: ''
      },
      errors: [],
      id: ''
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
    },
    getRoud () {
      this.$router.push({ name: 'Home' })
    },
    async signIn () {
      await axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/user/login', { email: this.formLog.email, password: this.formLog.password })
        .then((result) => {
          this.$cookie.set('accessToken', result.data.data.access_token)
          this.id = result.data.data.id
          console.log(result)
        })
        .catch(function (error) {
          console.log(error.response)
        })
      // this.USER_LOGIN({
      //   email: this.email,
      //   password: this.password
      // })
      setTimeout(() => this.getRoud(), 1000)
    },
    async signUp () {
      axios.post('https://academy2.smw.tom.ru/artem-bereza/api2/user/register', { name: this.formReg.name, email: this.formReg.email, password: this.formReg.password })
        .then((result) => {
          this.$cookie.set('accessToken', result.data.data.access_token)
          console.log(result)
        })
        .catch(function (error) {
          this.dispatch(error)
          console.log(error)
        })

      setTimeout(() => this.getRoud(), 1000)
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
