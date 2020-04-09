
# Collapse

----

## Basic

You can expand multiple items.

:::demo
```html
<net-collapse :value="[0, 1]">
  <net-collapse-item
    v-for="(item, index) in list" :key="index"
    :title="item.title" :disabled="item.disabled">
    <div>
      {{ item.content }}
    </div>
  </net-collapse-item>
</net-collapse>
```
:::

## Accordion

In accordion mode, only one item can be expanded at once.

:::demo
```html
<net-collapse accordion :value="0">
  <net-collapse-item
    v-for="(item, index) in list" :key="index"
    :title="item.title">
    <div>
      {{ item.content }}
    </div>
  </net-collapse-item>
</net-collapse>
```
:::

## Item nesting

Collapse is nested inside the Collapse.

:::demo
```html
<net-collapse @on-change="changeHandle" value="0">
  <net-collapse-item
    v-for="(item, index) in list" :key="index"
    :title="item.title">
    <div>
      {{ index !== 0 ? item.content : '' }}
      <net-collapse accordion v-if="index === 0">
        <net-collapse-item title="Item nesting title">
          <div>Item nesting content</div>
        </net-collapse-item>
      </net-collapse>
    </div>
  </net-collapse-item>
</net-collapse>
```
:::

## Custom title

Besides using the title attribute, you can customize item title with named slots, which makes adding custom content, e.g. icons, possible.

:::demo
```html
<net-collapse accordion :value="value">
  <net-collapse-item name="collapse1">
    <div slot="title">Title 1 <i class="icon icon-info"></div>
    <div>content 1</div>
  </net-collapse-item>
  <net-collapse-item name="collapse2">
    <div slot="title">Title 2 <i class="icon icon-box"></div>
    <div>content 2</div>
  </net-collapse-item>
  <net-collapse-item>
    <div slot="title">Title 3 <i class="icon icon-calendar"></div>
    <div>content 3</div>
  </net-collapse-item>
</net-collapse>
```
:::

## Simple Mode

Set `simple` property to use a simple collapse.

:::demo
```html
<net-collapse simple accordion :value="0">
  <net-collapse-item
    v-for="(item, index) in list" :key="index"
    :title="item.title">
    <div>
      {{ item.content }}
    </div>
  </net-collapse-item>
</net-collapse>
```
:::

## Collapse Props

| Property  | Description   | Type      | Accepted Values         | Default |
|---------- |-------------- |---------- |-----------------------  |-------- |
| accordion | whether to open the accordion mode (ie, expand at most one item) | Boolean | - | false |
| value | the value of the currently activated item's `name` | Array / String / Number | - | - |
| simple | whether to use simple mode | Boolean | - | false |

## Collapse Events

| Event Name| Description   | Return Value  |
|---------- |-------------- |-------------- |
| on-change | emit when item is switched | Return the key of the spread item(s) in an array |

## CollapseItem Props

| Property  | Description   | Type      | Accepted Values                  | Default |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | title of the item (you can customize item title with named slots) | String | - | - |
| name | the name of current item, corresponds with `value` of Collapse. Index value will be used if not filled | String / Object | - | - |
| disabled | users cannot change opening status of a disabled item | Boolean | - | false |

## CollapseItem slot

| Name      | Description |
|----------|-------- |
| title | title of the item |
| - | content of the item |

<script>
  export default {
    data () {
      return {
        list: [
          { title: 'title 1', content: 'content 1' },
          { title: 'title 2', content: 'content 2' },
          { title: 'title 3', content: 'content 3', disabled: true }
        ],
        value: 'collapse1'
      }
    },
    methods: {
      changeHandle (val) {
        this.$Message.info(`collapse change event: ${val}`)
      }
    }
  }
</script>
