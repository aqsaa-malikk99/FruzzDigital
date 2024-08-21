import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getFontFamily} from '../helpers/fontFamily';
import {Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Or use any other icon library

function MainScreen() {
  return (
    <View style={styles.scaffold}>
      <View style={styles.column}>
        <View style={styles.row1}>
          <Text style={[styles.titleText, {fontFamily: getFontFamily('bold')}]}>
            Find your favorite plants
          </Text>
          <View style={styles.buttonBackground}>
            <View style={styles.buttonForeGround}>
              <TouchableOpacity>
                <Icon name={'search'} size={44} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.columnText}>
            <Text
              style={[styles.percentOFF, {fontFamily: getFontFamily('bold')}]}>
              30% OFF
            </Text>
            <Text style={[styles.dates, {fontFamily: getFontFamily('normal')}]}>
              02-23 July
            </Text>
          </View>
          <Image source={require('../assets/images/plants.png')} />
        </View>
        <View style={styles.row3}>
          <Text style={styles.sectionText}>Plants</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scaffold: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  column: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  row1: {
    flexDirection: 'row',
  },
  titleText: {
    color: '#221F1F',
    fontSize: 32,
    flex: 1,
  },
  buttonBackground: {
    backgroundColor: '#EDEEF3',
    borderRadius: 22,
    padding: 5,
    margin: 5,
  },
  buttonForeGround: {
    backgroundColor: '#ffffff',
    padding: 5,
    margin: 5,
    borderRadius: 22,
  },
  row2: {
    backgroundColor: '#D1EAC0',
    padding: 5,
    marginVertical: 15,
    borderRadius: 22,
    flexDirection: 'row',
  },
  columnText: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
  },
  percentOFF: {
    color: '#221F1F',
    fontSize: 25,
  },
  dates: {
    color: '#221F1F',
    fontSize: 25,
  },
  row3: {
    margin: 10,
  },
  sectionText: {
    color: '#000000',
    fontSize: 18,
  },
});
export default MainScreen;
