import React from 'react';
import { StyleSheet, View, Text, Button, Alert, ImageBackground, Dimensions } from 'react-native';
import FundoTela from '../../../Components/images/BackgroundLogin.jpg';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoGrande: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'blue',
    },
});

const LoginPresentation = props => {
    let {largura, altura} = Dimensions.get('screen');
    return (
        <ImageBackground source={FundoTela} style={{width: largura, resizeMode: 'contain'}}>
            <View style={estilos.container}>
                <Text style={estilos.textoGrande}>P A G I N A  1</Text>
                <Text>Testando a primeira tela</Text>
                <Button 
                    style={estilos.Button} 
                    title='Teste' 
                    color='red' 
                    onPress={() => Alert.alert('Testando botão na tela.')}
                />
            </View>
        </ImageBackground>
    );
};

export default LoginPresentation;