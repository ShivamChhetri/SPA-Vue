import Main from './components/Main.vue'
import News from './components/News.vue'
import Wiki from './components/Wiki/Wiki.vue'

export default[
    {path:'/',component: Main},
    {path:'/news',component: News},
    {path: '/wiki/:search',name: 'Wiki',component: Wiki}
]