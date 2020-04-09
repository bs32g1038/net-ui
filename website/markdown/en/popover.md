
# Popover

----

## Basic

Display in the middle and activated in `click` event by default, similar to `Tooltip` component.

:::demo
```html
<net-popover placement="top" title="Title" content="Top Placement">
  <net-button size="small">Click</net-button>
</net-popover>
<net-popover content="Top Placement" title="Title">
  Please click on me!
</net-popover>
```
:::

## Two Ways to Trigger

Use `trigger` property to change the way of trigger. Default is `click`.

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

## Placement

Specify the position of Popover by `placement` property. Default is `top`.

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

## Nested Content

In addition to using the properties `title` and `content`, you can also use `slot="title"` and `slot="content"` to set the nested content of popover.

:::demo
```html
<net-popover placement="top" v-model="show" @toggle="toggleShow">
  <net-button size="small">Delete</net-button>
  <template slot="content">
    <p>This is part of the content, sure to delete it?</p>
    <div style="text-align: right; margin-top: 8px;">
      <net-button size="smaller" @click="show = false">Cancel</net-button>
      <net-button type="primary" size="smaller" @click="show = false">Sure</net-button>
    </div>
  </template>
</net-popover>
```
:::

## Popover Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | the title of popover | String | - | - |
| content | the content of popover | String | - | - |
| trigger | the way to trigger | String | `hover`, `focus`, `click` | `click` |
| placement | the position of popover | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

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
