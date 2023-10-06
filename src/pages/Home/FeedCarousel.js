import {Text, View,  StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

const FeedCarousel = ({data}) =>{
    return (
        <ScrollView>
            {data.map((item, index) => {
                return(
                    <View>
                        <View>
                            <Image />
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

export default FeedCarousel;
