import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import LogoInnocenti from '../../../Components/images/LogoInnocenti.jpg';

const InnocentiPresentation = props => {
    let {largura, altura } = Dimensions.get('screen');
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Image source={LogoInnocenti} style={{width: largura, resizeMode: 'contain'}}></Image>
        </View>
    );
};

export default InnocentiPresentation;
