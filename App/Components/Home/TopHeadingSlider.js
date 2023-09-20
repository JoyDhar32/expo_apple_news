import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'

const TopHeadingSlider = () => {
  const [newsList, setNewsList] = React.useState([])
  useEffect(() => {
getTopHeadline();
  }, [])
  const getTopHeadline = async () => {
const result=(await GlobalApi.getTopHeadline).data
setNewsList(result.articles)
  }
  return (
    <View style={{marginTop:10}}>
    
    <FlatList horizontal={true}
    data={newsList}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>(
      <TouchableOpacity style={{width:Dimensions.get('screen').width*0.80,marginRight:5}}>
<Image style={{height:330,marginRight:10, borderRadius:5}} source={{uri:item.urlToImage}} />  
<Text numberOfLines={2} style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
<Text style={{marginTop:5,color:'blue'}}>Source: {item?.source?.name}</Text>
      </TouchableOpacity>
    )}
    />
    </View>
  )
}

export default TopHeadingSlider