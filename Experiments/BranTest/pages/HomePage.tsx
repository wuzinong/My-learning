import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

type NavBar = {
  path: any;
  isActive: boolean;
};

function HomePage(): JSX.Element {
  const [nav, setNav] = useState<NavBar[]>([
    {path: require(`../assets/images/globe.png`), isActive: true},
    {path: require(`../assets/images/books.png`), isActive: false},
    {path: require(`../assets/images/checklist.png`), isActive: false},
    {path: require(`../assets/images/account.png`), isActive: false},
  ]);
  const ip = '10.128.209.210';
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: `${ip}:1234/cmc`}} style={{flex: 1}} />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 20,
          paddingTop: 15,
          paddingBottom: 15,
        }}>
        {nav.map(item => {
          const source = `../assets/images/${item.path}.png`;
          console.log('source ', source);
          return <Image style={styles.img} source={item.path} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {},
});

export default HomePage;
