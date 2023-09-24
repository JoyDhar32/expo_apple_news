import { View, Text, Image } from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ReadNews = () => {
    const news = useRoute().params.news;
    const navigation =useNavigation();
    useEffect(() => {
        console.log(news)
    }, [])
    return (
        <View style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
            <View style={{ marginTop: 10,marginBottom:10,display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome name="share" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: news.urlToImage }} style={{ height: 300, width: '100%', borderRadius: 10 }} />
            <Text style={{ marginTop: 10, color: 'blue', fontSize: 16 }}>{news.source.name}</Text>
            <Text style={{ color: 'midnightblue', fontSize: 20, fontWeight: 'bold' }}>{news.title}</Text>
            <Text style={{ marginTop: 10, fontSize: 18, color: '#363636', lineHeight: 25 }}>{news.description}</Text>
            <Text style={{ marginTop: 10, fontSize: 16, color: 'blue', lineHeight: 25 }}>Read More...</Text>
        </View>
    )
}

export default ReadNews