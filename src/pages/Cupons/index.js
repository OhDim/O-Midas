import React from 'react';
import { colors, shadow, sizes, spacing } from '../../styles/Constants';
import MainHeader from '../../components/MainHeader';
import ItensList from "../../components/ItensList";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Cupom from '../../assets/Images/Icon/DarkCupons.jpg'

import { MyCupons } from '../../data/cupons';


const CARD_WIDTH = sizes.width - 48;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

export default function Cupons(){
    return (
        <View style={styles.container}>
          <MainHeader title="Cupons" />
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              paddingBottom: 15,
              paddingTop: 15
            }}>
            <View style={[styles.card, shadow.dark]}>
              {/* <FavoriteButton style={styles.favorite} /> */}
              <View style={styles.imageBox}>
                <Image source={Cupom} style={styles.image} />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>Cupons de Desconto</Text>
                <Text style={styles.location}>Utilize para aproveitar ainda mais produtos.</Text>
              </View>
            </View>
          </TouchableOpacity>
          <ItensList list={MyCupons}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.default,
    },
      card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
      },
      favorite: {
        position: 'absolute',
        top: spacing.m,
        right: spacing.m,
        zIndex: 1,
      },
      imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
        
      },
      image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
        
      },
      titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16,
      },
      title: {
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.white,
      },
      location: {
        fontSize: sizes.h3,
        color: colors.white,
      },
});