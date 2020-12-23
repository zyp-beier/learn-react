import App from '../page/laout/App'
import JSX from "../page/JSX/JSX";
import Login from "../page/login/Login";

const routeConfig = [
    {
        path: '/',
        component: App,
        childRoutes:[
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
