<script>
import btn from '@components/global-button.vue'
import { projectsMethods } from '@state/helpers.js'
export default {
  components: { btn },
  props: ['project', 'projectstyle', 'viewbutton', 'index'],
  methods: {
    ...projectsMethods,
    showButton(index) {
      this.$emit('showButton', ' index')
    },
    hideButton(index) {
      this.$emit('hideButton', 'index')
    },
    deleteProject(project) {
      const response = prompt('Type in DELETE to continue')
      if (response === 'DELETE') {
        this.removeProject(project._id)
      }
    },
  },
}
</script>
<template>
  <div v-if="projectstyle === 'thumbnail'">
    <div
      class="project-thumb"
      @mouseover="showButton(index)"
      @mouseleave="hideButton(index)"
    >
      <div class="project-list">
        <input
          type="checkbox"
          class="delete-project align-self-start"
          @click="deleteProject(project)"
        />
        <div class="pb-4">{{ project.name }}</div>
        <div>{{ index }}</div>
        <router-link :to="`pages/${project._id}`"
          ><btn v-show="viewbutton[`btnView${index}`]">view</btn></router-link
        >
      </div>
    </div>
  </div>

  <table v-else class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">type</th>
        <th scope="col">owner</th>
        <th scope="col">updated</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ project.name }}</td>
        <td>ddddd</td>
        <td>jduhufhu</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import '@design';
.project-thumb {
  width: 200px;
  height: 200px;
  border: 2px solid lightgrey;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.project-list {
}
.project-thumb:hover {
  border: 2px solid $color-base;
  background-color: lightgray;
}

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
