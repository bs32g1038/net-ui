
# Steps

---

`Steps` is a navigation bar that guides users through the steps of a task.

## Basic

The most basic step bar.

:::demo
```html
<net-steps :current='current'>
  <net-step title="Step1" description="This is a description."></net-step>
  <net-step title="Step2" description="This is a description."></net-step>
  <net-step title="Step3"></net-step>
</net-steps>

<net-button type="primary" @click="prev" style="margin-top: 12px;">Prev</net-button>
<net-button type="primary" @click="next" style="margin-top: 12px;">Next</net-button>
```
:::

## Mini version

By setting like this: `<Steps size="small">`, you can get a mini version.

:::demo
```html
<net-steps size="small" :current='current'>
  <net-step title="Step1" description="This is a description."></net-step>
  <net-step title="Step2" description="This is a description."></net-step>
  <net-step title="Step3"></net-step>
</net-steps>

<net-button type="primary" @click="prev" style="margin-top: 12px;">Prev</net-button>
<net-button type="primary" @click="next" style="margin-top: 12px;">Next</net-button>
```
:::

## With icon

You can use your own custom icons by setting the property `icon` for `Step`.

:::demo
```html
<net-steps :current='current'>
  <net-step title="Step1" description="This is a description." icon="icon-user"></net-step>
  <net-step title="Step2" description="This is a description." icon="icon-airplay"></net-step>
  <net-step title="Step3" icon="icon-pocket"></net-step>
</net-steps>

<net-button type="primary" @click="prev" style="margin-top: 12px;">Prev</net-button>
<net-button type="primary" @click="next" style="margin-top: 12px;">Next</net-button>
```
:::

## Switch Step

Cooperate with the content and buttons, to represent the progress of a process.

:::demo
```html
<net-steps :current='current'>
  <net-step v-for="(step, index) in steps"
    :title="step.title"
    :key="index"></net-step>
</net-steps>
<div class="steps-content" style="margin-top: 16px; border: 1px solid #e9e9e9; border-radius: 6px;background-color: #fafafa; min-height: 200px; text-align: center; padding-top:80px;">
  {{ steps[current].content }}
</div>

<net-button type="primary" @click="prev" style="margin-top: 12px;">Prev</net-button>
<net-button type="primary" @click="next" style="margin-top: 12px;">Next</net-button>

<script>
  export default {
    data() {
      return {
        current: 0,
        steps: [{
          title: 'First',
          content: 'First-content'
        }, {
          title: 'Second',
          content: 'Second-content'
        }, {
          title: 'Last',
          content: 'Last-content'
        }]
      }
    },

    methods: {
      prev () {
        if (this.current-- <= 0)
          this.current = 0
      },
      next () {
        if (this.current++ >= 2)
          this.current = 2
      }
    }
  }
</script>
```
:::

## Vertical

A simple step bar in the vertical direction.

:::demo
```html
<net-steps :current='current' direction="vertical">
  <net-step title="Step1" description="This is a description."></net-step>
  <net-step title="Step2" description="This is a description."></net-step>
  <net-step title="Step3" description="This is a description."></net-step>
</net-steps>

<net-button type="primary" @click="prev" style="margin-top: 12px;">Prev</net-button>
<net-button type="primary" @click="next" style="margin-top: 12px;">Next</net-button>
```
:::

## Vertical mini version

A simple mini version step bar in the vertical direction.

:::demo
```html
<net-steps :current='current' size="small" direction="vertical">
  <net-step title="Step1" description="This is a description."></net-step>
  <net-step title="Step2" description="This is a description."></net-step>
  <net-step title="Step3" description="This is a description."></net-step>
</net-steps>

<net-button type="primary" @click="prev" style="margin-top: 12px;">Prev</net-button>
<net-button type="primary" @click="next" style="margin-top: 12px;">Next</net-button>
```
:::


## Error status

By using `status` of `Steps`, you can specify the state for current step.

:::demo
```html
<net-steps :current='current' status="error">
  <net-step title="Step1" description="This is a description."></net-step>
  <net-step title="Step2" description="This is a description."></net-step>
  <net-step title="Step3"></net-step>
</net-steps>

<net-button type="primary" @click="prev" style="margin-top: 12px;">Prev</net-button>
<net-button type="primary" @click="next" style="margin-top: 12px;">Next</net-button>
```
:::

## Steps Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| current | to set the current step, counting from 0 | Number | - | 0 |
| status | to specify the status of current step | String | `wait` `process` `finish` `error` | `process` |
| size | to specify the size of the step bar | String | `default` `small` | `default` |
| direction | to specify the direction of the step bar | String | `horizontal` `vertical` | `horizontal` |


## Step Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | title of the step | String | - | - |
| description | detail of the step, optional property | String | - | - |
| icon | icon of the step, optional property | String | - | - |
| status | to specify the status. It will be automatically set by `current` of `Steps` if not configured  | String | `wait` `process` `finish` `error` | - |

<script>
  export default {
    data() {
      return {
        current: 0,
        steps: [{
          title: 'First',
          content: 'First-content'
        }, {
          title: 'Second',
          content: 'Second-content'
        }, {
          title: 'Last',
          content: 'Last-content'
        }]
      }
    },

    methods: {
      prev () {
        if (this.current-- <= 0)
          this.current = 0
      },
      next () {
        if (this.current++ >= 2)
          this.current = 2
      }
    }
  }
</script>
