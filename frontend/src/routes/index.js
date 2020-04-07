import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import main from '../views/main'

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:main
        }

    ]
})

export default router