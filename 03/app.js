Vue.component('plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'The Default',
            required: true
        }
    }
})

new Vue({
    el: '#app',
    data: {
        plans: [, 'The Single', 'The Curious', 'The Addict']
    }
})
