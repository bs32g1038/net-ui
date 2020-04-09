# Button

----

Clicking a button will trigger an operation.

## Type

There are three basic buttons: `Primary` 、 `Default` 、 `Text`.

:::demo
```html
<net-button type="primary">Primary Button</net-button>
<net-button>Default Button</net-button>
<net-button type="text">Text Button</net-button>
```
:::

## Disabled

To make a button as disabled, add `disabled` property to the `Button`.

:::demo
```html
<net-button type="primary" disabled>Primary Button</net-button>
<net-button hollow disabled>Default Button</net-button>
<net-button type="text" disabled>Text Button</net-button>
```
:::

## With Color Tendency

Button with color tendency gives user an operating hint.

:::demo
```html
<div class="row">
  <net-button hollow>Default</net-button>
  <net-button type="primary" hollow>Primary</net-button>
  <net-button type="success" hollow>Success</net-button>
  <net-button type="error" hollow>Error</net-button>
  <net-button type="warning" hollow>Warning</net-button>
  <net-button type="info" hollow>Info</net-button>
</div>
<div class="row">
  <net-button>Default</net-button>
  <net-button type="primary">Primary</net-button>
  <net-button type="success">Success</net-button>
  <net-button type="error">Error</net-button>
  <net-button type="warning">Warning</net-button>
  <net-button type="info">Info</net-button>
</div>
```
:::

## With Icon

`Button` components can contain an `Icon`. This is done by setting the `Icon` property or placing an `Icon` within the `Button`. The `Icon` is fixed in front of the text that setted by `icon` property.

:::demo
```html
<div class="row">
  <net-button icon="icon-download">Download</net-button>
  <net-button icon="icon-user-plus">Add User</net-button>
  <net-button icon="icon-edit"></net-button>
  <net-button type="primary" icon="icon-search"></net-button>
</div>
<div class="row">
  <net-button icon="icon-edit" circle></net-button>
  <net-button type="primary" icon="icon-search" circle></net-button>
</div>
```
:::

## Loading

A loading indicator can be added to button by setting the `loading` property.

:::demo
```html
<net-button loading>Loading</net-button>
<net-button loading></net-button>
<net-button loading circle></net-button>
```
:::

## Button Group

Buttons can be grouped by placing multiple `Button` components into a `ButtonGroup` component.

:::demo
```html
<net-button-group>
  <net-button>Left</net-button>
  <net-button>Center</net-button>
  <net-button>Right</net-button>
</net-button-group>
<br>
<net-button-group>
  <net-button icon="icon-edit" title="Edit"></net-button>
  <net-button icon="icon-copy" title="Copy"></net-button>
  <net-button icon="icon-download" title="Download"></net-button>
</net-button-group>
<br>
<net-button-group>
  <net-button><i class="icon icon-chevron-left"></i>Go back</net-button>
  <net-button>Go forward<i class="icon icon-chevron-right"></i></net-button>
</net-button-group>
```
:::

## Size

Size of Button: `large`, `normal`, `small`, `smaller`.<br>
Size of GroupButton: `large`, `normal`, `small`.<br>
Set the `size` property to use different size of button, it's `normal` size by default.

:::demo
```html
<div>
  <net-button type="primary" size="large">Large Button</net-button>
  <net-button type="primary">Normal Button</net-button>
  <net-button type="primary" size="small">Small Button</net-button>
  <net-button type="primary" size="smaller">Smaller Button</net-button>
</div>
<div style="margin-top: 8px;">
  <net-button type="primary" size="large" icon="icon-search" circle></net-button>
  <net-button type="primary" icon="icon-search" circle></net-button>
  <net-button type="primary" size="small" icon="icon-search" circle></net-button>
  <net-button type="primary" size="smaller" icon="icon-search" circle></net-button>
</div>
<div style="margin-top: 8px;">
  <net-button-group size="large">
    <net-button>Left</net-button>
    <net-button>Center</net-button>
    <net-button>Right</net-button>
  </net-button-group>
  <net-button-group>
    <net-button>Left</net-button>
    <net-button>Center</net-button>
    <net-button>Right</net-button>
  </net-button-group>
  <net-button-group size="small">
    <net-button>Left</net-button>
    <net-button>Center</net-button>
    <net-button>Right</net-button>
  </net-button-group>
</div>
```
:::

## Button Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | type of button | String | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | - |
| nativeType | same as native type | String | - | `button` |
| size | size of button | String | `large`, `small`, `smaller` | normal |
| hollow | whether a hollow button | Boolean | - | false |
| icon | set the icon of button, input the `classname` | String | see the document of `Icon` | - |
| loading | set the loading status of button | Boolean | - | false |
| circle | set the circle shape of button | Boolean | - | false |

## Button Group Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | size of button | String | `large`, `small` | normal |
| gap | gap of the buttons | Number | - | -1 |

<style lang="scss" scoped>
  .row {
    .net-btn + .net-btn {
      margin-left: 8px;
    }

    & + .row {
      margin-top: 8px;
    }
    .net-btn-group .net-btn {
      margin-left: 0;
    }
  }
  .net-btn-group {
    margin-left: 8px;
    margin-top: 16px;
  }
</style>
