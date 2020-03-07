<script>
export default {}
</script>

<template>
  <!--================ Header Menu Area start =================-->
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container box_1620">
          <a class="navbar-brand logo_h" href="index.html"
            ><img src="img/logo.png" alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <div
            class="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <div class="nav-right text-center text-lg-right py-4 py-lg-0">
              <a class="button" href="#">Get Started</a>
            </div>
            <ul class="nav navbar-nav menu_nav justify-content-end">
              <li class="nav-item active"
                ><a class="nav-link" href="index.html">Home</a></li
              >
              <li class="nav-item"
                ><a class="nav-link" href="about.html">About</a></li
              >
              <li class="nav-item"
                ><a class="nav-link" href="package.html">Packages</a> </li
              ><li class="nav-item submenu dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Pages</a
                >
                <ul class="dropdown-menu">
                  <li class="nav-item"
                    ><a class="nav-link" href="amentities.html">Amentities</a>
                  </li></ul
                >
              </li>

              <li class="nav-item submenu dropdown">
                <a
                  href="#"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >Blog</a
                >
                <ul class="dropdown-menu">
                  <li class="nav-item"
                    ><a class="nav-link" href="blog.html">Blog Single</a></li
                  >
                  <li class="nav-item"
                    ><a class="nav-link" href="blog-details.html"
                      >Blog Details</a
                    ></li
                  >
                </ul>
              </li>
              <li class="nav-item"
                ><a class="nav-link" href="contact.html">Contact</a></li
              >
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!--================Header Menu Area =================-->
</template>

<style lang="scss">
@import '@design';
/* header style start
  ============================================================================================ */
a {
  text-decoration: none;
}
.header_area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: background 0.4s, all 0.3s linear;
}

.header_area .navbar-right {
  min-width: 200px;
  text-align: right;
}

@media (max-width: 991px) {
  .header_area .navbar-right {
    margin: 20px 0;
  }
}

.header_area .navbar-brand {
  margin-right: 30px;
  padding: 0;
}

.header_area .navbar-social {
  min-width: 95px;
  float: right;
}

.header_area .navbar-social li {
  margin-right: 12px;
}

.header_area .navbar-social li i,
.header_area .navbar-social li span {
  font-size: 13px;
}

.header_area .navbar-social li:last-child {
  margin-right: 0;
}

.header_area .navbar-social li a:hover i,
.header_area .navbar-social li span {
  color: #6059f6;
}

.header_area .menu_nav {
  width: 100%;
}

.header_area .navbar {
  background: transparent;
  border: 0px;
  border-radius: 0px;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

.header_area .navbar .nav-right {
  min-width: 260px;
}

.header_area .navbar .nav .nav-item {
  margin-right: 35px;
}

.header_area .navbar .nav .nav-item .nav-link {
  font-family: 'Roboto', sans-serif;
  color: #2a2a2a;
  text-transform: capitalize;
  font-weight: 500;
  padding: 33px 0;
  display: inline-block;
}

.header_area .navbar .nav .nav-item .nav-link:after {
  display: none;
}

.header_area .navbar .nav .nav-item:hover .nav-link,
.header_area .navbar .nav .nav-item.active .nav-link {
  color: #6059f6;
  opacity: 1;
}

.header_area .navbar .nav .nav-item.submenu {
  position: relative;
}

.header_area .navbar .nav .nav-item.submenu ul {
  border: none;
  padding: 0px;
  border-radius: 0px;
  box-shadow: none;
  margin: 0px;
  background: #fff;
}

@media (min-width: 992px) {
  .header_area .navbar .nav .nav-item.submenu ul {
    position: absolute;
    top: 120%;
    left: 0px;
    min-width: 200px;
    text-align: left;
    opacity: 0;
    transition: all 300ms ease-in;
    visibility: hidden;
    display: block;
    border: none;
    padding: 0px;
    border-radius: 0px;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.4);
  }
}

.header_area .navbar .nav .nav-item.submenu ul:before {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #eeeeee transparent transparent transparent;
  position: absolute;
  right: 24px;
  top: 45px;
  z-index: 3;
  opacity: 0;
  transition: all 400ms linear;
}

.header_area .navbar .nav .nav-item.submenu ul .nav-item {
  display: block;
  float: none;
  margin-right: 0px;
  border-bottom: 1px solid #ededed;
  margin-left: 0px;
  transition: all 0.4s linear;
}

.header_area .navbar .nav .nav-item.submenu ul .nav-item .nav-link {
  line-height: 45px;
  color: #6059f6 !important;
  padding: 0px 30px;
  transition: all 150ms linear;
  display: block;
  margin-right: 0px;
}

.header_area .navbar .nav .nav-item.submenu ul .nav-item:last-child {
  border-bottom: none;
}

.header_area .navbar .nav .nav-item.submenu ul .nav-item:hover .nav-link {
  background-color: #6059f6;
  color: #fff !important;
}

@media (min-width: 992px) {
  .header_area .navbar .nav .nav-item.submenu:hover ul {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
}

.header_area .navbar .nav .nav-item.submenu:hover ul .nav-item {
  margin-top: 0px;
}

.header_area .navbar .nav .nav-item:last-child {
  margin-right: 0px;
}

.header_area .navbar .search {
  font-size: 12px;
  line-height: 60px;
  display: inline-block;
  margin-left: 80px;
}

.header_area .navbar .search i {
  font-weight: 600;
}

.header_area.navbar_fixed .main_menu {
  position: fixed;
  width: 100%;
  top: -70px;
  left: 0;
  right: 0;
  z-index: 99;
  transform: translateY(70px);
  transition: transform 500ms ease, background 500ms ease;
  -webkit-transition: transform 500ms ease, background 500ms ease;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
}

.header_area.navbar_fixed .main_menu .navbar {
  background: #7676ff;
}

.header_area.navbar_fixed .main_menu .navbar .nav .nav-item .nav-link {
  line-height: 20px;
}

.header_area.navbar_fixed .main_menu .navbar .nav .nav-item:hover .nav-link,
.header_area.navbar_fixed .main_menu .navbar .nav .nav-item.active .nav-link {
  color: #fff;
}

@media (min-width: 992px) {
  .header_area.white_menu .navbar .navbar-brand img {
    display: none;
  }
  .header_area.white_menu .navbar .navbar-brand img + img {
    display: inline-block;
  }
}

@media (max-width: 991px) {
  .header_area.white_menu .navbar .navbar-brand img {
    display: inline-block;
  }
  .header_area.white_menu .navbar .navbar-brand img + img {
    display: none;
  }
}

.header_area.white_menu .navbar .nav .nav-item .nav-link {
  color: #fff;
}

.header_area.white_menu.navbar_fixed .main_menu .navbar .navbar-brand img {
  display: inline-block;
}

.header_area.white_menu.navbar_fixed
  .main_menu
  .navbar
  .navbar-brand
  img
  + img {
  display: none;
}

.header_area.white_menu.navbar_fixed
  .main_menu
  .navbar
  .nav
  .nav-item
  .nav-link {
  line-height: 70px;
}

.top_menu {
  background: #ec9d5f;
}

.top_menu .float-left a {
  line-height: 40px;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 50px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.top_menu .float-left a:last-child {
  margin-right: 0px;
}

.top_menu .float-right .pur_btn {
  color: #fff;
  line-height: 40px;
  display: block;
  padding: 0px 40px;
  font-weight: 500;
  font-size: 12px;
}

/* header style end
	============================================================================================ */
@media (max-width: 1619px) {
  /* Main Menu Area css
	============================================================================================ */
  .header_area .navbar .search {
    margin-left: 40px;
  }
  /* End Main Menu Area css
	============================================================================================ */
}

@media (max-width: 1199px) {
  /* Main Menu Area css
	============================================================================================ */
  .header_area .navbar .nav .nav-item {
    margin-right: 28px;
  }
  /* End Main Menu Area css
	============================================================================================ */
  /* Home Banner Area css
	============================================================================================ */
  .home_banner_area .banner_inner {
    padding: 100px 0px;
  }
  /* End Home Banner Area css
	============================================================================================ */
  .header_area .navbar .tickets_btn {
    margin-left: 40px;
  }
  .home_banner_area .banner_inner .banner_content h2 br {
    display: none;
    font-size: 36px;
  }
  .home_banner_area .banner_inner .banner_content h2 {
    font-size: 36px;
    line-height: 45px;
  }
}

@media (max-width: 991px) {
  /* Main Menu Area css
	============================================================================================ */
  .navbar-toggler {
    border: none;
    border-radius: 0px;
    padding: 0px;
    cursor: pointer;
    margin-top: 27px;
    margin-bottom: 23px;
  }
  .header_area .navbar {
    background: #d1cff4;
  }
  .header_area .navbar .nav-item.active .nav-link {
    color: #6059f6 !important;
  }
  .navbar-toggler[aria-expanded='false'] span:nth-child(2) {
    opacity: 1;
  }
  .navbar-toggler[aria-expanded='true'] span:nth-child(2) {
    opacity: 0;
  }
  .navbar-toggler[aria-expanded='true'] span:first-child {
    transform: rotate(-45deg);
    position: relative;
    top: 7.5px;
  }
  .navbar-toggler[aria-expanded='true'] span:last-child {
    transform: rotate(45deg);
    bottom: 6px;
    position: relative;
  }
  .navbar-toggler span {
    display: block;
    width: 25px;
    height: 3px;
    background: #6059f6;
    margin: auto;
    margin-bottom: 4px;
    transition: all 400ms linear;
    cursor: pointer;
  }
  .navbar .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .nav {
    padding: 0px 0px;
  }
  .header_top .nav {
    padding: 0px;
  }
  .header_area .navbar .nav .nav-item .nav-link {
    padding: 12px 0;
    margin-right: 0px;
    display: block;
    border-bottom: 1px solid #ededed33;
    border-radius: 0px;
  }
  .header_area .navbar .search {
    margin-left: 0px;
  }
  .header_area .navbar-collapse {
    max-height: 340px;
    overflow-y: scroll;
  }
  .header_area .navbar .nav .nav-item.submenu ul .nav-item .nav-link {
    padding: 0px 15px;
  }
  .header_area .navbar .nav .nav-item {
    margin-right: 0px;
  }
  .home_banner_area .banner_inner .banner_content .banner_map_img {
    display: none;
  }
  .header_area.navbar_fixed .main_menu .navbar .nav .nav-item .nav-link {
    line-height: 40px;
  }
  .header_area.white_menu.navbar_fixed
    .main_menu
    .navbar
    .nav
    .nav-item
    .nav-link {
    line-height: 40px;
  }
  .header_area.white_menu .navbar .nav .nav-item .nav-link {
    color: #222;
  }
}

/* End Main Menu Area css
	============================================================================================ */
</style>
