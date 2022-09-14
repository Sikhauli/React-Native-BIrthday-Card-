import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}> Happy Birthday </Text>
    <Text style={styles.text1}> Sikhauli </Text>
    <Text style={styles.text2}> Cheers To Your Years And To Many More </Text>

      <ImageBackground style= { styles.backgroundImage } source={ require('./img/bg.jpeg')}      />
          <View style={styles.anotherContainer}>
                    <ImageBackground style= { styles.backgroundImage2 } source={ require('./img/img.jpg')}      />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#cc00ff'
  },
  anotherContainer: {

    height: '90%',
    width: '65%',
    backgroundColor: 'transparent',
    marginLeft: '29%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',

  },
  backgroundImage : {

     position: 'absolute',
     top: 0,
     left: 0,
     bottom: 0,
     right: 0,
     opacity: 0.4,

  },

  backgroundImage2 : {

       height: 400,
       width: 850,
       fontSize: 45,
       position: 'absolute',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,
       opacity: 0.6,

    },


  text : {

       marginTop: '36%',
       marginLeft: '50%',
       color: '#ccc000',
       position: 'absolute',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,
       opacity: 0.6,
       fontSize: 35,
       fontWeight: 'bold',

    },


  text1 : {

       marginTop: '40%',
       marginLeft: '55%',
       color: '#ccc000',
       position: 'absolute',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,
       opacity: 0.6,
       fontSize: 35,
       fontStyle: 'italic',


    },


  text2 : {
       marginTop: '44%',
       marginLeft: '37%',
       color: '#ccc000',
       position: 'absolute',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,
       opacity: 0.6,
       fontSize: 35,
       fontWeight: 'bold'

    }



});
