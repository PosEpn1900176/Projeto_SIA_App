import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//--> Carramento do componentes de página.
import { Inicial, Menu, Pagina1 } from '../../pages';
//import Inicial from '../../pages/Inicial/index';
//import Menu from '../../pages/Menu/index';
//import Pagina1 from '../../pages/Pagina1/index';

//--> Cria as rotas de navegação para as páginas do aplicativo.
const AppStackNavigator = createStackNavigator({
    PaginaHome: Inicial,
    PaginaMenu: Menu,
    PaginaPagina1: Pagina1 
});

//--> Define os grupos de rotas estáticas para serem usadas dependendo das chamadas das telas.
const AppSwithNavigator = createSwitchNavigator(
    {
        App: AppStackNavigator,
    },
    {
        initialRouteName: 'App'
    }
);

const Routes = createAppContainer(AppSwithNavigator);

export { Routes };