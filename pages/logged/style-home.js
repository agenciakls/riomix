import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      display: "flex",
      paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  boxContainer: {
      padding: 15
  },
  boxWelcome: {
      flexDirection: 'row',
      marginBottom: 10,
  },
      messageWelcome: {
          fontSize: 14,
          color: '#198942'
      },
      messageName: {
          paddingHorizontal: 5,
          color: '#1F265B',
          fontSize: 14
      },

  containerRecolhimento: {
      backgroundColor: '#dedede',
      borderRadius: 10,
      padding: 15,
      marginVertical: 5,
      flexDirection: 'row',
  },
      titleRecolhimento: {
          color: '#1F265B',
          fontWeight: '700'
      },
      detailRecolhimento: {
          display: 'flex',
          flexDirection: 'row',
          marginTop: 10,
      },
          valueRecolhimento: {
              width: 60,
              backgroundColor: '#efefef',
              paddingVertical: 7,
              paddingHorizontal: 10,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
          },
              valueTextRecolhimento: {
                  color: '#1F265B',
                  fontSize: 10,
              },
          nameRecolhimento: {
              width: 120,
              backgroundColor: '#198942',
              paddingVertical: 7,
              paddingHorizontal: 10,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
          },
              nameTextRecolhimento: {
                  color: '#efefef',
                  fontSize: 10,
              },
      boxIcones: {
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingLeft: 15,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
      },
          boxIconesRecolhimento: {
              flexBasis: '45%',
              backgroundColor: '#1F265B',
              margin: 3,
              padding: 5,
              borderRadius: 5,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',

          },
              imagesIcones: {
                  width: 30,
                  height: 30,
              },
              textIcons: {
                  fontSize: 6,
                  textAlign: 'center',
                  color: '#efefef',
                  paddingVertical: 3,
              },

  containerLinhas: {
      backgroundColor: '#1F265B',
      borderRadius: 10,
      padding: 15,
      marginVertical: 5,
      flexDirection: 'row',
  },
      linhasBox: {
          flexBasis: '50%'
      },
          linhasTitle: {
              color: '#efefef',
              fontSize: 18,
              fontWeight: '700',
              paddingVertical: 2,
          },
          linhasText: {
              color: '#efefef',
              fontSize: 12
          },
          buttonLinhas: {
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginVertical: 10,
              borderRadius: 3,
              backgroundColor: '#198942',
              width: 100,
              display: 'flex',
              justifyContent: 'center',
          },
              buttonLinhasTitle: {
                  textAlign: 'center',
                  color: '#efefef',
                  fontSize: 10,
              },
      linhasBoxImage: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
          linhasImage: {
              height: 93,
              width: 150,
          },
  containerNoticias: {
      backgroundColor: '#dedede',
      borderRadius: 10,
      padding: 15,
      marginVertical: 10,
  },
      titleNoticias: {
          textAlign: 'center',
          textTransform: 'uppercase',
          paddingBottom: 10,
          fontWeight: '700',
          color: '#198942',
          fontSize: 15
      },
      singleNoticias: {
          paddingVertical: 10,
          borderTopColor: '#cdcdcd',
          borderTopWidth: 1,
          flexDirection: 'row',
      },
          newsImg: {
              marginRight: 15,
          },
          newsText: {
              flex: 1,
              color: '#1F265B',
              fontWeight: '700',
              fontSize: 15,
          },
          areaButtonNoticias: {
              flex: 1,
              borderTopColor: '#cdcdcd',
              borderTopWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
          },
          buttonNoticias: {
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginVertical: 10,
              borderRadius: 3,
              backgroundColor: '#198942',
              width: 100,
              display: 'flex',
              justifyContent: 'center',
          },
              buttonNoticiasTitle: {
                  textAlign: 'center',
                  color: '#efefef',
                  fontSize: 12,
              },

  buttonsInfo: {
      flexDirection: 'row',
  },
  linkAbout: {
      flex: 1,
      backgroundColor: '#1F265B',
      padding: 15,
      marginRight: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
  },
  linkContact: {
      flex: 1,
      backgroundColor: '#198942',
      padding: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',

  },
      aboutContactIcon: {
          fontSize: 40,
          color: '#efefef',
          paddingVertical: 5,
      },
      aboutContactText: {
          color: '#efefef',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: '700',
          fontSize: 15,
          paddingVertical: 5,
      },
  

  socialsLinks: {
      marginTop: 10,
      marginBottom: 80,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  singleSocial: {
      padding: 15,
  },
  iconSocial: {
      color: '#1F265B',
      fontSize: 30,
  },
});

export default styles;