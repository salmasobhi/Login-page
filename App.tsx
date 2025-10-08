// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import Rootstack from './navigation/Rootstack';

// const App = () => {
//   return (
//     <NavigationContainer>
//     <Rootstack />
//     </NavigationContainer>
//   );
// };

// export default App;
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { I18nManager } from 'react-native';
import Toast from 'react-native-toast-message';
import Rootstack from './navigation/Rootstack';
import './ReactotronConfig';

const query = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={query}>
      <NavigationContainer  key={I18nManager.isRTL ? "ar" : "en"}>
        <Rootstack />
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  
  );
};

export default App;

