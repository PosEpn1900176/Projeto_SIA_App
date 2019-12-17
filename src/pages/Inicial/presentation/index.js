/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Header, LearnMoreLinks, DebugInstructions, ReloadInstructions, } from 'react-native';

const Padrao = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  Fundo: {
    backgroundColor: 'grey',
  },
  Botao: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    paddingTop: 10,
    height: 60,
    borderStyle: 'solid',
    borderColor: 'blue',
    color: 'blue',
    backgroundColor: 'powderblue',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  Secao: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: 'powderblue',
  },
  Texto: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'darkred',
  },
});

const AppPresentation = props => {
  return (
    <View style={Padrao.Container}>
      <TouchableOpacity style={Padrao.Botao} onPress={props.TelaNova}>
        <Text style={Padrao.Texto}>Menu Inicial</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppPresentation;


//const App: () => React$Node = () => {
/*
const AppPresentation = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}> - See Your Changes - </Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}> - Debug - </Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}> - Learn More - </Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
           
            <TouchableOpacity style={styles.containerButton} onPress={props.TelaNova}>
              <Text style={styles.sectionTitle}>Menu Inicial</Text>
            </TouchableOpacity>

            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'grey',
  },
  containerButton: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    paddingTop: 10,
    height: 60,
    borderStyle: 'solid',
    borderColor: 'blue',
    color: 'blue',
    backgroundColor: 'powderblue',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  sectionContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: 'powderblue',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'darkred',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
*/