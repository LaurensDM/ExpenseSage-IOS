import {Text, View} from 'react-native';
import ExpenseItem from '../components/expenses/ExpenseItem';
import {ActivityIndicator} from 'react-native-paper';
import {useEffect, useState} from 'react';
import ExpenseList from '../components/expenses/ExpenseList';

export default function ExpenseScreen({navigation}) {
  const [expenses, setExpenses] = useState({list: [], loading: true});

  useEffect(() => {
    setTimeout(() => {
      setExpenses({
        list: [
          {id: 1, title: 'First expense', date: '2022-01-18', amount: 20.5},
        ],
        loading: false,
      });
    }, 2000);
  }, []);
  return (
    <View>
      {expenses.loading ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator
            animating={expenses.loading}
            size="large"
            hidesWhenStopped={true}
            color="green"
          />
        </View>
      ) : (
        <ExpenseList expenses={expenses.list} />
      )}
    </View>
  );
}
