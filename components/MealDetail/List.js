import { Text, View, StyleSheet } from "react-native";

function List({ data }) {
  return (
    <>
      {data.map((dataPoint) => (
        <View key={dataPoint} style={styles.listItem1}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  listItem1: {
    borderRadious: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
