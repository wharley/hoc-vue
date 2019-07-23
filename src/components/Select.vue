<template>
  <div class="select-wrapper">
    <select
      :value="value"
    >
      <option value="" selected disabled>-Select Option-</option>
      <option
        v-for="(item, index) in items"
        :value="item.id"
        :key="index"
      >
        {{ item.id }}
      </option>
    </select>
    <Spinner :isSmall="true" v-if="loading"/>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
export default {
  name: "Select",
  components: {
    Spinner
  },
  props: ['value', 'items', 'loading'],
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  width: 100%;
  position: relative;

  select {
    width: 20%;
    height: 30px;
  }

  > input {
    width: 100%;
    padding-right: 30px;
  }

  > i {
    position: absolute;
    font-size: 16px;
    top: calc(50% - 8px);
    right: 12px;
    color: #AD2631;
  }
}
</style>
