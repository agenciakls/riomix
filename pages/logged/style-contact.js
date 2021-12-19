import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#ffffff',
      flex: 1,
      display: "flex",
      paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
      boxContainer: {
          padding: 15
      },
  aboutVideo: {
      flex: 1,
      height: 220,
  },
  titlePage: {
      fontSize: 16,
      textTransform: 'uppercase',
      fontWeight: '700',
      color: '#198942',
      marginBottom: 10,
  },
  titleSection: {
      fontSize: 18,
      color: '#1F265B',
      marginBottom: 10,
  },
  iconContact: {
      fontSize: 20
  },
  infoContact: {
      fontSize: 16,
      marginLeft: 15,
      color: '#198942',
  },
  textContact: {
      fontSize: 16,
      marginLeft: 15,
      color: '#808080',
  },
  input: {
      marginVertical: 10,
      borderColor: '#cdcdcd',
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
  },
  textarea: {
      marginVertical: 10,
      borderColor: '#cdcdcd',
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      height: 250,
      display: 'flex',
      alignItems: 'flex-start',
      flex: 1,
      textAlignVertical: 'top',
  },
  textForgot: {
      color: '#1F265B',
      textAlign: 'right',
      marginVertical: 15,
      fontSize: 13,
  },
  areaCenterButton: {
      display: 'flex',
  },
  buttonMain: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      backgroundColor: '#1F265B',
      borderRadius: 7,
      width: 200,
      display: 'flex',
      justifyContent: 'center',
  },
      buttonMainTitle: {
          textAlign: 'center',
          color: '#efefef',
          fontSize: 17,
      },
      
});
export default styles;