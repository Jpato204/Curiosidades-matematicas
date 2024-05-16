import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const NumberFact = () => {
  const [fact, setFact] = useState('');
  
  const fetchFact = async (category) => {
    let url = '';
    switch (category) {
      case 'trivia':
        url = 'http://numbersapi.com/random/trivia';
        break;
      case 'year':
        url = 'http://numbersapi.com/random/year';
        break;
      case 'date':
        url = 'http://numbersapi.com/random/date';
        break;
      case 'math':
        url = 'http://numbersapi.com/random/math';
        break;
      default:
        return;
    }
    try {
      const response = await axios.get(url);
      setFact(response.data);
    } catch (error) {
      console.error('Error fetching fact:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Trivia" onPress={() => fetchFact('trivia')} />
        <Text style={styles.fact}> </Text>
        <Button title="Year" onPress={() => fetchFact('year')} />
        <Text style={styles.fact}> </Text>
        <Button title="Date" onPress={() => fetchFact('date')} />
        <Text style={styles.fact}> </Text>
        <Button title="Math" onPress={() => fetchFact('math')} />
      </View>
      {fact !== '' && <Text style={styles.fact}>{fact}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'column',
  },
  fact: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default NumberFact;
