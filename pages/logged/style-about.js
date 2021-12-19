

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
      textAlign: 'center'
  },
  imgAbout: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 15,
  },
  aboutParagraph: {
      paddingVertical: 5,
      textAlign: 'justify',
      fontSize: 16,
      color: '#565656'
  },
  aboutParagraphStrong: {
      paddingVertical: 5,
      textAlign: 'justify',
      fontSize: 16,
      color: '#565656',
      fontWeight: '700'
  }
  

});

export default styles;