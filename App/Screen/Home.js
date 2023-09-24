import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import style from '../Components/style/style';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import { Ionicons } from '@expo/vector-icons';
import TopHeadingSlider from '../Components/Home/TopHeadingSlider';
import HeadingList from '../Components/Home/HeadingList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    setNewsList(result.articles);
  };

  return (
    <ScrollView nestedScrollEnabled={false} style={{backgroundColor:'white'}}> 
      <View style={{ padding: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={style.Title}>Apple's News</Text>
          <Text> <Ionicons name="md-notifications" size={25} color="black" /></Text>
        </View>
        {/* Category List */}
        <CategoryTextSlider />

        {/* Slider */}
        <TopHeadingSlider newsList={newsList} />

        <HeadingList newsList={newsList} />
      </View>
    </ScrollView>
  );
};

export default Home;
