import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

export default function column({ children }) {
  return <View style={styles.column}>{children}</View>;
}

column.propTypes = {
  children: PropTypes.node.isRequired
};