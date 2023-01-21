import {Text, FlatList, Pressable, View, Button, StyleSheet, TouchableOpacity} from 'react-native';


export default function HomeScreen() {
    return (
        <TouchableOpacity style={styles.button}>
        <Text style={styles.label}>Add Tree</Text>
      </TouchableOpacity>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#FF0000',
        padding: 25,
        paddingLeft: 50,
        paddingRight: 50
        
      },
      label:{
        color: '#FFFFFF',
        fontWeight: 'bold'
      }
    });
    