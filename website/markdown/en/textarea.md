
# Textarea

----

Textarea Input for multiline text, not for rich text entry.

## Basic

The textarea is fixed as two lines default, similear to the `AtInput` component.

:::demo
```html
<net-textarea v-model="inputValue" placeholder="Please input..."></net-textarea>
```
:::

## Disabled

To make textarea as disabled, add `disabled` property to the Textarea.

:::demo
```html
<net-textarea v-model="inputValue" placeholder="Please input..." disabled></net-textarea>
```
:::

## Adaptive Text Height (Limited)

Automatically adjusted the height of textarea according to the number of lines. The minimum and maximum number of rows can be set by `minRows` and `maxRows` properties.

:::demo
```html
<p class="demo-desc">minRows=2, maxRows=4</p>
<net-textarea v-model="inputValue2" min-rows="2" max-rows="4" placeholder="Please input multiline text..."></net-textarea>
```
:::

## Adaptive Text Height (Without Limited)

Automatically adjusted the height of textarea according to the number of lines without limited. Use `autosize` property.

:::demo
```html
<net-textarea v-model="inputValue3" autosize placeholder="Please input multiline text..."></net-textarea>
```
:::

## Textarea Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | same as native textarea | String | - | - |
| value | the value of textarea, use `v-model` to enable a two-way binding | String | - | - |
| autosize | adaptive text height | Boolean | - | false |
| placeholder | the text of placeholder | String | - | - |
| disabled | whether the textarea is disabled | Boolean | - | false |
| autofocus | same as native textarea | Boolean | - | false |
| resize | whether to be resize by the user | String | `none`, `both`, `horizontal`, `vertical`  | `vertical` |

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValue2: '',
      inputValue3: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .net-textarea {
    & + .net-textarea {
      margin-top: 15px;
    }
  }
</style>
