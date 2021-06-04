import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

export default function column({ children }) {
  return <View style={styles.column}>          
          <View style={styles.boxColumn}>
          <Text style={styles.boxColumnText}>Column</Text>
            {children} </View>            
          </View>  
  ;
}

column.propTypes = {
  children: PropTypes.node.isRequired
};
