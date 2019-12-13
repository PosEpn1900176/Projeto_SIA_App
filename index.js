/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//import App from './src/pages/App';
//import {index as Inicio} from './src/pages/Inicial/index';
import { Routes } from './src/Components/Routes';

const App = () => <Routes />

AppRegistry.registerComponent(appName, () => App);
