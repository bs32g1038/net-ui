# Progress 进度条

----

用于展示事件的进度和状态

## 基本进度条

标准的进度条，当进度达到 `100%` 的时候，会自动将状态设置为 `success`

:::demo
```html
<net-progress :percent="0"></net-progress>
<net-progress :percent="60"></net-progress>
<net-progress :percent="100"></net-progress>
<net-progress :percent="50" status="error"></net-progress>
```
:::

## 小型进度条

在一些狭小的区域，需要使用小型进度条。通过参数 `stroke-width` 可配置进度条的线宽

:::demo
```html
<div class="row no-gutter">
  <div class="col-sm-24 col-md-12">
    <net-progress :percent="0" :stroke-width="4"></net-progress>
    <net-progress :percent="60" :stroke-width="4"></net-progress>
    <net-progress :percent="100" :stroke-width="4"></net-progress>
    <net-progress :percent="50" status="error" :stroke-width="4"></net-progress>
  </div>
</div>
```
:::

## 动态展示

点击操作按钮，查看进度条的状态变化

:::demo
```html
<net-progress :percent="percent"></net-progress>
<net-button-group size="small">
  <net-button @click="descPercent"><i class="icon icon-minus"></i></net-button>
  <net-button @click="inscPercent"><i class="icon icon-plus"></i></net-button>
</net-button-group>

<script>
  export default {
    data () {
      return {
        percent: 0
      }
    },
    methods: {
      descPercent () {
        this.percent -= 10
        this.percent = this.percent < 0 ? 0 : this.percent
      },
      inscPercent () {
        this.percent += 10
        this.percent = this.percent > 100 ? 100 : this.percent
      }
    }
  }
</script>
```
:::

## Progress 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percent | 百分比 | Number | - | 0 |
| status | 进度条状态 | String | `success`, `error` | - |
| stroke-width | 进度条的线宽 | Number | - | 8 |

## Progress 事件

| 事件名称      | 说明          | 返回值  |
|------------- |-------------- |---------- |
| on-status-success | 进度到 `100%` 时触发 | 触发时 `percent` 的值 |

<style lang="scss" scoped>
.net-progress {
  margin-bottom: 8px;
}
</style>

<script>
export default {
  data () {
    return {
      percent: 0
    }
  },
  methods: {
    descPercent () {
      this.percent -= 10
      this.percent = this.percent < 0 ? 0 : this.percent
    },
    inscPercent () {
      this.percent += 10
      this.percent = this.percent > 100 ? 100 : this.percent
    }
  }
}
</script>
