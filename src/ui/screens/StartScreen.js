import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import Spacer from "../components/Spacer";

export default function StartScreen({ navigation }) {

    return (
        <View >
        <TopTile />
        <Spacer height={256} width={0} />
        <BottomTile navigation={navigation}/>
        <StatusBar style="auto" />
        </View>
    );
    }

    function TopTile() {
        return (
            <View >
                <Text>Top Tile</Text>
            </View>
        );
    }

    function BottomTile({ navigation}) {
        return (
            <View >
                <Button title="Start" onPress={() => navigation.navigate('Settings')}/>
            </View>
        );
    }