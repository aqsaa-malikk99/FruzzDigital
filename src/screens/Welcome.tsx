import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProps} from '../navigation/types';
import SolidButton from '../components/SolidButton';
import OutlineButton from '../components/OutlineButton';
import {getFontFamily} from '../helpers/fontFamily';

function Welcome() {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.scaffold}>
      <ImageBackground
        source={require('../assets/images/welcome.png')}
        style={[styles.backgroundImage, {width, height}]}
      />
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.textBold, {fontFamily: getFontFamily('bold')}]}>
            Fruzz
          </Text>
          <Text
            style={[styles.textLight, {fontFamily: getFontFamily('normal')}]}>
            Digital
          </Text>
        </View>
        <SolidButton
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
        <OutlineButton
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scaffold: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 58,
    height: 58,
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontSize: 28,
    color: '#1E232C',
    fontWeight: 'bold',
  },
  textLight: {
    fontSize: 28,
    color: '#1E232C',
    fontWeight: '200',
  },
});

export default Welcome;
