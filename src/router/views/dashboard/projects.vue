<script>
import dashboardHeader from '@components/dashboard-header.vue'
import dashboardFilter from '@components/dashboard-filter.vue'
import projectList from '@components/project-list.vue'
export default {
  page: {
    title: 'Projects',
    meta: [{ name: 'description', content: 'The Projects page.' }],
  },
  components: {
    dashboardHeader,
    dashboardFilter,
    projectList,
  },
  data() {
    return {
      styleOfProject: 'thumbnail',
    }
  },
  methods: {
    swichTothumbnailView() {
      this.styleOfProject = 'thumbnail'
    },
    swichToListView() {
      this.styleOfProject = 'list'
    },
  },
}
</script>

<template>
  <div>
    <section> <dashboardHeader pageTitle="پروژه ها"></dashboardHeader></section>
    <section>
      <dashboardFilter
        pageName="پروژه های من"
        @swichTothumbnailView="swichTothumbnailView"
        @swichToListView="swichToListView"
      ></dashboardFilter
    ></section>
    <section>
      <div class="row justify-content-center">
        <div class="col-md-10 col-sm-10 ">
          <projectList :projectstyle="styleOfProject" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@design';
</style>
