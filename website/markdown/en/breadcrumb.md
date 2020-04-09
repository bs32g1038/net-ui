
# Breadcrumb

----

Breadcrumb displays the current location within a hierarchy. It provides a navigation to upper nodes.

## Basic

Use `net-breadcrumb` and `net-breadcrumb-item` to create breadcrumbs and add links with `href` property.

:::demo
```html
<net-breadcrumb>
  <net-breadcrumb-item>Home</net-breadcrumb-item>
  <net-breadcrumb-item href="#/en/docs/introduction">Components</net-breadcrumb-item>
  <net-breadcrumb-item>Breadcrumb</net-breadcrumb-item>
</net-breadcrumb>
```
:::

## Vue Router Integration

Used together with `vue-router`. Passed an `object` to `to` property. If you don't need a new history, add the `replace` property to `Breadcrumb Item`.

:::demo
```html
<net-breadcrumb>
  <net-breadcrumb-item>Home</net-breadcrumb-item>
  <net-breadcrumb-item :to="{ name: 'Layout-en' }">Layout</net-breadcrumb-item>
  <net-breadcrumb-item :to="{ name: 'Color-en' }" replace>Color</net-breadcrumb-item>
  <net-breadcrumb-item>Breadcrumb</net-breadcrumb-item>
</net-breadcrumb>
```
:::

## Configuring the Separator

The separator can be customized by setting the `separator` property, which supports `HTML String`.

:::demo
```html
<net-breadcrumb separator=">">
  <net-breadcrumb-item>Home</net-breadcrumb-item>
  <net-breadcrumb-item href="#/en/docs/introduction">Components</net-breadcrumb-item>
  <net-breadcrumb-item>Breadcrumb</net-breadcrumb-item>
</net-breadcrumb>
```
:::


## Breadcrumb Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | customize separator | String | - | `/` |

## BreadcrumbItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| href | link, same as the `href` property in `<a>` | String | - | - |
| to | the object of `vue-router`, same as the `to` property in `vue-router` | String / Object | - | - |
| replace | whether to add new history when using `to` | Boolean | - | false |
