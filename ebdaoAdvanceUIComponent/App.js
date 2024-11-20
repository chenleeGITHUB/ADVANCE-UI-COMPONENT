import React from 'react';
import { SafeAreaView } from 'react-native';
import CustomButton from './CustomButton';
import withLogging from './withLogging';
import FadeInComponent from './FadeInComponent';
import ReanimatedComponent from './ReanimatedComponent';

// Enhance the CustomButton with logging
const EnhancedButton = withLogging(CustomButton);

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <EnhancedButton title="Click Me" onPress={() => console.log('Button Pressed!')} />
      <FadeInComponent />
      <ReanimatedComponent />
    </SafeAreaView>
  );
};

export default App;