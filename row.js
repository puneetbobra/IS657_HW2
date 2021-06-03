import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

export default function row({ children }) {
  return <View style={styles.row}>
          <View style={styles.boxRow}>{children} Row </View>
          </View>
}

row.propTypes = {
  children: PropTypes.node.isRequired
};
