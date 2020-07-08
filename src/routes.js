/* eslint-disable */

import Home from './components/Home';
import Portfolio from './components/portfolio/Portfolio';
import Contactos from './components/contactos/Contactos';

export const routes = [
    { path: '/', component: Home, meta: { hideHeader: false, hideLink: false, bodyFullHeight: false } },
    { path: '/portfolio', component: Portfolio, meta: { hideHeader: true, hideLink: true, hidePortfolio: false, hideContactos: true, bodyFullHeight: true } },
    { path: '/contactos', component: Contactos, meta: { hideHeader: true, hideLink: true, hidePortfolio: true, hideContactos: false, bodyFullHeight: true } }
]