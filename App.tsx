// App.tsx
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Platform,   SafeAreaView, } from "react-native";
import auth from "@react-native-firebase/auth";
import GroceryList from "./src/components/GroceryList";
import Chat from "./src/components/Chat";
import LoginScreen from "./src/components/LoginScreen";

export default function App() {
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

  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        {/* <GroceryList /> */}
        {/* <Text>GroceryList</Text> */}
        {/* <Chat /> */}
        {/* <Text>Chat</Text> */}
        <LoginScreen />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {/* <GroceryList /> */}
        {/* <Text>GroceryList</Text> */}
        {/* <Chat /> */}
        {/* <Text>Chat</Text> */}
        <LoginScreen />
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7851a9",
    // justifyContent: 'center',
    alignItems: "center",
  },
});
