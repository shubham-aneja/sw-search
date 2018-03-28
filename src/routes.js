import Home from './components/home/index'
import Login from './components/login'
import NotFound from './components/not-found'
const ROUTES = [
    {
        path: '/',
        component: Login,
        onEnter
    },
    {
        path: '/home',
        component: Home,
        onEnter
    },
    {
        path: '*',
        component: NotFound
    }
];

export default ROUTES

function onEnter(nextState, transition, callback) {
    const { pathname } = nextState.location;
    const isLoggedIn = localStorage.getItem('username');
    if (isLoggedIn) {
        if (pathname === '/') {
            transition('/home')
        }
    }
    else {
        if (pathname === '/home') {
            transition('/')
        }
    }
    return callback() // go as it is.
}