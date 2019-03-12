<template>
  <span>
    <ul :class="classes">
      <template v-for="item in data">
        <Casitem
          :data="item"
          :key="item.value"
          @click.native.stop="handleClick(item)"
          :selectedValue="selectedValue"
        ></Casitem>
      </template>
    </ul>
    <Caspanel
      v-if="subList && subList.length"
      :data="subList"
      :index="currentIndex+1"
    ></Caspanel>
  </span>

</template>

<script>
import Casitem from "./Casitem";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Caspanel",
  props: ["data", "index"],
  data() {
    return {
      currentIndex: this.index,
      subList: []
    };
  },
  computed: {
    selectedValue() {
      return this.$store.state.selectValue[this.currentIndex];
    },
    classes() {
      return ["caspanel-ul", { "caspanel-ul-margin": this.index > 0 }];
    },
    ...mapState({
      selectedValue(state) {
        this.updateSubList();
        return state.selectValue[this.currentIndex];
      }
    })
  },
  methods: {
    ...mapMutations([
      "open",
      "close",
      "clear",
      "updateSelectValue",
      "setIsLast",
      "setSelectValue"
    ]),
    handleClick(item) {
      if (item.children) {
        this.subList = item.children;
        this.setIsLast(false);
      } else {
        this.subList = [];
        this.setIsLast(true);
        this.close("close");
      }
      this.updateSelectValue({
        index: this.currentIndex,
        value: item.value
      });
    },
    handleUl() {
      return ["caspanel-ul"];
    },
    updateSubList() {
      this.subList = [];
      for (let i = 0; i < this.data.length; i++) {
        if (
          this.data[i].value ===
          this.$store.state.selectValue[this.currentIndex]
        ) {
          if (this.data[i].children) {
            this.subList = this.data[i].children;
            break;
          }
        }
      }
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
.caspanel-ul-margin {
  margin-left: -5px;
}
</style>
