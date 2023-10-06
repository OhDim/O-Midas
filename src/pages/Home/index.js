import React from "react";
import { View, StyleSheet, Text, StatusBar, ScrollView } from "react-native"
import { Container, WhiteText } from "./styles";
import { Picker } from "@react-native-picker/picker";

export default function Home(){
    return(   
        <Container>
            <View style={{
                flexDirection: "row",
                alignItems:"center",
                justifyContent: "center",
                marginTop: 15,
            }}>
                <WhiteText>Shopping União, Mesa 7-B</WhiteText>


            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:40}}>
            <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}>
            <View style={[styles.card, shadow.dark]}>
              <FavoriteButton style={styles.favorite} />
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
            </ScrollView>
        </Container>
    )
}
