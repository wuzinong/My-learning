/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomePage from './pages/HomePage';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => HomePage);
