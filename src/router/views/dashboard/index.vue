<script>
import navside from '@components/nav-side.vue'
export default {
  components: {
    navside,
  },
  data: function() {
    return {
      showNav: true,
    }
  },
  created() {
    window.addEventListener('resize', this.getViewSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.getViewSize)
  },
  methods: {
    show() {
      this.showNav = false
    },
    getViewSize() {
      console.log(window.innerWidth)
      const windowView = window.innerWidth
      // if  screen is mobile
      if (windowView <= 750) {
        this.showNav = false
      } else {
        this.showNav = true
      }
    },
  },
}
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="row ">
        <div class="col-md-10 col-sm-12 col-xs-12 col-12">
          <router-view></router-view>
        </div>
        <div class="col-md-2 col-sm-1">
          <div v-if="showNav" class="nav-show"> <navside @show="show"/></div>
          <button v-else class="hamburger-menu" @click="showNav = true"
            >menu</button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
body {
  overflow-x: hidden;
}
.hamburger-menu {
  position: absolute;
  right: 50px;
  top: 50px;
  background: inherit;
  outline: none;
  text-decoration: none;
  border: 1px solid lightgray;
  padding: 10px 20px;
  color: gray;
  font-weight: 900;
  border-radius: 30px;
  &:hover {
    color: black;
  }
}
.nav-show {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
