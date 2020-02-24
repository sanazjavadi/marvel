<script>
export default {
  props: ['pageName'],
}
</script>

<template>
  <div>
    <div class="box d-flex  justify-content-between">
      <div class="rightBox  d-flex flex-wrap justify-content-around">
        <img src="https://img.icons8.com/material/24/000000/list--v1.png" />
        <img
          src="https://img.icons8.com/material-sharp/24/000000/small-icons.png"
        />
        <select id="" name="last Updated">
          <option value="">آخرین آپدیت</option>
        </select>
      </div>
      <div class="leftBox d-flex flex-wrap justify-content-around">
        <a href="#">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/search.png" />
        </a>
        <a href="#">{{ pageName }}</a>
        <a href="#">تیم</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';
.box {
  padding: 30px 0;
}
.leftBox {
  justify-content: space-between;
  width: 15%;
}
.leftBox img {
  width: 100%;
  height: auto;
}
.rightBox {
  justify-content: space-between;
  width: 15%;
}
select {
  text-decoration: none;
  background-color: inherit;
  border: none;
  outline: none;
}
</style>
