import React from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Route from './src/router/Route';

const App = () => {
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />
            <Route />
        </>
    );
};

export default App;
