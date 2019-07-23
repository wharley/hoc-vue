<template>
  <div :class="['content-spinner', isSmall ? 'spinner-small': '']">
    <div :class="['wrapper-spinner', isSmall ? 'spinner-small': '']">
      <div :class="['spinner', isSmall ? 'spinner-small': '']"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    isSmall: true
  }
};
</script>

<style lang="scss" scoped>
.content-spinner {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 30%;

  &.spinner-small {
    position: absolute;
    top: 5%;
  }
}

.wrapper-spinner {
  position: absolute;
  left: 82%;

  &.spinner-small {
    left: 15rem;
  }
}

.spinner {
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #AD2631;
  border-radius: 50%;

  &.spinner-small {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-left-color: #AD2631;
    border-radius: 50%;
  }
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
