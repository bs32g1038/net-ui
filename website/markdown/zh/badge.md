
# Badge 徽标

----

## 独立使用

不包裹任何元素，类似 `Tag` 标签

:::demo
```html
<net-badge :value="3"></net-badge>
<net-badge :value="23"></net-badge>
<net-badge :value="199"></net-badge>
```
:::

## 文本内容

徽标既可以数字，也可以是文本内容

:::demo
```html
<net-badge value="new"></net-badge>
<net-badge value="hot"></net-badge>
```
:::

## 不同状态

设置属性 `status` 指定不同的状态徽标

:::demo
```html
Primary <net-badge value="123"></net-badge><br>
Success <net-badge value="123" status="success"></net-badge><br>
Warning <net-badge value="123" status="warning"></net-badge><br>
Info <net-badge value="123" status="info"></net-badge>
```
:::

## 设定最大值

设置属性 `max-num` 可自定义徽标的最大值，超过最大值则显示 `+`

:::demo
```html
<net-badge :value="123" :max-num="99"></net-badge>
```
:::

## 组合用法

与其他组件组合使用，用于展示消息数量等

:::demo
```html
<net-badge value="3">
  <net-button>回复</net-button>
</net-badge>
<net-badge :value="111" :max-num="99">
  <net-button>回复</net-button>
</net-badge>
<net-badge value="new">
  <net-button>回复</net-button>
</net-badge>
```
:::

## 小红点

设置属性 `dot` 不显示具体的数字

:::demo
```html
<net-badge :value="12" dot></net-badge>
<net-badge :value="12" dot>
  <net-button>回复</net-button>
</net-badge>
<net-badge :value="12" dot>
  <i class="icon icon-inbox"></i>
</net-badge>
<net-badge :value="12" dot>
  <span>消息</span>
</net-badge>
```
:::

## 动态展示

动态展示变化的效果

:::demo
```html
<net-badge :value="num" :max-num="12">
  <span class="badge-example"></span>
</net-badge>
<net-badge :value="num" :show="show" dot>
  <span class="badge-example"></span>
</net-badge>
<br>
<net-button-group size="small">
  <net-button @click="num -= 1">-</net-button>
  <net-button @click="num += 1">+</net-button>
</net-button-group>
<net-button size="small" @click="toggleDot">{{show ? '隐藏' : '显示'}}小红点</net-button>
```
:::

## Badge 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定的值 | String / Number | - | - |
| maxNum | 允许的最大值，超出则用 `+` 号显示 | Number | - | 99 |
| dot | 是否显示为小红点 | Boolean | - | false |
| status | 徽标的类型 | String | `success`, `warning`, `info` | - |
| show | 是否显示徽标 | Boolean | - | true |

<script>
export default {
  data() {
    return {
      num: 3,
      show: true
    }
  },
  methods: {
    toggleDot() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  .badge-example {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: #EEE;
    cursor: pointer;
  }
  .net-badge + .net-badge {
    margin-left: 24px;
  }
</style>

