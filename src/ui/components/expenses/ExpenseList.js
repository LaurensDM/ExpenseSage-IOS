import { FlatList, View } from "react-native";
import ExpenseItem from "./ExpenseItem";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExpenseList({ expenses }) {
  return (

      <FlatList
      data={expenses}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        keyExtractor={(item) => item.id}/>

  );
}
