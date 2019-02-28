<template>
  <span>
    <ul
      @click.stop="handleClick"
      :class="ulclass"
    >
      <li>dianji</li>
    </ul>
    <Caspanel v-if="showCaspane"></Caspanel>
  </span>

</template>

<script>
export default {
  name: "Caspanel",
  data() {
    return {
      showCaspane: false,
      ulclass: "caspanel-ul"
    };
  },
  computed: {
    handleShow() {
      return true;
    }
  },
  methods: {
    handleClick() {
      this.showCaspane = !this.showCaspane;
    },
    handleUl() {
      return ["caspanel-ul"];
    }
  },
  components: {}
};
</script>

<style>
.caspanel-ul {
  display: inline-block;
  list-style: none;
  height: 180px;
  min-width: 100px;
  overflow: auto;
  border: 1px solid #e8eaec;
  margin: 0;
}
</style>
