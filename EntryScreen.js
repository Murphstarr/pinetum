import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "./gql/Query";
import { Text, FlatList, Pressable } from 'react-native'

export default function EntryScreen() {
    const { data, loading } = useQuery(CONTINENT_QUERY); //execute query
  
    const ContinentItem = ({ continent }) => {
      const { name, code } = continent; //get the name of continent
  
      return (
        <Pressable>
          <Text>{name}</Text> 
        </Pressable>
      );
    };
  
    if (loading) {
      return <Text>Loading...</Text> //while loading return this
    }
  
    return (
        <FlatList
          data={data.continents}
          renderItem={({ item }) => <ContinentItem continent={item} />}
          keyExtractor={(item, index) => index}
        />
    );
  }