import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MenuPresentation = props => {
    return (
        <ScrollView>
            <View>
                <Text>Testando o retorno da tela</Text>
                <TouchableOpacity onPress={props.tela1}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MenuPresentation;