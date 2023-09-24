import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'

const TopHeadingSlider = ({newsList}) => {
 const navigation = useNavigation();
  return (
    <View style={{ marginTop: 10 }}>

      <FlatList horizontal={true}
        data={newsList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ width: Dimensions.get('screen').width * 0.80, marginRight: 5 }} onPress={()=>navigation.navigate('read-news',{news:item})}>
            <Image style={{ height: 330, marginRight: 10, borderRadius: 5 }} source={{ uri: item.urlToImage }} />
            <Text numberOfLines={2} style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ marginTop: 5, color: 'blue' }}>Source: {item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default TopHeadingSlider