import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Button, Card, Icon, IconButton, Text, TouchableRipple } from "react-native-paper";

export default function ExpenseItem({ expense }) {
  const [expand, setExpand] = useState(false);

  return (
    <Card style={styles.card}>
      <Pressable onPress={() => setExpand(!expand)}>
        <Card.Content style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.title}>{expense.title}</Text>
            <Text style={styles.amount}>{expense.amount}</Text>
          </View>
          <View style={styles.right}>
            {expand ? (
              <Icon source="arrow-up-drop-circle-outline" size={32} />
            ) : (
              <Icon source="arrow-down-drop-circle-outline" size={32} />
            )}
          </View>
        </Card.Content>
      </Pressable>
      {expand && (
        <Card.Actions style={styles.actions}>

            <Button onPress={() => console.log("Pressed")}> Share</Button>

          <Button>Edit</Button>
          <Button>Delete</Button>
        </Card.Actions>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: "#CFE9D9",
  },
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "lightgrey",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  left: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  right: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
