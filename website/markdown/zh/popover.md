
# Popover 弹出框

----

## 基本用法

默认显示在正中间，并且以 `click` 方式激活，使用方法跟 `Tooltip` 基本一样

:::demo
```html
<net-popover placement="top" title="Title" content="Top Placement">
  <net-button size="small">点击</net-button>
</net-popover>
<net-popover content="Top Placement" title="Title">
  一段文字
</net-popover>
```
:::

## 更改激活的方式

默认使用 `click` 方式激活，可设置 `trigger` 更换激活方式

:::demo
```html
<net-popover trigger="click" content="Top Placement">
  <net-button size="small">Click</net-button>
</net-popover>
<net-popover trigger="hover" title="Title" content="Top Placement">
  <net-button size="small">Hover</net-button>
</net-popover>
```
:::

## 弹出框的位置

设置属性 `placement` 可更改弹出框的位置，默认显示在顶部 `top`

:::demo
```html
<net-popover trigger="hover" content="Top Placement">
  <net-button size="small">Top</net-button>
</net-popover>
<net-popover trigger="hover" content="Top Placement" placement="bottom">
  <net-button size="small">Bottom</net-button>
</net-popover>
<net-popover trigger="hover" content="Top Placement" placement="left">
  <net-button size="small">Left</net-button>
</net-popover>
<net-popover trigger="hover" content="Top Placement" placement="right">
  <net-button size="small">Right</net-button>
</net-popover>
```
:::

## 嵌套内容

除了可以使用属性 `title` 和 `content` 设置弹出框的内容，还可以使用 `slot="title"` 和 `slot="content"` 的方式设置弹出框的嵌套内容

:::demo
```html
<net-popover placement="top" v-model="show" @toggle="toggleShow">
  <net-button size="small">删除</net-button>
  <template slot="content">
    <p>这是一段内容，确定删除吗？</p>
    <div style="text-align: right; margin-top: 8px;">
      <net-button size="smaller" @click="show = false">取消</net-button>
      <net-button type="primary" size="smaller" @click="show = false">确定</net-button>
    </div>
  </template>
</net-popover>
```
:::

## Popover 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题文字 | String | - | - |
| content | 提示文字 | String | - | - |
| trigger | 触发的事件类型 | String | `hover`, `focus`, `click` | `click` |
| placement | 弹出框的位置 | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

<style lang="scss" scoped>
.net-popover + .net-popover {
  margin-left: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleShow(status) {
      this.show = status
    }
  }
}
</script>
