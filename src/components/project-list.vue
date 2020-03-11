<script>
import {
  projectsComputed,
  projectsMethods,
  projectsGetters,
} from '@state/helpers.js'
import projectcard from '@components/projectCard.vue'
export default {
  components: {
    projectcard,
  },
  props: ['projectstyle'],
  data() {
    return {
      viewButton: {},
    }
  },
  computed: {
    ...projectsComputed,
    ...projectsGetters,
  },

  created() {
    this.getProjects()
    setTimeout(this.generateViewButton, 3000)
  },
  methods: {
    generateViewButton() {
      const data = this.projects
      const generatedObject = {}
      data.map((item, index) => {
        generatedObject[`btnView${index}`] = false
      })

      this.viewButton = generatedObject
    },
    ...projectsMethods,
    getProjects() {
      this.fetchProjects()
    },

    showButton(index) {
      this.viewButton[`btnView${index}`] = true
    },
    hideButton(index) {
      this.viewButton[`btnView${index}`] = false
    },
  },
}
</script>

<template>
  <div class="d-flex flex-wrap justify-content-around align-items-around">
    <div v-if="numberOfProjects">
      <img
        src="https://m3-static.marvelapp.com/assets/ff35673e28eb399655fce364b2cba3b7.png"
        alt=""
      />
      <h1>no team project yet </h1>
    </div>
    <projectcard
      v-for="(project, index) in projects"
      v-else
      :key="index"
      :index="index"
      :project="project"
      :viewbutton="viewButton"
      :projectstyle="projectstyle"
      @showButton="showButton(index)"
      @hideButton="hideButton(index)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
</style>
