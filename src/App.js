import React, {useState, useEffect, useRef} from 'react';
import {
  YellowBox,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { enableScreens } from "react-native-screens"
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import { SafeAreaProvider, initialWindowSafeAreaInsets } from "react-native-safe-area-context"

import {store, persistor} from './redux/store/store';
import {getActiveRouteName} from './services/navigationService';
import {RootNavigator} from './navigation';

enableScreens();

YellowBox.ignoreWarnings([
  "componentWillMount is deprecated",
  "componentWillReceiveProps is deprecated",
  "Require cycle:",
])

function App() {
  const [initializing, setInitializing] = useState(true);
  const [initialRoute, setInitialRoute] = useState('');

  let routeNameRef = useRef();
  let navigationRef = useRef();
  const onNavigationStateChange = state => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);
    //const currentRouteName = navigationRef.current.getCurrentRoute().name;

    if (previousRouteName !== currentRouteName) {
      // track screens.
      __DEV__ && console.log('currentRouteName', currentRouteName, state);
    }

    // Save the current route name for later comparision
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    // storage.save(NAVIGATION_PERSISTENCE_KEY, state);
  }

  const setNavRef = (ref) => {
    console.log('setNavRef', ref);
    navigationRef = ref;
  }

  async function authChanged (){
    if (initializing)
    setTimeout(() => {
      setInitializing(false);
    }, 3000);
  }
  
  useEffect(() => {
    authChanged();
  }, []);

  if (initializing)
  return(
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.splashWrapper}>
          <Text style={styles.sectionTitle}>Welcome to engineer.ai</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        <RootNavigator
          setNavRef={setNavRef}
          onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
          onStateChange={onNavigationStateChange}
        />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  splashWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: Colors.white
  },
  logoImage:{
    height:'100%',
    width: '80%',
    resizeMode: 'contain'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  }
});

export default App;