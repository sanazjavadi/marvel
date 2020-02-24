<script>
import { usersMethods, usersComputed } from '@state/helpers'
import closePage from '@components/close-page.vue'
export default {
  page: {
    title: 'Signup',
    meta: [{ name: 'description', content: 'The Signup page.' }],
  },
  components: {
    closePage,
  },
  data() {
    return {
      userInfo: {
        email: '',
        password: '',
      },
    }
  },

  computed: {
    ...usersComputed,
  },
  methods: {
    ...usersMethods,
    submit() {
      const newUserInfo = {
        newUserEmail: this.userInfo.email,
        newUserpassword: this.userInfo.password,
      }
      this.signUp(newUserInfo)
    },
  },
}
</script>

<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <closePage />
      <div class="col-md-4 form">
        <div class="header">
          <h3>ثبت نام</h3>
        </div>
        <form class="submit" @submit.prevent="submit">
          <label>ایمیل</label>
          <input v-model="userInfo.email" />
          <label>پسورد</label>
          <input v-model="userInfo.password" />
          <input value="ارسال" type="submit" class="send self-align-center" />
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@design';
h3 {
  color: $color-title;
  text-align: center;
}
.form {
  margin: 10% auto;
  text-align: right;
  flex-direction: column;
  width: 100%;
}
.header {
  width: 100%;
  display: block;
  padding: 20px 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid $color-border-dark;
}
.submit {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 10px;
}
input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 70px;
  margin-bottom: 20px;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input {
  padding: 10px;
  border-color: $color-border-light;
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;

  &:focus {
    border-color: gray;
  }

  &::placeholder {
    color: gray;
  }
}
label {
  display: block;
  color: black;
  font-size: 18px;
  font-weight: 900;
  padding-bottom: 20px;
}
.send {
  padding: 15px 30px;
  font-weight: 900;
  cursor: pointer;
  border-radius: 30px;
  outline: none;
  color: white;
  background-color: #6e4ecf;
  width: 200px;
  height: 50px;
}
</style>
