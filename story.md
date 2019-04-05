# Vue.js Components Fundamentals

Components are the puzzle pieces of a Vue.js website. Learn the fundamental and important concept of Vue.js components in this course.

Learn everything you need to know to get started with Vue.js components. Web components are custom developer defined HTML elements, like `<p>`, `<body>`, or `<button>`, that allows us to encapsulate some functionality of our applications.

Components are the puzzle pieces of a Vue.js website. Components combine blocks of HTML, JavaScript, and CSS. And as a result, they allow us to easily encapsulate and reuse functionality in our applications.

After this course, you'll be familiar with:
- The idea behind components and how Vue.js components work
- Component's template, and multiple ways to define your template
- Communication between components with props and custom events
- What is the true difference between global and local component registration
- The lifecycle hooks of a component
- Component composition with nested components and slots
- Component's best practices and common pitfalls
- We've also prepared exercises for the course, so you can practice what you learn.

Vue.js Component Exercises:
- Build a GitHub user profile component
- Create a Notification Message component

## 1. Introduction to Components

In this lesson, we'll learn about Vue components. We'll get an introduction to what a component is, why we need components and lastly how we can create and use a component in our Vue.js app.

https://ru.vuejs.org/v2/guide/components

Создадим первый компонент.


## 2. Component's Template

We're going to learn about a Vue component's template. Essentially, the template is where we define our HTML and general markup for our component. We also bind our component's data to the DOM in the template.

In Vue.js, we can define our template in a few different ways. In this lesson, we'll move away from the inline template and use the *x-template technique*, which is great when you're getting started.

Remember! Component template must contain exactly one root element. You should use a wrappers like `<div>`.

https://ru.vuejs.org/v2/guide/syntax.html

## 3. Reusable Components with Props

In this lesson, we'll see a realistic use case for reusable components and learn about Vue.js component props.

Props are custom HTML attributes that we can register on our components, which allow us to pass data to our components.

You can find the starting point of the demo in this lesson in the link. We've also created a jsfiddle if you want to play around with the code.

Порядок действия:
- у нас был исходный код, в котором предложения перечислялись в HTML;
- добавили компонент и используем props, кода стало меньше и он стал проще;
- теперь сделаем, чтобы значения собирались из массива и props сделаем объектом;
