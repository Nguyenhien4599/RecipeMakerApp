import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import { globalStyles } from '../styles/globalStyles';

interface Props {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Row = ({ children, style }: Props) => {
    return <View style={[globalStyles.row, style]}>{children}</View>;
};

export default Row;
