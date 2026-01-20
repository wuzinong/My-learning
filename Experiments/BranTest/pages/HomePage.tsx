import React, {useState} from 'react';
import {View, Image, StyleSheet, Button, Text, Error} from 'react-native';
import {WebView} from 'react-native-webview';

type NavBar = {
  path: any;
  isActive: boolean;
  name: string;
};

function HomePage(): JSX.Element {
  const ip = '10.128.20.39:1234';
  //const ip = 'https://storedevtest.test.com';
  const [navUri, setNavUrl] = useState(`${ip}/cms`);
  const [nav, setNav] = useState<NavBar[]>([
    {
      path: require(`../assets/images/globe.png`),
      name: 'cmc',
      isActive: true,
    },
    {
      path: require(`../assets/images/books.png`),
      name: 'library',
      isActive: false,
    },
    {
      path: require(`../assets/images/checklist.png`),
      name: 'checklist',
      isActive: false,
    },
    {
      path: require(`../assets/images/account.png`),
      name: 'account',
      isActive: false,
    },
  ]);

  return (
    <View style={{flex: 1}}>
      <WebView source={{uri: navUri}} style={{flex: 1}} />
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
          return (
            <View>
              <Image style={styles.img} source={item.path} />
              <Button
                title="click me"
                onPress={() => {
                  if (item.name === 'account') {
                    setNavUrl(
                      `https://idtest.test.com/sign-up?returnurl=${navUri}`,
                    );
                  } else if (item.name === 'cmc') {
                    setNavUrl(`${ip}/cmc`);
                  } else if (item.name === 'library') {
                    setNavUrl(`${ip}/library`);
                  } else if (item.name === 'checklist') {
                    setNavUrl(`${ip}/checklist`);
                  }
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {},
});

export default HomePage;
