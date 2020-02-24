<script>
export default {
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('show')
    },
    changeTitle(selectedTitle) {
      this.$store.commit('changeTitle', {
        Title: selectedTitle,
      })
    },
  },
}
</script>

<template>
  <div class="main-container">
    <div
      class="sidenav d-flex flex-column  align-items-center justify-content-around"
    >
      <span class="close" @click="close">&times;</span>
      <div class="comment align-self-end"
        ><img
          src="https://img.icons8.com/ios-glyphs/30/000000/speech-bubble-with-dots.png"
      /></div>
      <div class="logo pt-5 mt-5"
        ><img
          src="https://i.pinimg.com/originals/8e/18/82/8e18824fc0648218fb58597c0da1bec2.jpg"
      /></div>
      <div class="center justify-content-between mt-5 mt-5">
        <div class="menu">
          <ul>
            <li>
              <router-link to="/dashboard">پروژه ها</router-link>
            </li>
            <li> <router-link to="/dashboard/folders">فولدرها</router-link></li>
            <li> <router-link to="/dashboard/archive">آرشیو</router-link></li>
          </ul>
        </div>
        <div class="team pt-5">
          <ul>
            <li><router-link to="/dashboard/team">تیم</router-link></li>
            <li><a href="#">مردم</a></li>
            <li><a href="#">گروه ها</a></li>
            <li> <a href="#">تنظیمات</a></li>
            <li> <a href="#">SSo</a></li>
            <li class="pt-4"> <a href="#">Help</a></li>
            <li> <a href="#">upgrade</a></li>
          </ul>
        </div>
      </div>

      <div class="profile d-flex  justify-content-center pt-5 mt-5">
        <div class="align-self-center">نام و نام خانوادگی</div>
        <img src="https://img.icons8.com/color/48/000000/cat-profile.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.main-container {
  z-index: 1000;
  position: fixed;
  width: 277px;
  height: 100%;
  overflow-y: auto;
  top: 0;
  transition: all 0.5s ease;
  background-color: inherit;
  color: black;
  text-align: right;
  border-left: 3px solid lightgray;
  right: 0;
}
.sidenav {
  padding-top: 20px;
  padding-right: 20px;
}

ul li {
  padding: 5px;
}
a {
  color: $color-link-text;
  text-decoration: none;
}
a:hover {
  color: lightgray;
  text-decoration: none;
}
a:active {
  color: lightseagreen;
}

img {
  max-width: 100%;
  height: auto;
}
.logo {
  width: 50%;
}

.profile img {
  width: 20%;
  background-color: inherit;
}
.profile {
  margin-top: 500px;
}
.close {
  position: absolute;
  top: 5px;
  left: 10px;
  width: 10px;
  height: 10px;
  cursor: pointer;

  color: $color-base;

  &:hover {
    color: $color-link-text-hover;
  }
}
</style>
