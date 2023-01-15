import {useQuery} from '@apollo/client';
import {CONTINENT_QUERY} from './gql/Query';
import {Text, FlatList, Pressable, View, Button} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import React, {useState, useEffect} from 'react';
import {readGenus, getSpecies, getVariation} from './readData.js';

export default function EntryScreen() {
  const [selected, setSelected] = useState('');
  const [species, setSpecies] = useState('');
  const [variation, setVariation] = useState('');
  const data = readGenus();
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    console.log('genus changed');
    setData2(getSpecies(selected))
  }, [selected]);
  useEffect(() => {
    console.log('species changed');
    setData3(getVariation(species))
  }, [species]);

  return (
    <View>
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        placeholder="Select Genus"
      />

      <SelectList
        setSelected={setSpecies}
        setSpecies={val => setSpecies(val)}
        data={data2}
        save="value"
        placeholder="Select Genus"
      />

      <SelectList
        setSelected={setVariation}
        setVariation={val => setVariation(val)}
        data={data3}
        save="value"
        placeholder="Select Genus"
      />
      <Button
        onPress={() =>
          console.log(selected + '--' + species + '--' + variation)
        }
        title="Submit"
        color="#FFFFF"
      />
    </View>
  );
}
