<script>
import { projectsComputed, projectsMethods } from '@state/helpers.js'
import btn from '@components/global-button.vue'
export default {
  components: { btn },
  data() {
    return {
      viewButton: {},
    }
  },
  computed: {
    ...projectsComputed,
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
    deleteProjetc(id) {
      this.removeProject(id)
    },
  },
}
</script>

<template>
  <div class="d-flex flex-wrap justify-content-around align-items-around">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="project-card"
      @mouseover="viewButton[`btnView${index}`] = true"
      @mouseleave="viewButton[`btnView${index}`] = false"
    >
      <div class="project-list">
        <input
          type="checkbox"
          class="delete-project align-self-start"
          @click="deleteProject(project._id)"
        />
        <div class="pb-4">{{ project.name }}</div>
        <div>{{ index }}</div>
        <router-link :to="`pages/${project._id}`"
          ><btn v-show="viewButton[`btnView${index}`]">view</btn></router-link
        >
      </div>
      <div
        class="project-details d-flex flex-column justify-content-around align-items-center pt-2"
      >
        <small>
          prototype by sanaz.6day ago
        </small>
        <h6>{{ project.name }}</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.project-list {
  width: 200px;
  height: 200px;
  border: 2px solid lightgrey;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.project-list:hover {
  border: 2px solid $color-base;
  background-color: lightgray;
}
// .project-list:hover #btn-view {
//   display: block;
//   opacity: 1;
// }
.delete-project {
  align-self: flex-start;
  width: 25px;
  height: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid purple;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.5s;
  background-color: white;
  cursor: pointer;
}
input:checked {
  border: 1px solid purple;
  background-color: $color-base;
}
input:checked::before {
  content: '\2713';
  color: white;
  font-size: 23px;
  font-weight: 900;
  display: block;
  text-align: center;
}
input:active {
  border: 2px solid purple;
  background-color: $color-base;
}
.project-details {
  color: gray;
}
#btn-view {
  display: none;
}
</style>
