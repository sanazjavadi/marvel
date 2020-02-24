<script>
import { projectsComputed, projectsMethods } from '@state/helpers'
export default {
  computed: {
    ...projectsComputed,
  },
  created() {
    this.getPages()
  },
  methods: {
    ...projectsMethods,
    getPages() {
      const id = this.$route.params.id
      this.fetchPages(id)
    },
  },
}
</script>

<template>
  <div>
    <!-- <div v-for="(page ,index)in pages" :key="index">
      {{ page }}
    </div> -->
  </div>
</template>

<style lang="scss">
@import '@design';
</style>
