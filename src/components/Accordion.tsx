import React, { useEffect, useState } from 'react';
import { Animated, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

import { colors } from '../constants/Colors';
import { globalStyles } from '../styles/globalStyles';
import Row from './Row';
import IconArrowDown from './svg/IconArrowDown';

interface IProps {
    placeholder: string;
    items: string[];
    value: string;
    setValue(value: string): void;
}

const Accordion = ({ placeholder = '', items = [], value, setValue }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [valueState, setValueState] = useState('');

    useEffect(() => {
        Animated.timing(animation, {
            toValue: isOpen ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start(() => {
            if (!isOpen) setValue(valueState);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const contentHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 120],
    });

    const handlePressItem = (text: string) => () => {
        setIsOpen(!isOpen);
        setValueState(text);
        // setValue(text);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.wrapText}>
                <Row style={[globalStyles.spaceBetween]}>
                    <Text
                        style={[
                            globalStyles.text,
                            globalStyles.container,
                            { color: !value ? colors.textDisabled : colors.textInput },
                        ]}
                    >
                        {value || placeholder}
                    </Text>
                    <IconArrowDown />
                </Row>
            </TouchableOpacity>

            <Animated.View style={[styles.wrapItem, { height: contentHeight }]}>
                {isOpen && (
                    <ScrollView style={{ padding: 0 }}>
                        {items.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={handlePressItem(item)}
                                style={[styles.item, index + 1 === items.length && styles.lastItem]}
                            >
                                <Text style={[globalStyles.text, { color: colors.textInput }]}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    wrapText: {
        padding: 8,
        borderBottomColor: colors.placeholder,
        borderBottomWidth: 1,
    },
    wrapItem: {
        backgroundColor: '#FAFAFA',
        overflow: 'hidden',
    },
    item: {
        paddingHorizontal: 8,
        paddingTop: 16,
    },
    lastItem: {
        paddingBottom: 16,
    },
});

export default Accordion;
