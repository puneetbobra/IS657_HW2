import React from 'react';
import { View, StatusBar } from "react-native";

import Box from './box';
import styles from './styles';
import Row from './row';
import Column from './column';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Row>
      <Column>
        <Box> Child </Box> 
        <Box> Child </Box> 
        <Box> Child </Box> 
      </Column>
      </Row>

      <Column>
      <Row>
        <Box> Child </Box>
        <Box> Child </Box>
        <Box> Child </Box>
      </Row>
      </Column>
    </View>
  );
}

/*


/*
      <View style = {styles.boxColumn}> 
      <Text style = {styles.boxText} > Column </Text>
      </View>
      <View style = {styles.boxRow}> 
      <Text style = {styles.boxText} > Row </Text>
      </View>      
      */