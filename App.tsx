import React from 'react';
import { StatusBar } from 'react-native';
import Route from './src/router/Route';

const App = () => {
    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
            <Route />
        </>
    );
};

export default App;
