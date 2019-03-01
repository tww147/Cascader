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
      <Caspanel :data="data"></Caspanel>
    </div>
  </div>
</template>

<script>
import { Input, Icon } from "iview";
import Caspanel from "./Caspanel";

export default {
  data() {
    return {
      value1: [],
      data: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫"
            },
            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ]
    };
  },
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
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  max-height: 180px;
}
</style>
