# Progress

----

Used to display the progress and status of events.

## Basic

Basic progress will set the status to `success` automatically when the progress arrives at `100%`.

:::demo
```html
<net-progress :percent="0"></net-progress>
<net-progress :percent="60"></net-progress>
<net-progress :percent="100"></net-progress>
<net-progress :percent="50" status="error"></net-progress>
```
:::

## Mini Progress

In the narrow areas, you need to use a mini progress bar. Set the width of progress bar with `stroke-width` property.

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

## Dynamic

Click the buttons below to see the transition of progress.

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

## Progress Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percent | the percentage of Progress | Number | - | 0 |
| status | the status of Progress | String | `success`, `error` | - |
| stroke-width | the width of Progress Bar | Number | - | 8 |

## Progress Events

| Event Name      | Description          | Return Value  |
|------------- |-------------- |---------- |
| on-status-success | Emitted when the percentage of Progress achieved `100%` | event |

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
