<template>
  <li class="casitem-li">
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
  props: ["data"],
  data() {
    return {
      currentLable: this.data.label
    };
  },
  computed: {
    hasChildren() {
      return this.data.children ? true : false;
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
  background-color: blue;
}
.casitem-icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
