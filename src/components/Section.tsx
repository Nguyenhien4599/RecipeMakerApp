import React from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';

import { globalStyles } from '../styles/globalStyles';

interface Props {
    children: React.ReactNode;
    styles?: StyleProp<ViewStyle>;
    flex?: number;
}

const Section = ({ children, styles, flex }: Props) => (
    <View style={[globalStyles.section, { flex: flex ?? 0 }, styles]}>{children}</View>
);

export default Section;
