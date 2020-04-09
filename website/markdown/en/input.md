
# Input

----

## Basic

Basic Input Box, default width is `100%`.

:::demo
```html
<net-input v-model="inputValue" placeholder="Please input"></net-input>
<net-input v-model="inputValue" placeholder="Disabled" disabled></net-input>
<net-input v-model="password" type="password" placeholder="Password"></net-input>
```
:::

## With Status

Add the property `status`, which represents the input box with different meanings. It does not affect the button logic. Provide four status by default: `success`，`error`，`warning`，`info`

:::demo
```html
<net-input v-model="inputValue2" placeholder="success" status="success" icon="check-circle"></net-input>
<net-input v-model="inputValue2" placeholder="error" status="error" icon="x-circle"></net-input>
<net-input v-model="inputValue2" placeholder="warning" status="warning" icon="alert-circle"></net-input>
<net-input v-model="inputValue2" placeholder="info" status="info" icon="info"></net-input>
```
:::

## Wich Icon

To display the tooltip icon after the input box, add `icon` property to Input. Its value is the class name of Icon. Please refer to the section of `Brand/Icon` for details.

:::demo
```html
<net-input v-model="inputValue3" placeholder="Please input url" icon="link"></net-input>
```
:::

## Pre / Post Label

Set `slot="prepend"` or `slot="append"` to customize the input box.

:::demo
```html
<net-input v-model="inputValue4" placeholder="Please input">
  <template slot="prepend">
    <span>Https://</span>
  </template>
</net-input>
<net-input v-model="inputValue4" placeholder="Please input" size="small">
  <template slot="append">
    <span>@aotu.io</span>
  </template>
</net-input>
<net-input v-model="inputValue4" placeholder="Please input">
  <template slot="prepend">
    <i class="icon icon-link"></i>
  </template>
</net-input>
<net-input v-model="inputValue4" placeholder="Please input" prepend-button>
  <template slot="prepend">
    <span>Search</span>
  </template>
</net-input>
<net-input v-model="inputValue4" placeholder="Please input" append-button>
  <template slot="append">
    <span>Search</span>
  </template>
</net-input>
<net-input v-model="inputValue4" placeholder="Please input" prepend-button>
  <template slot="prepend">
    <i class="icon icon-search"></i>
  </template>
</net-input>
<net-input v-model="inputValue4" placeholder="Please input" append-button>
  <template slot="append">
    <i class="icon icon-search"></i>
  </template>
</net-input>
```
:::

## Size

There are three sizes of an Input box: `large`，`normal`，`small`.

:::demo
```html
<net-input v-model="inputValue" size="large" placeholder="Large Size"></net-input>
<net-input v-model="inputValue" placeholder="Normal Size"></net-input>
<net-input v-model="inputValue" size="small" placeholder="Small Size"></net-input>
```
:::

## Input Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | input type | String | `text`, `passowrd`, `textarea` | - |
| name | same as `name` in native input | String | - | - |
| value | binding value | String / Number | - | - |
| placeholder | placeholder of input | String | - | - |
| disabled | whether input is disabled | Boolean | - | false |
| readonly | same as native input | Boolean | - | false |
| maxlength | maximum input text length | Number | - | - |
| minlength | minimum input text length | Number | - | - |
| max | same as native input | Number | - | - |
| min | same as native input | Number | - | - |
| autofocus | same as native input | Boolean | - | false |
| size | size of input, works when type is not 'textarea' | String | `small`, `normal`, `large` | normal |
| status | status of input | String | `success`, `error`, `warning`, `info` | - |
| prependButton | whether has prepend button or not | Boolean | - | false |
| appendButton | whether has append button or not | Boolean | - | false |

## Input slot

| Name | Description          |
|------ |------------ |
| prepend | Preposed content, only works in text type |
| append | Append content, only works in text type |

## Input Events

| Event Name | Description          | Return Value  |
|---------- |-------------- |---------- |
| focus | Emitted when focus | event |
| blur | Emitted when blur | event |

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.net-input {
  width: 200px;

  & + .net-input {
    margin-top: 15px;
  }
}
</style>
