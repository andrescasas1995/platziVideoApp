import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';

import { DrawerItems } from 'react-navigation';

function Drawer(props) {
  return (
    <ScrollView>
      <SafeAreaView>
        <Image
          source={require('../../../assest/angelic.png')}
          style={styles.logo}
        />
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 10,
  }
})

export default Drawer
