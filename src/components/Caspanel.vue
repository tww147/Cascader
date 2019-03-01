<template>
  <span>
    <ul class="caspanel-ul">
      <template v-for="(item,index) in currentData">
        <Casitem
          :data="item"
          :key="index"
          @click.native.stop="handleClick(item)"
        ></Casitem>
      </template>
    </ul>
    <Caspanel
      v-if="showCaspane"
      :data="subList"
    ></Caspanel>
  </span>

</template>

<script>
import Casitem from "./Casitem";

export default {
  name: "Caspanel",
  props: ["data"],
  data() {
    return {
      showCaspane: false,
      currentData: this.data,
      subList: []
    };
  },
  computed: {
    handleShow() {
      return this.subList.children;
    }
  },
  methods: {
    handleClick(item) {
      if (item.children) {
        this.subList = item.children;
        this.showCaspane = true;
      } else {
        this.subList = [];
      }
    },
    handleUl() {
      return ["caspanel-ul"];
    }
  },
  watch: {
    data() {
      this.subList = [];
    }
  },
  components: { Casitem }
};
</script>

<style>
.caspanel-ul {
  display: inline-block;
  list-style: none;
  height: 180px;
  min-width: 100px;
  overflow: auto;
  border-right: 1px solid #e8eaec;
  margin: 0;
  padding: 10px 0px;
  box-sizing: border-box;
}
</style>
