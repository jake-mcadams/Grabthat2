import { StyleSheet } from 'react-native';

const WebStyles = StyleSheet.create({

    container:{
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      width: '75%',
      alignItems:'center'
    },

    input: {
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
      width:'25%'
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        width:'12%'
      },


  });

const MobileStyles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        maxWidth:'100%'
      },
      input: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      },
      button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
      },
  
})

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
        textAlign: 'center',
      },
      logo: {
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
        textAlign: 'center',
      },
      social_text: {
        color:'black'
      },
      
    buttonText: {
        color: '#7851a9',
        fontSize: 16,
        fontWeight: 'bold',
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
})

export {WebStyles, MobileStyles, styles}