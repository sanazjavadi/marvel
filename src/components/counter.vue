<script>
export default {}
</script>

<template>
  <section class="ftco-section ftco-counter img" id="section-counter">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div
          class="col-md-7 text-center heading-section heading-section-white ftco-animate"
        >
          <span class="subheading"
            >More than 12,000 websites trusted hosted</span
          >
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div
              class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
            >
              <div class="block-18 text-center">
                <div class="text">
                  <strong class="number" data-number="12000">0</strong>
                  <span>CMS Installation</span>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
            >
              <div class="block-18 text-center">
                <div class="text">
                  <strong class="number" data-number="100">0</strong>
                  <span>Awards Won</span>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
            >
              <div class="block-18 text-center">
                <div class="text">
                  <strong class="number" data-number="10000">0</strong>
                  <span>Registered Domains</span>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
            >
              <div class="block-18 text-center">
                <div class="text">
                  <strong class="number" data-number="9000">0</strong>
                  <span>Satisfied Customers</span>
                </div>
              </div>
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
.ftco-section {
  position: relative;
  width: 100%;
  display: block;
}

.ftco-counter {
  padding: 5em 0;
  background: #6927ff;
}
@media (max-width: 991.98px) {
  .ftco-counter {
    background-position: center center !important;
  }
}
.ftco-counter .text strong.number {
  font-weight: 700;
  font-size: 40px;
  color: #fff;
}
.ftco-counter .text span {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}
@media (max-width: 767.98px) {
  .ftco-counter .counter-wrap {
    margin-bottom: 20px;
  }
}
.ftco-counter .ftco-number {
  display: block;
  font-size: 72px;
  font-weight: bold;
  color: #6927ff;
}
.ftco-counter .ftco-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>
