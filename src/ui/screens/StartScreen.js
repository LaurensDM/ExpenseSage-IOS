import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Spacer from "../components/Spacer";
import { Surface } from "react-native-paper";
import SubTitle from "../components/SubTitle";

export default function StartScreen({ navigation }) {
  return (
    <View>
      <TopBar />
      <TopTile />
      <Spacer height={64} width={0} />
      <BottomTile navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

function TopBar(){
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap:16, padding: 16}}>
            <MaterialCommunityIcons name="bank" color="green" size={40} />
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40}}>ExpenseSage</Text>
        </View>
    );
}

function TopTile() {
  return (
    <View style={styles.topTile}>
      <Surface style={styles.surface} elevation={4}>
        <Text style={{color: 'black', fontSize: 24}}>You still have €700 left!</Text>
      </Surface>
    </View>
  );
}

function BottomTile({ navigation }) {
  return (
    <View style={{paddingHorizontal: 32}}>
      <SubTitle text="Latest Expenses" />
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    color: "white",
    backgroundColor: "#CFE9D9",
    padding: 16,
    borderRadius: 16,
    height: 256,
    width: "100%",
    marginHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  topTile: {
    marginTop: 32,
    paddingHorizontal: 32,
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});
