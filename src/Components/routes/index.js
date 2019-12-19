import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//--> Carramento do componentes de página.
import { Innocenti, Login } from '../../pages';
//import Innocenti from '../../pages/Innocenti/Container';
//import Login from '../../pages/Login/Container';
//import Pagina1 from '../../pages/Pagina1/index';

const AppStackNavigator = createStackNavigator({
    PagInnocenti: {
        screen: Innocenti,
    },
    PagLogin: {
        screen: Login,
    },
}, {
    initialRouteName: 'PagLogin',
});

const Routes = createAppContainer(AppStackNavigator);

export default class App extends Component {
    render() {
        return <Routes />
    }
}


/*
//--> Cria as rotas de navegação para as páginas do aplicativo.
const AppNavegacaoPrincipal = createStackNavigator({
    PaginaHome: {
        screen: Inicial,
    },
    PaginaMenu: {
        screen: Menu,
    },
    PaginaPag1: {
        screen: Pagina1,
    },
});

//--> Define os grupos de rotas estáticas para serem usadas dependendo das chamadas das telas.
const AppSwithNavigator = createSwitchNavigator({
    App: AppNavegacaoPrincipal,
    }, {
    initialRouteName: 'App'
});

const Rotas = createAppContainer(AppSwithNavigator);
*/