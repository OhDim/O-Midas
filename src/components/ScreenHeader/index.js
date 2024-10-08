import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {sizes, spacing} from '../../styles/Constants';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainTitle}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
  },
  mainTitle: {
    fontSize: sizes.title,
    fontWeight: 'bold',
    color: '#fff',
  },
  secondTitle: {
    fontSize: sizes.title,
  },

});

export default ScreenHeader;