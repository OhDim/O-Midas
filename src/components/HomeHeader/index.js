import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {sizes, spacing} from '../../styles/Constants';
import Icon from 'react-native-vector-icons/FontAwesome5';


const HomeHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: 15, marginBottom: 15}]}>
      <Icon name="map-marker-alt" color="#fff" size={15} style={styles.icon}/>
      
      <Text style={styles.title}>{title}</Text>
      <Icon name="bell" color="#fff" size={15} style={styles.icon} solid/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    color: "#fff"
  },
});

export default HomeHeader;