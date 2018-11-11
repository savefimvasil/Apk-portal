<template>
  <div class="flex">
    <div>
      <h2 style="margin-bottom: 40px">Войти в аккаунт</h2>
      <form action="">
        <input title=""
               ref="email"
               type="text"
               class="search-box"
               placeholder="e-mail"
               v-model="email"
               @input="checkErrors('email')"
        >
        <p ref="emailError" class="error-message"></p>
        <input title=""
               ref="password"
               type="password"
               class="search-box"
               placeholder="password"
               v-model="password"
               @input="checkErrors('password')"
        >
        <p ref="passwordError" class="error-message"></p>
      </form>
      <div class="sub-footer">
        <router-link to="/reg">Зарегистрировать новый Аккаунт</router-link>
        <button class="submit-btn"
                ref="submitBtn"
                @click="onSubmit()"
                :disabled="!valid"
        >Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(6), maxLength: maxLength(16)}
  },
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      emailValid: false,
      passwordValid: false
    }
  },
  methods: {
    onSubmit () {
      const userData = {}
      if (this.valid) {
        userData.email = this.email
        userData.password = this.password
      }
      this.$store.dispatch('loginUser', userData)
        .then(() => {
          this.$router.push('/')
        }).catch(error => {
          alert(error.message)
        })
    },
    checkErrors (n) {
      if (n === 'email') {
        this.checkEmailErrors()
      }
      if (n === 'password') {
        this.checkPasswordErrors()
      }
      if (this.emailValid && this.passwordValid) this.valid = true
      else this.valid = false
    },
    checkEmailErrors () {
      if (!this.$v.email.email || !this.$v.email.required) {
        this.$refs.email.style.borderColor = 'red'
        this.$refs.email.style.boxShadow = '0 0 10px red'
        this.$refs.emailError.innerHTML = 'Введите валидный E-mail'
        this.$refs.emailError.style.marginBottom = '10px'
        this.emailValid = false
      } else {
        this.$refs.email.style.borderColor = '#0e6f8c'
        this.$refs.email.style.boxShadow = 'none'
        this.$refs.emailError.innerHTML = ''
        this.$refs.emailError.style.marginBottom = '30px'
        this.emailValid = true
      }
    },
    checkPasswordErrors () {
      if (this.password.length > 16 || this.password.length < 6) {
        this.$refs.password.style.borderColor = 'red'
        this.$refs.password.style.boxShadow = '0 0 10px red'
        this.$refs.passwordError.innerHTML = 'Введите валидный пароль (6-16 символов)'
        this.$refs.passwordError.style.marginBottom = '10px'
        this.passwordValid = false
      } else {
        this.$refs.password.style.borderColor = '#0e6f8c'
        this.$refs.password.style.boxShadow = 'none'
        this.$refs.passwordError.innerHTML = ''
        this.$refs.passwordError.style.marginBottom = '30px'
        this.passwordValid = true
      }
    }
  }
}
</script>

<style scoped>
  .flex{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 3;
    align-items: center;
    margin: 0 auto;
    height: 73.2vh;
  }
  .search-box{
    width: 500px;
    font-size: 18px;
    border-radius: 10px;
    color: #0e6f8c;
    border: 1px solid #0e6f8c;
    padding: 10px 10px 10px 10px;
    margin-bottom: 5px;
  }
  @media (max-width: 576px) {
    .flex{
      height: 63vh;
    }
    .search-box{
      width: 300px;
    }
  }
  .search-box:focus{
    border-color: #0e6f8c;
    outline: 0;
    box-shadow: 0 0 10px grey;
  }
  .sub-footer{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  button{
    box-sizing: border-box;
    margin: 0;
  }
  button:disabled {
    background: grey;
    color: #e9f6ff;
  }
  button:disabled:hover{
    box-shadow: none;
  }
  .error-message{
    color: red;
    margin-bottom: 30px;
    margin-left: 10px;
  }
</style>
