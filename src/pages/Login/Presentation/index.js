import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native';
import FundoTela from '../../../Components/images/BackgroundLogin.jpg';

const estilos = StyleSheet.create({
    cabecalho: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    corpo: {
        flex: 5,
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    rodape: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    quadro: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
    },
    textoGrande: {
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#00004d',
    },
    textoBotao: {
        color: 'red',
    },
    Botao: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 10,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
    },
    Campo: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
        backgroundColor: 'white',
        margin: 5,
        paddingTop: 5,
        paddingLeft: 15,
    },
    Fundo: {
        flex: 1,
        alignContent: 'center',
        width: '100%',
        height: '60%',
    },
});

//onPress={() => Alert.alert('Testando botão na tela.')}
//<ImageBackground source={FundoTela} style={estilos.Fundo}>
//</ImageBackground>

const LoginPresentation = props => {
    //let {largura, altura} = Dimensions.get('window');
    let largura = Dimensions.get('screen').width;
    let altura = Dimensions.get('screen').height;
    return (
        <View style={{flex: 1}}>
            <View style={estilos.cabecalho}>
                <Text style={estilos.textoGrande}>Innocenti</Text>
                <Text>Entre com o seu login e senha</Text>
            </View>
            <View style={estilos.corpo}>
                <View style={estilos.quadro}>
                    <TextInput style={estilos.Campo} defaultValue='Login'/>
                    <TextInput style={estilos.Campo} defaultValue='Senha'/>
                </View>
            </View>
            <View style={estilos.rodape}>
                <TouchableOpacity style={estilos.Botao} onPress={props.onLogin}>
                    <Text style={estilos.textoBotao}>Botão da Tela</Text>
                </TouchableOpacity>
            </View>    
        </View>
    );
};

export default LoginPresentation;