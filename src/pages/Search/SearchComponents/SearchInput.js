import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { colors, spacing, sizes, shadow} from '../../../styles/Constants';
import Icon from 'react-native-vector-icons/FontAwesome5';


const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.search} pointerEvents="none">
          <View style={styles.search} pointerEvents="none">
            <Icon name="search" color="#777777" size={15} style={styles.icon}/>
          </View>

        </View>
        <TextInput
          style={styles.field}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
    paddingBottom: spacing.l / 1.5,
  },
  inner: {
    flexDirection: 'row',
  },
  search: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  field: {
    backgroundColor: colors.white,
    paddingLeft: spacing.xl + spacing.s,
    paddingRight: spacing.m,
    paddingVertical: spacing.m,
    borderRadius: sizes.radius,
    height: 54,
    flex: 1,
    ...shadow.light,
  },
  filter: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  icon:{
    position: 'absolute',
  },
});

export default SearchInput;