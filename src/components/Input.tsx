import React from 'react';
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import { colors } from '../constants/Colors';
import { fontFamiles } from '../constants/FontFamilies';
import { globalStyles } from '../styles/globalStyles';
import Row from './Row';

interface IProps {
    name: string;
    placeholder: string;
    value: string;
    callBack: (value: string, name: string) => void;
    keyboardType?: KeyboardTypeOptions;
    styleWrapper?: StyleProp<ViewStyle>;
    styleInput?: StyleProp<TextStyle>;
    textColor?: string;
    showAffixText?: boolean;
    textAffix?: string;
    showIconAffix?: boolean;
    iconAffix?: React.ReactElement;
    styleAffix?: StyleProp<TextStyle>;
    placeholderColor?: string;
}

const Input = ({
    callBack,
    name,
    value = '',
    placeholder,
    keyboardType = 'default',
    styleWrapper = {},
    styleInput = {},
    textColor = colors.textInput,
    showAffixText = false,
    showIconAffix = false,
    iconAffix,
    styleAffix = {},
    textAffix,
    placeholderColor = colors.textDisabled,
}: IProps) => {
    const [isFocus, setFocus] = React.useState(false);

    return (
        <Row
            style={[
                styles.container,
                globalStyles.spaceBetween,
                styleWrapper,
                isFocus && { borderBottomColor: colors.primary },
            ]}
        >
            <TextInput
                value={value}
                onChangeText={(val: string) => callBack(val, name)}
                cursorColor={colors.primary}
                keyboardType={keyboardType}
                style={[globalStyles.text, styles.input, globalStyles.container, styleInput]}
                textColor={textColor}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                numberOfLines={1}
            />
            {showAffixText && textAffix && (
                <Text style={[globalStyles.text, styles.textAffix, styleAffix]}>{textAffix}</Text>
            )}
            {showIconAffix && iconAffix && iconAffix}
        </Row>
    );
};
const styles = StyleSheet.create({
    container: {
        borderBottomColor: colors.placeholder,
        borderBottomWidth: 1,
        marginBottom: 24,
    },
    input: {
        fontFamily: fontFamiles.NotoSansKRSemiBold,
    },
    textAffix: {
        color: '#444',
    },
});

export default Input;
