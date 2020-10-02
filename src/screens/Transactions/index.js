import React, {useState, useEffect} from 'react';
import {Alert, TouchableHighlight} from 'react-native';
import {
  Container,
  BalanceView,
  BalanceText,
  BalanceValueText,
  BalanceDescriptionText,
  TransactionsView,
  TransactionsMenu,
  ButtonMenu,
  TransactionItems,
  TransactionTexts,
  TransactionNumbers,
  TransactionItem,
  TransactionTitle,
  TransactionDescription,
  TransactionValue,
  TransactionDate,
} from './styles';
import CustomAppbar from '../../components/CustomAppbar';
import Loading from '../../components/Loading';
import api from '../../services/api';

export default function Transactions() {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0.0);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactionAction, setTransactionAction] = useState(0);
  const activeStyle = {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  };
  const normalStyle = {
    borderBottomWidth: 0,
  };
  const positiveStyle = {
    color: '#26ac3e',
  };
  const negativeStyle = {
    color: '#bf2828',
  };

  function currencyFormat(value) {
    let result = value.toFixed(2);
    result = result.toString().replace('.', ',');
    return result;
  }

  function dateFormat(value) {
    const listDate = value.split('-');
    const result = listDate[2] + '/' + listDate[1];
    return result;
  }

  function handlerTransctionAction(action) {
    setLoading(true);
    setTransactionAction(action);
    let newFilteredTransactions;
    if (action === 0) {
      setFilteredTransactions(transactions);
    } else if (action === 1) {
      newFilteredTransactions = transactions.filter(
        (element) => element.tipoLancamento === 'C',
      );
      setFilteredTransactions(newFilteredTransactions);
    } else if (action === 2) {
      newFilteredTransactions = transactions.filter(
        (element) => element.tipoLancamento === 'D',
      );
      setFilteredTransactions(newFilteredTransactions);
    }
    setLoading(false);
  }

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const dataBalance = await api.getBalance();
        const formattedBalance = currencyFormat(dataBalance.saldo);
        setBalance(formattedBalance);

        const dataTransactions = await api.getTransactions();
        setTransactions(dataTransactions);
        setFilteredTransactions(dataTransactions);
      } catch (exception) {
        Alert.alert(
          'Erro',
          `Ocorreu um erro ao buscar as transações: ${exception.message}`,
        );
      }
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CustomAppbar title="Transações" />
          <BalanceView>
            <BalanceText>Saldo Disponível</BalanceText>
            <BalanceValueText>R$ {balance}</BalanceValueText>
            <BalanceDescriptionText>
              Esse é o valor de cashback, depósitos, pagamentos e transferências
              recebidas.
            </BalanceDescriptionText>
          </BalanceView>

          <TransactionsView>
            <TransactionsMenu>
              <TouchableHighlight
                onPress={() => handlerTransctionAction(0)}
                underlayColor="white">
                <ButtonMenu
                  style={transactionAction === 0 ? activeStyle : normalStyle}>
                  Tudo
                </ButtonMenu>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => handlerTransctionAction(1)}
                underlayColor="white">
                <ButtonMenu
                  style={transactionAction === 1 ? activeStyle : normalStyle}>
                  Entrada
                </ButtonMenu>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => handlerTransctionAction(2)}
                underlayColor="white">
                <ButtonMenu
                  style={transactionAction === 2 ? activeStyle : normalStyle}>
                  Saída
                </ButtonMenu>
              </TouchableHighlight>
            </TransactionsMenu>
            <TransactionItems>
              {filteredTransactions && filteredTransactions.length > 0 ? (
                filteredTransactions.map((element, index) => (
                  <TransactionItem key={index}>
                    <TransactionTexts>
                      <TransactionTitle>
                        {element.tipoTransacao}
                      </TransactionTitle>
                      <TransactionDescription>
                        {element.descricao}
                      </TransactionDescription>
                    </TransactionTexts>

                    <TransactionNumbers>
                      <TransactionValue
                        style={
                          element.tipoLancamento === 'C'
                            ? positiveStyle
                            : negativeStyle
                        }>
                        {currencyFormat(element.valorTransacao)}
                      </TransactionValue>
                      <TransactionDate>
                        {dateFormat(element.dataTransacao)}
                      </TransactionDate>
                    </TransactionNumbers>
                  </TransactionItem>
                ))
              ) : (
                <TransactionItem>
                  <TransactionTitle>
                    Nenhuma transação encontrada
                  </TransactionTitle>
                </TransactionItem>
              )}
            </TransactionItems>
          </TransactionsView>
        </>
      )}
    </Container>
  );
}
