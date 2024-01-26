import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Host} from 'react-native-portalize';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigation} from './src/routes/AppNavigation';
import {MainSafeAreaView} from './src/styles/MainSafeArea';

const queryClient = new QueryClient();
const navigationRef = createNavigationContainerRef<any>();

function App(): JSX.Element {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{flex: 1}}>
          <SafeAreaProvider>
            <MainSafeAreaView mode="padding" edges={['top']}>
              <NavigationContainer ref={navigationRef}>
                <Host>
                  <AppNavigation />
                </Host>
              </NavigationContainer>
            </MainSafeAreaView>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </PaperProvider>
  );
}

export default App;
