
# Checkbox 多选框

----

## 基本多选框

独立使用时，需要单独绑定 `model`

:::demo
```html
<net-checkbox v-model="checkboxValue1" label="深圳">深圳</net-checkbox>
<p class="demo-desc">{{ checkboxValue1 }}</p>
```
:::

## 不可用的多选框

添加 `disabled` 属性禁用多选框

:::demo
```html
<net-checkbox v-model="checkboxValue2" label="深圳" disabled>深圳</net-checkbox>
<net-checkbox v-model="checkboxValue3" label="凹凸实验室" disabled checked>凹凸实验室</net-checkbox>
```
:::

## 多选框组

适用于多个多选框绑定同一个 `model` 的情景

:::demo
```html
<net-checkbox-group v-model="checkboxValue4">
  <net-checkbox label="深圳">深圳</net-checkbox>
  <net-checkbox label="北京">北京</net-checkbox>
  <net-checkbox label="上海">上海</net-checkbox>
  <net-checkbox label="广州" disabled>广州</net-checkbox>
  <net-checkbox label="凹凸实验室" disabled>凹凸实验室</net-checkbox>
</net-checkbox-group>
<p class="demo-desc">{{ checkboxValue4 }}</p>
```
:::

## Checkbox 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选中状态的值 | String | - | - |
| disabled | 是否禁用按钮 | Boolean | - | false |
| checked | 是否已勾选 | Boolean | - | false |

## Checkbox 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 绑定的值变化时触发 | 选中的按钮的 label 值 |

## Checkbox Group 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 绑定的值变化时触发 | 选中的按钮的 label 值 |

<script>
export default {
  data() {
    return {
      checkboxValue1: true,
      checkboxValue2: false,
      checkboxValue3: false,
      checkboxValue4: ['深圳', '凹凸实验室']
    }
  }
}
</script>
