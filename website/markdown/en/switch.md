
# Switch

----

Switch is used for switching between two states, it's similar with the singleton `Checkbox`. But the `Switch` button is triggered to change state, while `Checkbox` is used more in form.

## Basic

Basic usage, trigger events when status changed.

:::demo
```html
<net-switch v-model="check" @change="changeStatus"></net-switch>
<span>{{check}}</span>
```
:::

## Inline Text or Icon

The contents of switch button can be customized, such as inserting text or icons to enhance visual effects. Complete by `slot="checkedText"` and `slot="unCheckedText"`

:::demo
```html
<net-switch>
  <span slot="checkedText">Open</span>
  <span slot="unCheckedText">Close</span>
</net-switch>
<net-switch>
  <span slot="checkedText"><i class="icon icon-left-arrow"></i></span>
  <span slot="unCheckedText"><i class="icon icon-right-arrow"></i></span>
</net-switch>
```
:::

## Disabled

To make a switch button as disabled, add `disabled` property to the Switch Button.

:::demo
```html
<net-switch disabled :value="true">
  <span slot="checkedText">Open</span>
  <span slot="unCheckedText">Close</span>
</net-switch>
<net-switch disabled>
  <span slot="checkedText">Open</span>
  <span slot="unCheckedText">Close</span>
</net-switch>
<net-switch disabled></net-switch>
```
:::

## Size

There are three sizes of a Switch Button: `large`，`normal`，`small`.

:::demo
```html
<div>
  <net-switch size="small"></net-switch>
  <net-switch size="small">
    <span slot="checkedText">Open</span>
    <span slot="unCheckedText">Close</span>
  </net-switch>
  <net-switch size="small" disabled></net-switch>
</div>
<div style="margin-top: 8px;">
  <net-switch></net-switch>
  <net-switch>
    <span slot="checkedText">Open</span>
    <span slot="unCheckedText">Close</span>
  </net-switch>
  <net-switch disabled></net-switch>
</div>
<div style="margin-top: 8px;">
  <net-switch size="large"></net-switch>
  <net-switch size="large">
    <span slot="checkedText">Open</span>
    <span slot="unCheckedText">Close</span>
  </net-switch size="large">
  <net-switch size="large" disabled></net-switch>
</div>
```
:::

## Switch Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | whether the Switch is checked | Boolean | - | false |
| size | size of Switch | String | `small`, `normal`, `large` | normal |
| disabled | whether the Switch is disabled | Boolean | — | false |

## Switch Slots

| Name      | Description          |
|---------- |-------------- |
| checkedText | customize content when state is opening |
| unCheckedText | customize content when state is closed |

## Switch Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| change | Emitted when the state of the switch changed | true or false |

<script>
export default {
  data() {
    return {
      check: true
    }
  },
  methods: {
    changeStatus(status) {
      this.check = status
    }
  }
}
</script>

<style lang="scss" scoped>
.net-switch + .net-switch {
  margin-left: 20px;
}
</style>
