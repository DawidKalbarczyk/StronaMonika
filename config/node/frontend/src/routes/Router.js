import {createHashRouter} from "react-router-dom";
import {Home, AboutMe, Cennik, Galeria, Kontakt, WskazaniaPrzeciw, Zabiegi} from './LazyImports';
const basename = process.env.NODE_ENV === 'production'
    ? '/StronaMonika'
    : '';

const routes = createHashRouter(
    [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/cennik',
            element: <Cennik/>
        },
        {
            path: '/o-mnie',
            element: <AboutMe/>
        },
        {
            path: '/galeria',
            element: <Galeria/>
        },
        {
            path: '/kontakt',
            element: <Kontakt/>
        },
        {
            path: '/wskazania-przeciwwskazania',
            element: <WskazaniaPrzeciw/>
        },
        {
            path: '/zabiegi',
            element: <Zabiegi/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ],
    {
      basename: basename
    }
)

export default routes;