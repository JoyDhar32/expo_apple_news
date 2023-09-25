import { View, Text, Image, Share, Button } from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser'

const ReadNews = () => {
    const news = useRoute().params.news;
    const navigation =useNavigation();
    useEffect(() => {
        
    }, [])
    const shareNews=()=>{
Share.share({
    message:news.title+"\n Read More..."+news.description+"\n"+news.url,
})
    }
    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1, padding: 10 }}>
            <View style={{ marginTop: 10,marginBottom:10,display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>shareNews()}>
                <FontAwesome name="share" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: news.urlToImage }} style={{ height: 300, width: '100%', borderRadius: 10 }} />
            <Text style={{ marginTop: 10, color: 'blue', fontSize: 16 }}>{news.source.name}</Text>
            <Text style={{ color: 'midnightblue', fontSize: 20, fontWeight: 'bold' }}>{news.title}</Text>
            <Text style={{ marginTop: 10, fontSize: 18, color: '#363636', lineHeight: 25,marginBottom:20 }}>{news.description}</Text>
            <Button style={{ marginTop: 20, fontSize: 16, color: 'blue', lineHeight: 25 }} title="Read More" 
            onPress={() => WebBrowser.openBrowserAsync(news.url)}></Button>
        </ScrollView>
    )
}

export default ReadNews