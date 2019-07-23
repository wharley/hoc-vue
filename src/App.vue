<template>
  <div id="app">
    <Select
      v-model="value"
    />
  </div>
</template>

<script>
import Select from "./components/Select.vue";
import withFetch from "./hoc/withFetch";

export default {
  name: "App",
  components: {
    Select: withFetch(Select)
  },

  data() {
    return {
      value: ''
    }
  }
};
</script>
