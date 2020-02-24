<script>
export default {
  methods: {
    createProject_() {
      this.$emit('createProject')
    },
    createNewPro_() {
      this.$emit('createPro')
    },
    props: ['bgcolor'],
  },
}
</script>

<template>
  <button class="global-button" @click="createProject_">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '@design';
.global-button {
  box-sizing: border-box;
  padding: $size-button-padding;
  background-color: $color-button-bg;
  margin: 0;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  color: $color-button-text;
  user-select: none;
  border-style: none;
  border-radius: 30px;
  outline-style: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-appearance: none;
  &:hover {
    background-color: darken($color-button-bg, 7%);
    transition: all 250ms linear;
  }
}
</style>
