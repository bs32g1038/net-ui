
# Menu

----

Menus typically have `Top Navigator` or `Side Navigator`, a menu list that provides navigation for the page.

## Top Navigator

Set `mode` to `horizontal`.

:::demo
```html
<net-menu mode="horizontal" active-name="1">
  <net-menu-item name="1"><i class="icon icon-home"></i>Navigation One</net-menu-item>
  <net-menu-item name="2" disabled><i class="icon icon-layers"></i>Navigation Two</net-menu-item>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three - Submenu</template>
    <net-menu-item-group title="Group One">
      <net-menu-item name="3-1">Submenu One</net-menu-item>
      <net-menu-item name="3-2" disabled>Submenu Two</net-menu-item>
    </net-menu-item-group>
    <net-menu-item-group title="Group Two">
      <net-menu-item name="3-3">Submenu Three</net-menu-item>
      <net-menu-item name="3-4">Submenu Four</net-menu-item>
    </net-menu-item-group>
  </net-submenu>
  <net-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</net-menu-item>
</net-menu>
```
:::

## Top Navigator (Multi-Level)

Nested `Submenu` in `Submenu` can bi combined into multilevel menus.

:::demo
```html
<net-menu mode="horizontal" active-name="1">
  <net-menu-item name="1"><i class="icon icon-home"></i>Navigation One</net-menu-item>
  <net-menu-item name="2"><i class="icon icon-layers"></i>Navigation Two</net-menu-item>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <net-menu-item name="3-1"><i class="icon icon-settings"></i>Submenu One</net-menu-item>
    <net-menu-item name="3-2"><i class="icon icon-settings"></i>Submenu Two</net-menu-item>
    <net-submenu>
      <template slot="title"><i class="icon icon-life-buoy"></i>Submenu Three</template>
      <net-menu-item name="3-3-1"><i class="icon icon-settings"></i>Submenu Four</net-menu-item>
      <net-menu-item name="3-3-2"><i class="icon icon-settings"></i>Submenu Five</net-menu-item>
    </net-submenu>
  </net-submenu>
  <net-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</net-menu-item>
</net-menu>
```
:::

## Side Navigator

Set `mode` to `vertical`.

:::demo
```html
<net-menu mode="vertical" active-name="1">
  <net-menu-item name="1"><i class="icon icon-home"></i>Navigation One</net-menu-item>
  <net-menu-item name="2" disabled><i class="icon icon-layers"></i>Navigation Two</net-menu-item>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <net-menu-item-group title="Group One">
      <net-menu-item name="3-1">Submenu One</net-menu-item>
      <net-menu-item name="3-2" disabled>Submenu Two</net-menu-item>
    </net-menu-item-group>
    <net-menu-item-group title="Group Two">
      <net-menu-item name="3-3">Submenu Three</net-menu-item>
      <net-menu-item name="3-4">Submenu Four</net-menu-item>
    </net-menu-item-group>
  </net-submenu>
  <net-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</net-menu-item>
</net-menu>
```
:::

## Side Navigator (Multi-Level)

:::demo
```html
<net-menu mode="vertical" active-name="1">
  <net-menu-item name="1"><i class="icon icon-home"></i>Navigation One</net-menu-item>
  <net-menu-item name="2"><i class="icon icon-layers"></i>Navigation Two</net-menu-item>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <net-menu-item-group title="Group One">
      <net-menu-item name="3-1">Submenu One</net-menu-item>
      <net-menu-item name="3-2">Submenu Two</net-menu-item>
    </net-menu-item-group>
    <net-menu-item-group title="Group Two">
      <net-menu-item name="3-3">Submenu Three</net-menu-item>
      <net-menu-item name="3-4">Submenu Four</net-menu-item>
    </net-menu-item-group>
  </net-submenu>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Four</template>
    <net-menu-item name="4-1"><i class="icon icon-settings"></i>Submenu Five</net-menu-item>
    <net-menu-item name="4-2"><i class="icon icon-settings"></i>Submenu Six</net-menu-item>
    <net-submenu>
      <template slot="title"><i class="icon icon-life-buoy"></i>Submenu Seven</template>
      <net-menu-item name="4-3-1"><i class="icon icon-settings"></i>Submenu Eight</net-menu-item>
      <net-menu-item name="4-3-2"><i class="icon icon-settings"></i>Submenu Night</net-menu-item>
    </net-submenu>
  </net-submenu>
</net-menu>
```
:::

## Side Inline Navigator

Set `mode` to `inline`.

:::demo
```html
<net-menu active-name="1">
  <net-menu-item name="1"><i class="icon icon-home"></i>Navigation One</net-menu-item>
  <net-menu-item name="2" disabled><i class="icon icon-layers"></i>Navigation Two</net-menu-item>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <net-menu-item-group title="Group One">
      <net-menu-item name="3-1">Submenu One</net-menu-item>
      <net-menu-item name="3-2">Submenu Two</net-menu-item>
    </net-menu-item-group>
    <net-menu-item-group title="Group Two">
      <net-menu-item name="3-3">Submenu Three</net-menu-item>
      <net-menu-item name="3-4" disabled>Submenu Four</net-menu-item>
    </net-menu-item-group>
  </net-submenu>
  <net-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</net-menu-item>
  <net-submenu disabled>
    <template slot="title"><i class="icon icon-life-buoy"></i>Submenu Five</template>
    <net-menu-item name="5-1">Submenu Six</net-menu-item>
    <net-menu-item name="5-2">Submenu Seven</net-menu-item>
  </net-submenu>
</net-menu>
```
:::

## Collapsed Inline Navigator

Set `inline-collapsed` property to open collapsed mode. Which means only one submenu can be expanded at the same time.

:::demo
```html
<net-menu active-name="1-1" inline-collapsed>
  <net-submenu opened>
    <template slot="title"><i class="icon icon-home"></i>Navigation One</template>
    <net-menu-item-group title="Group One">
      <net-menu-item name="1-1">Submenu One</net-menu-item>
      <net-menu-item name="1-2">Submenu Two</net-menu-item>
    </net-menu-item-group>
    <net-menu-item-group title="Group Two">
      <net-menu-item name="1-3">Submenu Three</net-menu-item>
      <net-menu-item name="1-4">Submenu Four</net-menu-item>
    </net-menu-item-group>
  </net-submenu>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Two</template>
    <net-menu-item name="2-1">Submenu One</net-menu-item>
    <net-menu-item name="2-2">Submenu Two</net-menu-item>
    <net-menu-item name="2-3">Submenu Three</net-menu-item>
    <net-menu-item name="2-4">Submenu Four</net-menu-item>
  </net-submenu>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <net-menu-item name="3-1">Submenu One</net-menu-item>
    <net-menu-item name="3-2">Submenu Two</net-menu-item>
    <net-menu-item name="3-3">Submenu Three</net-menu-item>
    <net-menu-item name="3-4">Submenu Four</net-menu-item>
  </net-submenu>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Four</template>
    <net-menu-item name="4-1">Submenu One</net-menu-item>
    <net-menu-item name="4-2">Submenu Two</net-menu-item>
  </net-submenu>
</net-menu>
```
:::

## Themes

There are two built-in themes: `light` and `dark`. The default value is `light`.

:::demo
```html
<div class="row" style="margin-bottom: 24px;">
  <net-switch :value="true" @change="changeTheme">
    <span slot="checkedText">Dark</span>
    <span slot="unCheckedText">Light</span>
  </net-switch>
  <net-radio-group v-model="mode" style="margin-left: 40px;">
    <net-radio label="inline">Inline</net-radio>
    <net-radio label="horizontal">Horizontal</net-radio>
    <net-radio label="vertical">Vertical</net-radio>
  </net-radio-group>
</div>
<net-menu :theme="theme" :mode="mode" active-name="0" >
  <net-menu-item name="0" disabled><i class="icon icon-box"></i>Submenu</net-menu-item>
  <net-submenu>
    <template slot="title"><i class="icon icon-home"></i>Navigation One</template>
    <net-menu-item-group title="Group One">
      <net-menu-item name="1-1">Submenu One</net-menu-item>
      <net-menu-item name="1-2">Submenu Two</net-menu-item>
    </net-menu-item-group>
    <net-menu-item-group title="Group Two">
      <net-menu-item name="1-3">Submenu Three</net-menu-item>
      <net-menu-item name="1-4">Submenu Four</net-menu-item>
    </net-menu-item-group>
  </net-submenu>
  <net-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Two</template>
    <net-menu-item name="2-1">Submenu One</net-menu-item>
    <net-menu-item name="2-2">Submenu Two</net-menu-item>
    <net-menu-item name="2-3" disabled>Submenu Three</net-menu-item>
    <net-menu-item name="2-4">Submenu Four</net-menu-item>
  </net-submenu>
  <net-submenu>
    <template slot="title"><i class="icon icon-command"></i>Navigation Three</template>
    <net-menu-item name="3-1">Submenu One</net-menu-item>
    <net-menu-item name="3-2">Submenu Two</net-menu-item>
    <net-menu-item name="3-3">Submenu Three</net-menu-item>
    <net-menu-item name="3-4">Submenu Four</net-menu-item>
  </net-submenu>
  <net-submenu disabled>
    <template slot="title"><i class="icon icon-inbox"></i>Navigation Four</template>
    <net-menu-item name="4-1">Submenu One</net-menu-item>
    <net-menu-item name="4-2">Submenu Two</net-menu-item>
  </net-submenu>
</net-menu>
```
:::

## Vue Router Integration

Used together with `vue-router`. Set `router` property to `net-menu`, and Passed an `object` to `to` property. If you don't need a new history, add the `replace` property to `Menu Item`.

:::demo
```html
<net-menu router>
  <net-menu-item :to="{ name: 'Breadcrumb-en' }">Breadcrumb</net-menu-item>
  <net-menu-item :to="{ name: 'Dropdown-en' }">Dropdown</net-menu-item>
  <net-menu-item :to="{ name: 'Menu-en' }">Menu</net-menu-item>
  <net-menu-item :to="{ name: 'Pagination-en' }">Pagination</net-menu-item>
</net-menu>
```
:::

## Menu Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| mode | the mode of Menu | String | `inline`, `horizontal`, `vertical` | `inline` |
| theme | the theme of Menu | String | `light`, `dark` | `light` |
| activeName | the name of actived item | String, Number | - | - |
| router | whether to use `vue-router` | Boolean | - | false |
| inlineCollapsed | enable collapsed mode | Boolean | - | false |
| width | the width of Menu, only valid in `vertical` and `inline` mode | String | - | `240px` |

## Menu Events

| Event Name | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-select | Emitted when the menu item was clicked | name |

## MenuGroup Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | the title of grouop | String | - | - |

## Submenu Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | whether the Submenu is disabled | Boolean | - | false |
| opened | whether to expand the submenu | Boolean | - | false |

## MenuItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the name of Menu Item | String / Number | - | - |
| to | the object of `vue-router`, same as the `to` property in `vue-router` | String / Object | - | - |
| replace | whether to add new history when using `to` | Boolean | - | false |
| disabled | whether the MenuItem is disabled | Boolean | - | false |

<script>
  export default {
    data () {
      return {
        theme: 'dark',
        mode: 'inline',
      }
    },
    watch: {
      mode (value) {
        if (value !== 'inline') {}
      }
    },
    methods: {
      changeTheme (value) {
        this.theme = value ? 'dark' : 'light'
      }
    }
  }
</script>
