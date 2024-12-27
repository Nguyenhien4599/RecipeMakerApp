import React from 'react';
import { View } from 'react-native';

type Props = {
    width?: number;
    height?: number;
};
const Space = ({ width, height }: Props) => <View style={{ width, height }} />;
export default Space;
