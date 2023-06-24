// App.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import GroceryList from './src/components/GroceryList';
import Chat from './src/components/Chat';
import LoginScreen from './src/components/LoginScreen';

const App = (): JSX.Element => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribeAuth = auth().onAuthStateChanged((authenticatedUser) => {
//       setUser(authenticatedUser);
//       setLoading(false);
//     });

//     return () => unsubscribeAuth();
//   }, []);

//   if (loading) {
//     return <View style={styles.container} />;
//   }

//   if (!user) {
//     return <LoginScreen />;
//   }

//   return (
//     <View style={styles.container}>
//       <GroceryList />
//       <Chat />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#7851a9',
//   },
// });
  return (
    <View>
      <Text>Something here</Text>
    </View>
  )
  }
export default App;