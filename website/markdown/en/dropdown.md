
# Dropdown

----

Show a folded-styled dropdown menu.

## Basic

The most basic dropdown combines with `AtDropdown`，`AtDropdownMenu` and `AtDropdownItem`.

:::demo
```html
<net-dropdown>
  <span>Dropdown <i class="icon icon-chevron-down"></i></span>
  <net-dropdown-menu slot="menu">
    <net-dropdown-item>Shenzhen</net-dropdown-item>
    <net-dropdown-item>Guangzhou</net-dropdown-item>
    <net-dropdown-item disabled>Shanghai</net-dropdown-item>
    <net-dropdown-item divided>Beijing</net-dropdown-item>
    <net-dropdown-item>hangzhou</net-dropdown-item>
  </net-dropdown-menu>
</net-dropdown>
<net-dropdown>
  <net-button size="small">Dropdown <i class="icon icon-chevron-down"></i></net-button>
  <net-dropdown-menu slot="menu">
    <net-dropdown-item>Shenzhen</net-dropdown-item>
    <net-dropdown-item>Guangzhou</net-dropdown-item>
    <net-dropdown-item disabled>Shanghai</net-dropdown-item>
    <net-dropdown-item divided>Beijing</net-dropdown-item>
    <net-dropdown-item>hangzhou</net-dropdown-item>
  </net-dropdown-menu>
</net-dropdown>
```
:::

## Two Ways to Trigger

Use `trigger` property to change the way of trigger. Default is `hover`.

:::demo
```html
<net-dropdown>
  <net-button size="small">Hover Menu <i class="icon icon-chevron-down"></net-button>
  <net-dropdown-menu slot="menu">
    <net-dropdown-item name="shenzhen">Shenzhen</net-dropdown-item>
    <net-dropdown-item name="guangzhou">Guangzhou</net-dropdown-item>
    <net-dropdown-item name="shanghai" disabled>Shanghai</net-dropdown-item>
    <net-dropdown-item name="beijin" divided>Beijing</net-dropdown-item>
  </net-dropdown-menu>
</net-dropdown>
<net-dropdown trigger="click">
  <net-button size="small">Click Menu <i class="icon icon-chevron-down"></net-button>
  <net-dropdown-menu slot="menu">
    <net-dropdown-item name="shenzhen">Shenzhen</net-dropdown-item>
    <net-dropdown-item name="guangzhou">Guangzhou</net-dropdown-item>
    <net-dropdown-item name="shanghai" disabled>Shanghai</net-dropdown-item>
    <net-dropdown-item name="beijin" divided>Beijing</net-dropdown-item>
  </net-dropdown-menu>
</net-dropdown>
```
:::

## Placement

To change the alignment of Dropdown, add `placement` property to the Dropdown.

:::demo
```html
<net-dropdown placement="bottom-right">
  <net-button size="small">Hover Menu <i class="icon icon-chevron-down"></net-button>
  <net-dropdown-menu slot="menu">
    <net-dropdown-item name="shenzhen">Shenzhen</net-dropdown-item>
    <net-dropdown-item name="guangzhou">Guangzhou</net-dropdown-item>
    <net-dropdown-item name="shanghai" disabled>Shanghai</net-dropdown-item>
    <net-dropdown-item name="beijin" divided>Beijing</net-dropdown-item>
  </net-dropdown-menu>
</net-dropdown>
```
:::

## Events

Event `on-dropdown-command` emitted when the dropdown item was clicked, return the name of `DropdownItem`.

:::demo
```html
<net-dropdown placement="bottom-right" @on-dropdown-command="handleCommand">
  <net-button size="small">Hover Menu <i class="icon icon-chevron-down"></net-button>
  <net-dropdown-menu slot="menu">
    <net-dropdown-item name="shenzhen">Shenzhen</net-dropdown-item>
    <net-dropdown-item name="guangzhou">Guangzhou</net-dropdown-item>
    <net-dropdown-item name="shanghai" disabled>Shanghai</net-dropdown-item>
  </net-dropdown-menu>
</net-dropdown>
```
:::

## Dropdown Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | the way to trigger | String | `click`, `hover`, `focus` | `hover` |
| placement | placement of popup | String | `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right` | `bottom` |

## Dropdown Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-dropdown-command | Emitted when the dropdown item was clicked  | the name of item |

## DropdownItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the value of dropdown item | String | - | - |
| disabled | whether the Dropdown Item is disabled | Boolean | - | false |
| divided | whether to show split line | Boolean | - | false |

<style lang="scss" scoped>
  .net-dropdown + .net-dropdown {
    margin-left: 8px;
  }
  .net-dropdown__trigger {
    > span {
      font-size: 12px;
    }
  }
</style>

<script>
  export default {
    methods: {
      handleCommand (name) {
        this.$Message(`点击菜单：${name}`)
      }
    }
  }
</script>
