'use strict';


import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer  } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const logger = store => next => action => {
	if(typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let middlewares = [
	logger,
	thunk
];
const persistConfig = {
	key: 'root',
	storage,
 }

 const persistedReducer = persistReducer(persistConfig, reducers)


let createAppStore = applyMiddleware(...middlewares)(createStore);


export default function configureStore(onComplete){
	// const store = autoRehydrate()(createAppStore)(reducers);
	let store = createStore(persistedReducer)
	let opt = {
		storage: AsyncStorage,
		transform: [],
		//whitelist: ['userStore'],
	};
	
	return {
		store,
		"persistor":persistStore(store, [opt, onComplete])
	}

}

// export default () => {
// 	let store = createStore(persistedReducer)
// 	let persistor = persistStore(store)
// 	return { store, persistor }
//   }

