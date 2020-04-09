
# Pagination

----

A long list can be divided into several pages by Pagination, and only one page will be loaded at a time.

## Basic

Less than 8 pages.

:::demo
```html
<net-pagination :total="60"></net-pagination>
```
:::

## More Pages

More than 8 pages.

:::demo
```html
<net-pagination :total="100"></net-pagination>
```
:::

## Show Total Number

To display the amount of data, add `show-total` property to the Pagination.

:::demo
```html
<net-pagination :total="80" show-total></net-pagination>
```
:::

## Quick Jumper

To display the quick-jump button, add `show-quickjump` property to the Pagination.

:::demo
```html
<net-pagination :total="100" show-quickjump></net-pagination>
```
:::

## Items in Each Page

You can set items amount shown in each page.

:::demo
```html
<net-pagination :total="100" show-sizer></net-pagination>
```
:::

## Full Feature

Full Feature Pagination.

:::demo
```html
<net-pagination :total="100" show-total show-sizer show-quickjump></net-pagination>
```
:::

## Mini Pagination

To use mini size pagination, set `size` property to `small`.

:::demo
```html
<net-pagination size="small" :total="100" show-total show-sizer show-quickjump></net-pagination>
```
:::

## Simple Mode

Set `simple` property to use a simple pagination.

:::demo
```html
<net-pagination :total="100" simple></net-pagination>
<net-pagination :total="100" size="small" simple></net-pagination>
```
:::

## Pagination Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |-----------------------------  |-------- |
| current | current page number | Number | - | 1 |
| total | total number of data | Number | - | 0 |
| page-size | amount shown in each page | Number | - | 10 |
| page-size-opts | The configuration of switching the amount of data shown in each page | Array | - | [10, 20, 30, 40] |
| show-total | to display the total number and range | Boolean | - | false |
| show-sizer | determine whether `page-size` can be changed | Boolean | - | false |
| show-quickjump | determine whether you can jump to a page directly | Boolean | - | false |
| size | specify the size of Pagination | String | `small` | - |
| simple | determine whether to use simple mode | Boolean | - | false |

## Pagination Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| page-change | Emitted when the page was changed | page number |
| pagesize-change | Emitted when the page sizer was changed | page size |

<style lang="scss" scoped>
  .net-pagination + .net-pagination {
    margin-top: 16px;
  }
</style>
