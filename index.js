/**
 * @format
 * git push -f --set-upstream SiaApp  master
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//import App from './src/pages/Inicial/Container/index';
//import App from './src/pages/Innocenti/Container/index';
//import App from './src/pages/Login/Container/index';

import App from './src/Components/Routes/index';

AppRegistry.registerComponent(appName, () => App);
