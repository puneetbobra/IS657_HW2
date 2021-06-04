import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import styles from "./styles";

export default function row({ children }) {
  return <View style={styles.row}>
          <View style={styles.boxRow}> 
          <Text style={styles.boxRowText}> Row </Text>
          {children}  </View>
          </View>
}

row.propTypes = {
  children: PropTypes.node.isRequired
};
