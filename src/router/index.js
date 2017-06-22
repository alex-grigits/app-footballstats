import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import Tables from '../components/Tables'
import Teams from '../components/Teams'
import Fixtures from '../components/Fixtures'
import Team from '../components/Team'

Vue.use(Router)


export default new Router({
    linkActiveClass: 'is-active',
    mode: 'history',
    routes: [
        { path: '/', component: Dashboard },
        { path: '/tables', component: Tables },
        { path: '/teams', component: Teams },
        { path: '/fixtures', component: Fixtures },
        { path: '/team/:id', component: Team }
    ]
})