import React from 'react';
import {View, StyleSheet} from 'react-native';
import { colors } from '../../styles/Constants';
import MainHeader from '../../components/MainHeader';
import SearchInput from './SearchComponents/SearchInput';
import SearchMasonry from './SearchComponents/SearchMansory';
import Tabs from './SearchComponents/Tabs';
import { SEARCH_FOODS, SEARCH_ALL, SEARCH_RESTAURANTS} from '../../data';

const tabs = [
  {
    title: 'All',
    content: () => <SearchMasonry key="all" list={SEARCH_ALL} />,
  },
  {
    title: 'Foods',
    content: () => <SearchMasonry key="places" list={SEARCH_FOODS} />,
  },
  {
    title: 'Restaurants',
    content: () => <SearchMasonry key="hotels" list={SEARCH_RESTAURANTS}/>,
  },
];

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Search" />
      <SearchInput />
      <Tabs items={tabs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.default,
  },

});

export default SearchScreen;