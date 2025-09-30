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
import Rootstack from './navigation/Rootstack';
const query = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={query}>
      <NavigationContainer>
        <Rootstack />
      </NavigationContainer>
    </QueryClientProvider>
  
  );
};

export default App;
