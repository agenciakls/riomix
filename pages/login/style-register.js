import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  boxForm: {
      width: '80%',
      marginTop: 50
  },
  titleArea: {
      fontSize: 18,
      fontWeight: '700',
      color: '#1F265B',
      textAlign: 'center',
      marginVertical: 12,

  },
  
  titleForm: {
      fontSize: 14,
      fontWeight: '700',
      color: '#198942',

  },
    
  titleFormCenter: {
      fontSize: 18,
      fontWeight: '700',
      color: '#198942',
      textAlign: 'center',
      marginBottom: 10

  },
  input: {
      marginVertical: 10,
      borderColor: '#cdcdcd',
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
  },
  textForgot: {
      color: '#1F265B',
      textAlign: 'right',
      marginVertical: 15,
      fontSize: 13,
  },
  areaCenterButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
  buttonSecundary: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#808080',
      width: 200,
      display: 'flex',
      justifyContent: 'center',
  },
      buttonSecundaryTitle: {
          textAlign: 'center',
          color: '#808080',
          fontSize: 17,
      },
  contentConta: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical: 30,
  },
      textConta: {
          color: '#808080',
          fontSize: 14,
          paddingHorizontal: 5,
      },
      textCadastre: {
          color: '#1F265B',
          fontSize: 14,
          fontWeight: '700',
          paddingHorizontal: 5,
      },
      messageErro: {
          textAlign: 'center',
          paddingVertical: 15,
          backgroundColor: '#F9D71C',
          color: '#565656'
      },
});

export default styles;