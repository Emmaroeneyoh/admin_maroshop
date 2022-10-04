
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel2 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from './combine'
import { createMigrate } from 'redux-persist'
import {migrations} from './migrations'



const persistConfig = {
  key: 'root',
  version: -1, //New version 0, default or previous version -1  
    storage,  
    // debug: true,  
    // stateReconciler: autoMergeLevel2,  
    // migrate: createMigrate(migrations, { debug: true })
};



const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions:[FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    
});

export default store