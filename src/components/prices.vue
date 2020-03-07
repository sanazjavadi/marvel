<script>
export default {}
</script>

<template>
  <section class="ftco-section bg-light">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 text-center heading-section ftco-animate">
          <h2 class="mb-4">Our Best Pricing</h2>
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-lg-3 col-md-6 ftco-animate">
          <div class="block-7">
            <div class="text-center">
              <h2 class="heading">Free</h2>
              <span class="price"
                ><sup>$</sup>
                <span class="number"
                  >0<small class="per">/mo</small></span
                ></span
              >
              <span class="excerpt d-block">100% free. Forever</span>
              <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

              <ul class="pricing-text mb-4">
                <li><strong>150 GB</strong> Bandwidth</li>
                <li><strong>100 GB</strong> Storage</li>
                <li><strong>$1.00 / GB</strong> Overages</li>
                <li>All features</li>
              </ul>
              <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4"
                >Choose Plan</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 ftco-animate">
          <div class="block-7">
            <div class="text-center">
              <h2 class="heading">Startup</h2>
              <span class="price"
                ><sup>$</sup>
                <span class="number"
                  >19<small class="per">/mo</small></span
                ></span
              >
              <span class="excerpt d-block">All features are included</span>
              <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

              <ul class="pricing-text mb-4">
                <li><strong>450 GB</strong> Bandwidth</li>
                <li><strong>400 GB</strong> Storage</li>
                <li><strong>$2.00 / GB</strong> Overages</li>
                <li>All features</li>
              </ul>
              <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4"
                >Choose Plan</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 ftco-animate">
          <div class="block-7">
            <div class="text-center">
              <h2 class="heading">Premium</h2>
              <span class="price"
                ><sup>$</sup>
                <span class="number"
                  >49<small class="per">/mo</small></span
                ></span
              >
              <span class="excerpt d-block">All features are included</span>
              <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

              <ul class="pricing-text mb-4">
                <li><strong>250 GB</strong> Bandwidth</li>
                <li><strong>200 GB</strong> Storage</li>
                <li><strong>$5.00 / GB</strong> Overages</li>
                <li>All features</li>
              </ul>
              <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4"
                >Choose Plan</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 ftco-animate">
          <div class="block-7">
            <div class="text-center">
              <h2 class="heading">Pro</h2>
              <span class="price"
                ><sup>$</sup>
                <span class="number"
                  >99<small class="per">/mo</small></span
                ></span
              >
              <span class="excerpt d-block">All features are included</span>
              <h3 class="heading-2 mb-3">Enjoy All The Features</h3>

              <ul class="pricing-text mb-4">
                <li><strong>450 GB</strong> Bandwidth</li>
                <li><strong>400 GB</strong> Storage</li>
                <li><strong>$20.00 / GB</strong> Overages</li>
                <li>All features</li>
              </ul>
              <a href="#" class="btn btn-primary d-block px-3 py-3 mb-4"
                >Choose Plan</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@design';
.ftco-section {
  padding: 6em 0;
  position: relative;
}
@media (max-width: 767.98px) {
  .ftco-section {
    padding: 6em 0;
  }
}
.btn.btn-primary {
  background: #6927ff;
  border: 1px solid #6927ff;
  color: #fff;
}
.block-7 .btn-primary {
  border: none;
}
.btn {
  cursor: pointer;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  border-radius: 30px;
  -webkit-box-shadow: 0px 15px 30px -12px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 15px 30px -12px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0px 15px 30px -12px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0px 15px 30px -12px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 15px 30px -12px rgba(0, 0, 0, 0.2);
}
.block-7 .heading-2 {
  font-size: 16px;
  font-weight: normal;
}
.block-7 .excerpt {
  margin-bottom: 20px;
  color: #b3b3b3;
}
.block-7 .price {
  margin: 0;
  padding: 0;
  display: block;
}
.block-7 .heading {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.3);
}
.block-7 .pricing-text li {
  list-style: none;
  margin-bottom: 10px;
  color: #b3b3b3;
}
.block-7 .price {
  margin: 0;
  padding: 0;
  display: block;
}
.heading-section h2 {
  font-size: 40px;
  font-weight: 700;
  color: #000;
}
.block-7 .price .number {
  font-size: 30px;
  font-weight: 700;
  color: #000;
}
</style>
