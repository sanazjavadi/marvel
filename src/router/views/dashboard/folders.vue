<script>
import dashboardHeader from '@components/dashboard-header.vue'
import dashboardFilter from '@components/dashboard-filter.vue'
export default {
  page: {
    title: 'Projects',
    meta: [{ name: 'description', content: 'The Projects page.' }],
  },
  components: {
    dashboardHeader,
    dashboardFilter,
  },
}
</script>

<template>
  <div>
    <section> <dashboardHeader pageTitle="فولدرها"></dashboardHeader></section>
    <section>
      <dashboardFilter pageName="فولدرهای من"></dashboardFilter
    ></section>
    <section></section>
  </div>
</template>

<style lang="scss">
@import '@design';
</style>
