import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../constants/Colors';
import { fontFamiles } from '../constants/FontFamilies';
import { globalStyles } from '../styles/globalStyles';

const Input = () => {
    return (
        <TextInput
            style={[globalStyles.text, styles.input]}
            textColor={colors.textInput}
            placeholder="나이를 입력해주세요."
            underlineColor="red"
            activeUnderlineColor="red"
            right={<TextInput.Affix textStyle={[globalStyles.text, styles.textAffix]} text="세" />}
        />
    );
};
const styles = StyleSheet.create({
    input: {
        fontFamily: fontFamiles.NotoSansKRSemiBold,
        // borderBottomWidth: 1,
        // borderColor: colors.placeholder,
    },
    textAffix: {
        color: '#444',
    },
});

export default Input;
