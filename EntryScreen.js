import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "./gql/Query";
import { Text, FlatList, Pressable, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import React, { useState, useEffect } from 'react';
import { readGenus, getSpecies, getVariation } from './readData.js'
export default function EntryScreen() {

  const [selected, setSelected] = React.useState("");
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]

  return(
    
      <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
          placeholder="Select Genus"
      />

    
    
  )
}