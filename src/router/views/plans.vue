<script>
import backPage from '@components/close-page.vue'

export default {
  page: {
    title: 'Plans',
    meta: [{ name: 'description', content: 'The Plans page.' }],
  },
  components: { backPage },
}
</script>

<template>
  <div>
    <backPage />
    <div class="container-fluid premium-box">
      <div class="row justify-content-center align-items-center flex-wrap mb-5">
        <div class="col-md-3"> </div>
        <div class="col-md-5 col-6">
          <h3>خرید سرویس نامحدود</h3>
        </div>
      </div>
      <div class="row justify-content-center align-items-center flex-wrap ">
        <div
          class="col-md-2 col-10 col-sm-8 mr-4 mt-3 box d-flex align-items-center justify-content-around flex-column"
        >
          <h3>Enerprise</h3>
          <p>Bring your ideas to life</p>
          <h3>Lets chat</h3>

          <ul>
            <li>Start with 1 user</li>
            <li>1 project</li>
          </ul>
        </div>
        <div
          class="col-md-2 col-10 col-sm-8 mr-4 mt-3 box d-flex align-items-center justify-content-around flex-column"
        >
          <h3>get team</h3>
          <p>Bring your ideas to life</p>
          <h3>$42 / month</h3>

          <ul>
            <li>Start with 1 user</li>
            <li>1 project</li>
          </ul>
        </div>
        <div
          class="col-md-2 col-10 col-sm-8 mr-4 mt-3 box d-flex align-items-center justify-content-around flex-column"
        >
          <h3>Pro</h3>
          <p>Bring your ideas to life</p>
          <h3>$12 / month</h3>

          <ul>
            <li>Start with 1 user</li>
            <li>1 project</li>
          </ul>
        </div>
        <div
          class="col-md-2 col-10 col-sm-8 mr-4 mt-3 box d-flex align-items-center justify-content-around flex-column"
        >
          <h3>free</h3>
          <p>Bring your ideas to life</p>
          <h3>$0 / month</h3>
          <ul>
            <li>Start with 1 user</li>
            <li>1 project</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
.premium-box {
  margin-top: 5%;
  text-align: right;
}
.box {
  border: 2px solid gray;
  height: 500px;
  border-radius: 20px;
  padding: 20px 30px;
}
ul {
  list-style-image: url('https://img.icons8.com/officexs/16/000000/checkmark.png');
}
</style>
