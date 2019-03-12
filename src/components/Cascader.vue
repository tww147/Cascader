<template>
  <div
    :class="classes"
    v-click-outside="handleClose"
  >
    <div @click="toggleOpen">
      <Input
        readonly
        :value="displayText"
      />
      <Icon
        type="ios-close-circle"
        class="cascader-icon"
        v-show="isSelectLast"
        @click.native.stop="clearValue"
      />
      <Icon
        type="ios-arrow-down"
        :class="iconClasses"
      />

    </div>
    <transition name="transition-drop">
      <div
        class="cascader-caspanel-div"
        v-show="showItem"
      >
        <Caspanel
          :data="data"
          :index="firstIndex"
        ></Caspanel>
      </div>
    </transition>
  </div>
</template>

<script>
import { Input, Icon } from "iview";
import Caspanel from "./Caspanel";
import clickOutside from "../directives/clickOutside";
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    value: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      firstIndex: 0,
      value1: this.value
    };
  },
  computed: {
    ...mapState({
      displayText(state) {
        let texts = [];
        let item = this.data;
        for (let i = 0; i < state.selectValue.length; i++) {
          for (let j = 0; j < item.length; j++) {
            if (item[j].value === state.selectValue[i]) {
              texts.push(item[j].label);
              if (item[j].children && item[j].children.length) {
                item = item[j].children;
              } else {
                item = [];
              }
              break;
            }
          }
        }
        return texts.join("/");
      },
      isSelectLast: "isLast",
      showItem: "showItem",
      classes(state) {
        return ["cascader-div", { "cascader-show-clear": state.isLast }];
      },
      iconClasses(state) {
        return [
          "cascader-icon",
          { "cascader-icon-transform": !state.showItem }
        ];
      }
    })
  },
  methods: {
    toggleOpen() {
      if (!this.$store.state.showItem) {
        this.open();
      } else {
        this.close();
      }
    },
    clearValue() {
      this.clear();
    },
    handleClose() {
      this.close();
    },
    getIsLast(data, value) {
      let sourceData = data;
      let child = data;
      if (value && value.length) {
        value.forEach(element => {
          sourceData.forEach(item => {
            if (item.value === element) {
              child = item.children;
              sourceData = item.children;
              return false;
            }
          });
        });
      }
      return !(child && child.length);
    },
    ...mapMutations([
      "open",
      "close",
      "clear",
      "updateSelectValue",
      "setIsLast",
      "setSelectValue"
    ])
  },
  components: {
    Input,
    Icon,
    Caspanel
  },
  mounted() {
    this.setSelectValue(this.value);
    this.setIsLast(this.getIsLast(this.data, this.value));
  },
  directives: {
    clickOutside
  }
};
</script>

<style>
.cascader-icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.cascader-icon:nth-of-type(1) {
  display: none;
  cursor: pointer;
}
.cascader-div {
  position: relative;
}
.cascader-div:hover .cascader-icon:nth-of-type(1) {
  display: inline-block;
}
.cascader-show-clear:hover .cascader-icon:nth-of-type(2) {
  display: none;
}
.cascader-caspanel-div {
  position: absolute;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  max-height: 180px;
  margin-top: 3px;
  left: 3px;
  transform-origin: center top 0px;
}
.cascader-icon-transform {
  transform: translateY(-50%) rotate(180deg);
  transform-origin: center center;
}
</style>
