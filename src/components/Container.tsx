import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyles } from '../styles/globalStyles';

interface Props {
    children: React.ReactNode;
}

const Container = ({ children }: Props) => {
    return <SafeAreaView style={[globalStyles.container]}>{children}</SafeAreaView>;
};

export default Container;
