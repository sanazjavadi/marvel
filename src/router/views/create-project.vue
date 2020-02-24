<script>
import btn from '@components/global-button.vue'
import { projectsMethods, projectsComputed } from '@state/helpers.js'
import close from '@components/close-page.vue'
export default {
  components: {
    btn,
    close,
  },
  data: function() {
    return {
      newProject: {
        name: '',
        details: '',
      },
    }
  },
  computed: {
    ...projectsComputed,
  },
  methods: {
    ...projectsMethods,
    createNewProjects() {
      const name = this.newProject.name
      this.createProjects(name)
    },
  },
}
</script>

<template>
  <div class="container-fluid">
    <close />
    <div class="row create-pj-form justify-content-center align-items-center">
      <div class="col-md-4 ">
        <div class="header">
          <h3>ایجاد پروژه جدید</h3>
        </div>
        <form class="create">
          <label>نام پروژه</label>
          <input v-model="newProject.name" type="text" />
          <label>موضوع پروژه</label>
          <input v-model="newProject.details" />

          <btn
            class="align-self-center justify-content-center"
            bgcolor="purple"
            @createProject="createNewProjects"
          >
            ایجاد پروژه
          </btn>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.create-pj-form {
  margin-top: 10%;
  text-align: right;
}
.header {
  display: block;
  padding: 20px 10px;
  color: gray;
  border-bottom: 2px solid gray;
}
.create {
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
  padding: 10px;
  margin-bottom: 0.25em;
  font-size: 18px;
  font-weight: 900;
}
</style>
