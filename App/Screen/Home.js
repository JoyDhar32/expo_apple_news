import { View, Text } from 'react-native'
import React from 'react'
import style from '../Components/style/style'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import { Ionicons } from '@expo/vector-icons';
import TopHeadingSlider from '../Components/Home/TopHeadingSlider';
const Home = () => {
  return (
    <View style={{ padding: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={style.Title}>Apple's News</Text>
        <Text> <Ionicons name="md-notifications" size={25} color="black" /></Text>
      </View>
      {/* Category List */}
      <CategoryTextSlider />

      {/* Slider */}
      <TopHeadingSlider />
    </View>
  )
}

export default Home