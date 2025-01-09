import React, { useEffect, useState } from 'react';
import {
    Animated,
    LayoutChangeEvent,
    ScrollView,
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
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
    styleContainer?: StyleProp<ViewStyle>;
}

const Accordion = ({ placeholder = '', items = [], value, setValue, styleContainer }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [valueState, setValueState] = useState('');
    const [contentHeight, setContentHeight] = useState(0);

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

    const onLayout = React.useCallback((event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        setContentHeight(height); // Cập nhật chiều cao thực tế của nội dung
    }, []);

    const animatedHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight], // Sử dụng chiều cao thực tế cho hiệu ứng
    });

    const handlePressItem = (text: string) => () => {
        setIsOpen(!isOpen);
        setValueState(text);
    };

    return (
        <View style={[styles.container, styleContainer]}>
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

            <Animated.View style={[styles.wrapItem, { height: animatedHeight }]}>
                {isOpen && (
                    // eslint-disable-next-line react-native/no-inline-styles
                    <ScrollView style={{ padding: 0 }} showsVerticalScrollIndicator={true}>
                        <View onLayout={onLayout}>
                            {items.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={handlePressItem(item)}
                                    style={[styles.item, index + 1 === items.length && styles.lastItem]}
                                >
                                    <Text style={[globalStyles.text, { color: colors.textInput }]}>{item}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
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
