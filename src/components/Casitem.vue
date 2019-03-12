<template>
  <li :class="classes">
    {{currentLable}}
    <Icon
      type="ios-arrow-forward"
      v-if="hasChildren"
      class="casitem-icon"
    />
  </li>
</template>

<script>
import { Icon } from "iview";

export default {
  props: ["data", "selectedValue"],
  data() {
    return {
      currentLable: this.data.label
    };
  },
  computed: {
    hasChildren() {
      return this.data.children ? true : false;
    },
    classes() {
      return [
        "casitem-li",
        { "casitem-selected": this.data.value === this.selectedValue }
      ];
    }
  },
  components: {
    Icon
  }
};
</script>

<style>
.casitem-li {
  height: 25px;
  position: relative;
  line-height: 25px;
  cursor: pointer;
}
.casitem-li:hover {
  background-color: #f3f3f3;
  color: #2d8cf0;
}
.casitem-selected {
  background-color: #f3f3f3;
  color: #2d8cf0;
}
.casitem-icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
