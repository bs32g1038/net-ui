
# Badge

----

## Independent Use

Do not wrap any elements, similar to the `Tag` component.

:::demo
```html
<net-badge :value="3"></net-badge>
<net-badge :value="23"></net-badge>
<net-badge :value="199"></net-badge>
```
:::

## Content

Content can be either digital or text.

:::demo
```html
<net-badge value="new"></net-badge>
<net-badge value="hot"></net-badge>
```
:::

## Status

To specify different status of badge, add `status` property to the Badge.<br>
There are four status of Badge: `primary`, `success`, `warning`, `info`.

:::demo
```html
Primary <net-badge value="123"></net-badge><br>
Success <net-badge value="123" status="success"></net-badge><br>
Warning <net-badge value="123" status="warning"></net-badge><br>
Info <net-badge value="123" status="info"></net-badge>
```
:::

## Maximum

Use `max-num` property to customize the maximum of Badge, exceed the maximum value will display as `+`.

:::demo
```html
<net-badge :value="123" :max-num="99"></net-badge>
```
:::

## Combination Usage

Combine with other components to display the amount of messages.

:::demo
```html
<net-badge value="3">
  <net-button>Reply</net-button>
</net-badge>
<net-badge :value="111" :max-num="99">
  <net-button>Reply</net-button>
</net-badge>
<net-badge value="new">
  <net-button>Reply</net-button>
</net-badge>
```
:::

## Red Badge

This will simply display a red badge without a specific count.

:::demo
```html
<net-badge :value="12" dot></net-badge>
<net-badge :value="12" dot>
  <net-button>Reply</net-button>
</net-badge>
<net-badge :value="12" dot>
  <i class="icon icon-inbox"></i>
</net-badge>
<net-badge :value="12" dot>
  <span>Message</span>
</net-badge>
```
:::

## Dynamic

The count will be animated as it changes.

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
<net-button size="small" @click="toggleDot">{{show ? 'Hide' : 'Show'}} Badge</net-button>
```
:::

## Badge Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | the content of Badge | String / Number | - | - |
| maxNum | maximum value, exceed the maximum will display as `+` | Number | - | 99 |
| dot | whether show red badge | Boolean | - | false |
| status | type of Badge | String | `success`, `warning`, `info` | - |
| show | whether show Badge | Boolean | - | true |

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

