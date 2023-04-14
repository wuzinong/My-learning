import React from 'react';
import {View, Text, Image} from 'react-native';
import {WebView} from 'react-native-webview';

function HomePage(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'http://10.128.200.35:1234/cmc'}}
        style={{flex: 1}}
      />
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text>AAA</Text>
        <Text>BBB</Text>
        <Text>CCC</Text>
        <Text>DDD</Text>
      </View>
    </View>
  );
}

export default HomePage;
