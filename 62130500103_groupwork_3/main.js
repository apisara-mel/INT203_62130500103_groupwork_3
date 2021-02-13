const app = {
    data() {
        return {
            tasks: [{
                    img: 'image/1.jpg',
                    done: false
                },
                {
                    img: 'image/2.jpg',
                    done: false
                },
                {
                    img: 'image/3.jpg',
                    done: false
                }
            ]
        }
    },

    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        }
    },

    computed:{
        countUndone(){
        return this.tasks.filter( t => !t.done).length
        }

    }
}
Vue.createApp(app).mount('#app')