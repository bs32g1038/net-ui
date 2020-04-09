
# Rate

---

Rate component

## Basic

The simplest usage.

:::demo
```html
<net-rate></net-rate>
```
:::

## Show copywriting

Add copywriting in rate component.

:::demo
```html
<net-rate :show-text="true" v-model="value2">
  <span>{{ value2 }} stars</span>
</net-rate>
```
:::

## Other icon

Replace the default star to other icon.

:::demo
```html
<net-rate icon="icon-heart-on"></net-rate>
```
:::

## Half star

Support select half star.

:::demo
```html
<div >
  <net-rate
    :allow-half="true"
    :show-text="true"
    :value="value1"
    @on-change="changeHandle">
  </net-rate>
</div>
```
:::

## Read only

Read only，can't use mouse to interact.

:::demo
```html
<div >
  <net-rate
    :allow-half="true"
    :show-text="true"
    :value="value1"
    :disabled="true">
  </net-rate>
</div>
```
:::


## Rate Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| count | star count | Number | - | 5 |
| value | current value | String | - | 0 |
| allow-half | whether to allow semi selection | Boolean | - | `false` |
| disabled | read only, unable to interact | Boolean | - | `false` |
| icon | to specify the icon | String | - | `icon-star` |
| show-text | whether to display a copywriting | Boolean | - | `false` |

## Rate Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-change | callback when select value | value |
| on-hover-change | callback when hover item | value |

## Rate slot

| Name      | Description |
|----------|-------- |
| - | customize the contents of the copywriting |

<script>
export default {
  data () {
    return {
      value1: 2.5,
      value2: 2
    }
  },
  methods: {
    changeHandle (val) {
      this.$Message.info(`trigger change event: ${val}`)
    }
  }
}
</script>
