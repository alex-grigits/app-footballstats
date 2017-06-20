import Vue from 'vue'
import Router from 'vue-router'
import Table from '../components/MainContent/table-standing'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/table/:id',
        component: Table
    }]
})