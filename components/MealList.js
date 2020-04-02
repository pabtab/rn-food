import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import MealItem from './MealItem'

const MealList = (props) => {

  const renderMealItem = (itemData) => {
    console.log(itemData)
    return (
      <MealItem 
        onSelectMeal={() => {
          props.navigation.navigate({ routeName: 'MealDetail', params: {
            mealId: itemData.item.id
          }})
        }}
        duration={itemData.item.duration}
        title={itemData.item.title}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList 
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})
