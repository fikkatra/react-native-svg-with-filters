/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import SvgNoFilter from './user-location-dot-no-filter.svg';
import SvgFilter from './user-location-dot.svg';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>SVG without filter:</Text>
      <SvgNoFilter />
      <Text>SVG with filter:</Text>
      <SvgFilter />
    </SafeAreaView>
  );
}

export default App;
