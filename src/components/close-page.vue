<script>
export default {}
</script>

<template>
  <div
    ><router-link to="/dashboard">
      <span class="closing">&times;</span></router-link
    ></div
  >
</template>

<style lang="scss" scoped>
@import '@design';
.closing {
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 900;
  border: 2px solid #8633fc;
  border-radius: 100%;
}
</style>
