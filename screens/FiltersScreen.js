import React, {useState} from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import Colors from '../constants/Color'

const FilterSwitch = props => (
  <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch 
      trackColor={{true: Colors.primaryColor}}
      thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
      value={props.state} 
      onValueChange={props.onChange} />
  </View>
)


const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setisLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / restriction</Text>
      <FilterSwitch 
        label="Gluten-free" 
        state={isGlutenFree} 
        onChange={newValue => setIsGlutenFree(newValue)}
      />

      <FilterSwitch 
        label="Lactose-free" 
        state={isLactoseFree} 
        onChange={newValue => setisLactoseFree(newValue)}
      />

      <FilterSwitch 
        label="Vegan" 
        state={isVegan} 
        onChange={newValue => setIsVegan(newValue)}
      />

      <FilterSwitch 
        label="Vegetarian" 
        state={isVegetarian} 
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    margin: 20,
    fontFamily: 'open-sans-bold',
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
})

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() =>{
        navData.navigation.toggleDrawer()
      }} />
    </HeaderButtons>
  }
}

export default FilterScreen
