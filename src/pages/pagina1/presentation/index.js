import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoGrande: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'blue',
    },
});

const Pagina1Presentation = () => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.textoGrande}>P A G I N A  1</Text>
            <Text>Testando a primeira tela</Text>
            <Button style={estilos.Button} title='Teste' color='red' onPress={() => Alert.alert('Testando botão na tela.')}></Button>
        </View>
    );
}

export default Pagina1Presentation;