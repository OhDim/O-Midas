import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native"

import { Container, WhiteText } from "./styles";

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
        </Container>
    )
}
