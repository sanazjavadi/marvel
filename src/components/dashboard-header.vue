<script>
import { projectsMethods, projectsComputed } from '@state/helpers.js'
import btn from '@components/global-button.vue'
export default {
  components: {
    btn,
  },
  props: ['pageTitle'],
  computed: {
    ...projectsComputed,
  },
  methods: {
    ...projectsMethods,
    createNewProject() {
      const projects_ = this.projects
      if (projects_.length > 1) {
        this.$router.push('/plans')
      } else {
        this.$router.push('/newProject')
      }
    },
  },
}
</script>

<template>
  <div>
    <div class="project d-flex flex-wrap justify-content-between">
      <div>
        <btn @createPro="createNewProject">
          ایجاد پروژه جدید
        </btn>
      </div>
      <div>
        <h3>{{ pageTitle }}</h3>
      </div>
    </div>

    <section> </section>
  </div>
</template>

<style lang="scss">
@import '@design';

.project {
  padding: 30px;
  margin-top: 80px;
  border-bottom: 2px solid lightgrey;
}
</style>
