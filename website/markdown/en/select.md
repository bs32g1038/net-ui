
# Select

----

## Basic

To make a select as disabled, add `disabled` property to the Select.

:::demo
```html
<net-select v-model="model1" style="width:100px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou~Guangzhou~Guangzhou</net-option>
  <net-option value="3">Shanghai</net-option>
  <net-option value="4">Beijing</net-option>
  <net-option value="5">chengdu</net-option>
</net-select>

<net-select v-model="model2" style="width:100px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
</net-select>

<net-select v-model="model2" disabled style="width:100px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
</net-select>
```
:::


## Size

There are three sizes of a Select: `large`，`normal`，`small`.

:::demo
```html
<net-select v-model="model3" size="small" style="width: 100px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
  <net-option value="3">Shanghai</net-option>
  <net-option value="4">Beijing</net-option>
  <net-option value="5">chengdu</net-option>
</net-select>
<net-select v-model="model3" size="normal" style="width: 100px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
  <net-option value="3">Shanghai</net-option>
  <net-option value="4">Beijing</net-option>
  <net-option value="5">chengdu</net-option>
</net-select>
<net-select v-model="model3" size="large" style="width: 100px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
  <net-option value="3">Shanghai</net-option>
  <net-option value="4">Beijing</net-option>
  <net-option value="5">chengdu</net-option>
</net-select>
```
:::


## Clearable

Set `clearable` property to give Select Button the ability to empty options, only enable in Single Select Button.

:::demo
```html
<net-select v-model="model4" clearable size="large" style="width: 100px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
  <net-option value="3">Shanghai</net-option>
  <net-option value="4">Beijing</net-option>
  <net-option value="5">chengdu</net-option>
</net-select>
```
:::


## Option Grouop

Options can be grouped by `OptionGroup` component, and the name of the group can be set using the `label` property.

:::demo
```html
<net-select v-model="model5" style="width: 100px">
  <net-option-group label="Guangdong">
    <net-option value="1">Shenzhen</net-option>
    <net-option value="2">Guangzhou</net-option>
    <net-option value="3">zhuhai</net-option>
  </net-option-group>
  <net-option-group label="Other">
    <net-option value="4">Shanghai</net-option>
    <net-option value="5">Beijing</net-option>
    <net-option value="6" disabled>chengdu</net-option>
    <net-option value="7">kunming</net-option>
    <net-option value="8">hangzhou</net-option>
  </net-option-group>
</net-select>
```
:::


## Customize Template

Customize the option content. When using label property in Option, the option will show the label preferentially. Otherwise the selected content will be same with the customise content and that is not what we want.

:::demo
```html
<net-select v-model="model6" style="width: 140px">
  <net-option value="1" label="Shenzhen"><span>Shenzhen</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shenzhen</span></net-option>
  <net-option value="2" label="Guangzhou"><span>Guangzhou</span><span style="float: right;opacity: .6;font-size: 0.8em;">Guangzhou</span></net-option>
  <net-option value="3" label="Shanghai"><span>Shanghai</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shanghai</span></net-option>
  <net-option value="4" label="Beijing"><span>Beijing</span><span style="float: right;opacity: .6;font-size: 0.8em;">Beijin</span></net-option>
  <net-option value="5" label="chengdu"><span>chengdu</span><span style="float: right;opacity: .6;font-size: 0.8em;">Chengdu</span></net-option>
</net-select>
```
:::


## Multiple

Add `multiple` property can support multiple select. In the multiple mode, model will accept an array value.

:::demo
```html
<net-select v-model="model7" multiple style="width: 240px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
  <net-option value="3">Shanghai</net-option>
  <net-option value="4">Beijing</net-option>
  <net-option value="5">chengdu</net-option>
</net-select>
```
:::


## Searchable

To set search mode, add `filterable` property to the Select.

:::demo
```html
<net-select v-model="model8" filterable size="large" style="width: 240px">
  <net-option value="1">Shenzhen</net-option>
  <net-option value="2">Guangzhou</net-option>
  <net-option value="3">Shanghai</net-option>
  <net-option value="4">Beijing</net-option>
  <net-option value="5">chengdu</net-option>
  <net-option value="6">xiameng</net-option>
  <net-option value="7">kunming</net-option>
  <net-option value="8">hangzhou</net-option>
</net-select>
```
:::

## Select Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| value | value of Select button，binding with `v-model` | String / Number / Array | - | - |
| multiple | whether support multiple | Boolean | - | false |
| disabled | whether Select is disabled | Boolean | - | false |
| clearable | whether can clear option | Boolean | - | false |
| filterable | whether support filter | Boolean | - | false |
| placeholder | text for placeholder | String | - | Select |
| size | size of Select | String | `large`, `normal`, `small` | normal |
| notFoundText | text to show when search no found | String | - | Nothing matched |
| placement | the direction of popup | String | `top`, `bottom` | bottom |
| valueWithLabel | set select return value what include label and value, which default return value | Boolean | - | false |

## Select Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-change | Emitted when selected Option change | values of selected items |

<script>
  export default {
    data () {
      return {
        model1: '',
        model2: '2',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model7: [],
        model8: '',
      }
    }
  }
</script>
