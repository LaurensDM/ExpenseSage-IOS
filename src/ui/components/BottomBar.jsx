import {Button} from 'react-native';

export default function BottomBar({navigator}) {
  return (
    <View style={styles.navbar}>
      <Button title="Start" onPress={onNavigate()} />
      <Button title="Expense" onPress={onNavigate()} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FF006C4C',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
