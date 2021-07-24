import App from '../page/laout/App'
import JSX from "../page/JSX/JSX";
import Login from "../page/login/Login";
import Index from "../page/index";

const routeConfig = [
    {
        path: '/',
        component: App,
        childRoutes:[
            {
                path: 'index',
                component: Index
            },
            {
                path: 'jsx',
                component: JSX
            },
            {
                path: 'login',
                component: Login
            }
        ]
    }
]

export default routeConfig
