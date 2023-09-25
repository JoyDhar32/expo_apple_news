import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';

const HeadingList = ({ newsList }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View style={{ height: 1, backgroundColor: 'midnightblue', marginTop: 10 }}></View>
            <TouchableOpacity style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}
            onPress={()=>navigation.navigate('read-news',{news:item})}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ height: 100, width: 100, borderRadius: 10 }}
              />
              <View style={{ marginRight: 130, marginLeft: 10 }}>
                <Text numberOfLines={4} style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ color: 'midnightblue' }}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default HeadingList;
