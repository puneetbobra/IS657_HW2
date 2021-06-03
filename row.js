import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

export default function row({ children }) {
  return <View style={styles.row}>{children}</View>;
}

row.propTypes = {
  children: PropTypes.node.isRequired
};
