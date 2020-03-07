<script>
import appConfig from '@src/app.config'
import mainHeader from '@components/home-menu.vue'
import intro from '@components/intro.vue'
import about from '@components/about.vue'
import services from '@components/our-services.vue'
import counter from '@components/counter.vue'
import prices from '@components/prices.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { mainHeader, intro, about, services, counter, prices },
}
</script>

<template>
  <div>
    <!--==========================
  Header
  ============================-->
    <mainHeader />
    <!-- #header -->

    <!--==========================
    Intro Section
  ============================-->
    <intro />
    <!-- #intro -->

    <main id="main">
      <!--==========================
      About Us Section
    ============================-->

      <!-- #about -->

      <!--==========================
      Services Section
    ============================-->
      <services />

      <counter />
      <about />
      <prices />
    </main>
    <div class="Footer"></div>
  </div>
</template>
<style lang="scss">
@import '@design';
/*============ End Blog Single Styles  =============*/
/*=================== custom button rule start ====================*/

.button {
  display: inline-block;
  background-color: #6059f6;
  color: #fff;
  border-radius: 30px;
  padding: 8px 25px;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

@media (min-width: 600px) {
  .button {
    padding: 12px 45px;
  }
}

.button:hover {
  background-color: #201aa3;
  color: #fff;
}

.button-hero {
  font-weight: 500;
}

.button-contactForm {
  border-radius: 5px;
}

.button-shadow {
  box-shadow: 0px 10px 20px 0px rgba(181, 176, 255, 0.2);
}

button.button {
  border: 0;
}

/*=================== custom button rule end ====================*/
.Footer {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 200px;
  background: #6059f6;
  padding-top: 100px;
  margin-top: 150px;

  &:before,
  &:after {
    background: inherit;
    content: '';
    display: block;
    height: 75%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  &:before {
    top: 0;
    transform: skewY(-4deg);
    transform-origin: 0% 0;
  }

  &:after {
    bottom: 0;
    transform: skewY(0deg);
    transform-origin: 100%;
  }
}
</style>
