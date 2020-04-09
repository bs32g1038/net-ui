
# Tooltips

----

Tooltips is similar to the `title` attribute of `HTML`. When the mouse is suspended above the element, a tooltip will appears.

## Basic

When the mouse hovers, the tooltip box defaults to the top position.

:::demo
```html
<net-tooltip placement="top" content="information">
  <net-button>Button</net-button>
</net-tooltip>
<net-tooltip content="information"><span>Please hover me!</span></net-tooltip>
```
:::

## Customize Content

Customize the content of tooltip by `slot="content"` property.

:::demo
```html
<net-tooltip>
  <span>Information</span>
  <template slot="content">
    <p>Text One</p>
    <p>Text Two</p>
  </template>
</net-tooltip>
```
:::

## Placement

The ToolTip has 12 placements choice.

:::demo
```html
<div class="show-box">
  <div class="top row col-md-16 flex-center">
    <net-tooltip class="item" content="Top Left Message" placement="top-left"><net-button>Top Left</net-button></net-tooltip>
    <net-tooltip class="item" content="Top Message" placement="top"><net-button>Top</net-button></net-tooltip>
    <net-tooltip class="item" content="Top Right Message" placement="top-right"><net-button>Top Right</net-button></net-tooltip>
  </div>
  <div class="center row col-md-16 flex-between">
    <div class="left col-md-4">
      <net-tooltip class="item" content="Left Top Message" placement="left-top"><net-button>Left Top</net-button></net-tooltip>
      <net-tooltip class="item" content="Left Message" placement="left"><net-button>Left</net-button></net-tooltip>
      <net-tooltip class="item" content="Left Bottom Message" placement="left-bottom"><net-button>Left Bottom</net-button></net-tooltip>
    </div>
    <div class="right col-md-4">
      <net-tooltip class="item" content="Right Top Message" placement="right-top"><net-button>Right Top</net-button></net-tooltip>
      <net-tooltip class="item" content="Right Message" placement="right"><net-button>Right</net-button></net-tooltip>
      <net-tooltip class="item" content="Right Bottom Message" placement="right-bottom"><net-button>Right Bottom</net-button></net-tooltip>
    </div>
  </div>
  <div class="bottom row col-md-16 flex-center">
    <net-tooltip class="item" content="Bottom Left Message" placement="bottom-left"><net-button>Bottom Left</net-button></net-tooltip>
    <net-tooltip class="item" content="Bottom Message" placement="bottom"><net-button>Bottom</net-button></net-tooltip>
    <net-tooltip class="item" content="Bottom Right Message" placement="bottom-right"><net-button>Bottom Right</net-button></net-tooltip>
  </div>
</div>
```
:::

## Tooltip Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | the content of tooltip | String | - | - |
| placement | the position of tooltip | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

<style lang="scss" scoped>
.net-tooltip {
  & + .net-tooltip {
    margin-left: 16px;
  }
  span {
    font-size: 12px;
  }
  p {
    color: #fff;
    font-size: 12px;
  }
}
.show-box {
  max-width: 600px;

  .net-tooltip + .net-tooltip {
    margin: 0;
  }
}
.top,
.bottom {
  padding: 20px;
  width: 100%;

  .item + .item {
    margin-left: 30px;
  }
}
.center {
  width: 100%;

  .item + .item {
    margin-top: 20px;
  }
}
.left {
  flex-direction: column;
}

.item > span {
  display: inline-block;
  width: 60px;
  height: 32px;
  line-height: 32px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    color: #a0c1ff;
    border-color: #a0c1ff;
  }
}
</style>
