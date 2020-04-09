# Tag

----

## Basic Tag

To make a tag get close button, add `closable` property to `Tag`. Trigger `on-close` event when the button clicked.

:::demo
```html
<net-tag>Tag One</net-tag>
<net-tag>Tag Two</net-tag>
<net-tag>Tag Three</net-tag>
<net-tag name="Tag Four" closable v-if="show" @on-close="handleClose">Tag Four</net-tag>
```
:::

## With Color Tendency

Tag with color tendency gives different types. Set property `color`. It also provide Hex value, such as `color="#6190E8"`.

:::demo
```html
<net-tag color="default">Tag One</net-tag>
<net-tag color="primary">Tag Two</net-tag>
<net-tag color="success">Tag Three</net-tag>
<net-tag color="error">Tag Four</net-tag>
<net-tag color="warning">Tag Five</net-tag>
<net-tag color="info">Tag Six</net-tag>
<net-tag color="#ecefce">#ecefce</net-tag>
```
:::

## Tag Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the name of tag used for close event | Boolean | — | false |
| color | type | String / Hex | Hex value or `default`, `primary`, `success`, `error`, `warning`, `info` | default |
| closable | can be closed | Boolean | — | false |

## Tag Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-close | Emitted when closed | event |

<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {
      handleClose (evt, name) {
        this.$Message.info(`Close Tag - ${name}`)
        this.show = false
      }
    }
  }
</script>
