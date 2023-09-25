import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
const CategoryTextSlider = ({selectCategory}) => {
  const [active, setActive] = React.useState(1)
  const categoryList = [
    {
      id: 1,
      name: 'Latest'
    },
    {
      id: 2,
      name: 'World'
    },
    {
      id: 3,
      name: 'Business'
    },
    {
      id: 4,
      name: 'Sports'
    },
    {
      id: 5,
      name: 'LifeStyle'
    },
    {
      id: 6,
      name: 'Science'
    },
    {
      id: 7,
      name: 'Entertainment'
    },
    {
      id: 8,
      name: 'Podcast'
    },
    {
      id: 9,
      name: 'Live'
    }

  ]
  const onCategoryClick = (id) => {
    setActive(id)
  }
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList horizontal={true}
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>{onCategoryClick(item.id);selectCategory(item.name)}} >
            <Text style={
            item.id==active? styles.selectedText :  styles.unselectedText
              }>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  unselectedText: {
    marginRight: 15, fontSize: 20, fontWeight: 'bold',color:'rgba(0,0,0,0.7)'
  }
  ,
  selectedText: {
    marginRight: 15, fontSize: 20, fontWeight: 'bold', color:'green'
  }
})
export default CategoryTextSlider