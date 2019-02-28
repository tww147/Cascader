<template>
  <div class="cascader-div">
    <div>
      <Input />
      <Icon
        type="ios-arrow-down"
        class="icon"
      />
      <Icon
        type="ios-close"
        class="icon"
      />
    </div>
    <div class="caspanel-div">
      <Caspanel></Caspanel>
    </div>
  </div>
</template>

<script>
import { Input, Icon } from "iview";
import Caspanel from "./Caspanel";

export default {
  components: {
    Input,
    Icon,
    Caspanel
  }
};
</script>

<style>
.icon {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}
.cascader-div {
  position: relative;
}
.caspanel-div {
  position: absolute;
  top: 42px;
  left: 14px;
}
</style>
