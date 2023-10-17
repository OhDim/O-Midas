import React from "react";
import { View, StyleSheet, Text, StatusBar, ScrollView } from "react-native"
import { Container, WhiteText, Header } from "./styles";
import { Picker } from "@react-native-picker/picker";
import FeedCarousel from "./Carousel/Index";
import { RESTAURANTS, FOODS } from "../../data";
import ScreenHeader from "../../components/ScreenHeader/index.js"
import ItensList from "../../components/ItensList";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HomeHeader from '../../components/HomeHeader';


export default function Home(){
    return(   
        <Container>
            <View>
                <HomeHeader title="Shopping União, Mesa 7-B" />

            </View>

            <ScrollView showsHorizontalScrollIndicator={false}>
                <SectionHeader
                    title="Populares Nessa Semana"
                    buttonTitle="Ver Todos"
                    onPress={() => {}}
                />
                <FeedCarousel list={RESTAURANTS}/>
                <SectionHeader
                    title="Pratos Famosos"
                    buttonTitle="Ver Todos"
                    onPress={() => {}}
                />
                <ItensList list={FOODS}/>
            </ScrollView>
        </Container>
    )
}
