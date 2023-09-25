import { View, Text, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import style from '../Components/style/style';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import { Ionicons } from '@expo/vector-icons';
import TopHeadingSlider from '../Components/Home/TopHeadingSlider';
import HeadingList from '../Components/Home/HeadingList';
import GlobalApi from '../Services/GlobalApi';

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTopHeadline();
    getByCategory('latest');
  }, []);

  const getByCategory = async (category) => {
    setLoading(true);
    const result = (await GlobalApi.getByCategory(category)).data;
    setNewsList(result.articles);
    setLoading(false)
  }
  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    setNewsList(result.articles);
  };

  return (
    <ScrollView nestedScrollEnabled={false} style={{ backgroundColor: 'white',padding:10 }}>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',padding:10 }}>
        <Text style={style.Title}>Apple's News</Text>
        <Text> <Ionicons name="md-notifications" size={25} color="black" /></Text>
      </View>
      {/* Category List */}
      <CategoryTextSlider selectCategory={(category) => getByCategory(category)} />
      {loading ? <ActivityIndicator size="large" color="midnightblue" style={{marginTop:Dimensions.get('screen').height*0.35}}/> :
        <View>
          {/* Slider */}
          <TopHeadingSlider newsList={newsList} />

          <HeadingList newsList={newsList} />
        </View>
      }

    </ScrollView>
  );
};

export default Home;
