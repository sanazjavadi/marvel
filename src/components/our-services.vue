<script>
export default {}
</script>

<template>
  <section id="services" class="section-bg">
    <div class="container">
      <header class="section-header">
        <h3>Services</h3>
        <p
          >Laudem latine persequeris id sed, ex fabulas delectus quo. No vel
          partiendo abhorreant vituperatoribus.</p
        >
      </header>
      <div class="row">
        <div
          class="col-md-6 col-lg-4"
          data-wow-delay="0.2s"
          data-wow-duration="1.4s"
        >
          <div class="box">
            <div class="icon" style="background: #ecebff;"
              ><i class="ion-ios-clock-outline" style="color: #8660fe;"></i
            ></div>
            <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
            <p class="description"
              >Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi</p
            >
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4"
          data-wow-delay="0.2s"
          data-wow-duration="1.4s"
        >
          <div class="box">
            <div class="icon" style="background: #ecebff;"
              ><i class="ion-ios-clock-outline" style="color: #8660fe;"></i
            ></div>
            <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
            <p class="description"
              >Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi</p
            >
          </div>
        </div>
        <div
          class="col-md-6 col-lg-4"
          data-wow-delay="0.2s"
          data-wow-duration="1.4s"
        >
          <div class="box">
            <div class="icon" style="background: #ecebff;"
              ><i class="ion-ios-clock-outline" style="color: #8660fe;"></i
            ></div>
            <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
            <p class="description"
              >Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi</p
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';

/* services section
*/

#services {
  padding: 150px 0 100px 0;
}

#services .box {
  padding: 30px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin: 40 10px 40px 10px;
  background: #fff;
  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;
}
#services .box:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
#services .icon {
  margin: 0 auto 15px auto;
  padding-top: 12px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
#services .icon i {
  font-size: 36px;
  line-height: 1;
}
#services .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}
#services .title a {
  color: #111;
}
#services .box:hover .title a {
  color: #1bb1dc;
  text-decoration: none;
}

#services .description {
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 0;
  text-align: right;
}
.section-header h3 {
  font-size: 36px;
  color: #413e66;
  text-align: center;
  font-weight: 700;
  position: relative;
  font-family: 'Montserrat', sans-serif;
}

.section-header p {
  text-align: center;
  margin: auto;
  font-size: 15px;
  padding-bottom: 60px;
  color: #535074;
  width: 50%;
}
.section-bg {
  background: #f5f8fd;
}
</style>
