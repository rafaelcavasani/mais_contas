import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #f2f2f2;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 120px;
`;

export const BalanceView = styled.View`
  width: 70%;
`;

export const BalanceText = styled.Text`
  text-align: center;
  margin-left: -32px;
  color: #2b715a;
  font-size: 16px;
`;

export const BalanceValueText = styled.Text`
  text-align: center;
  font-size: 38px;
  font-weight: bold;
`;
export const BalanceDescriptionText = styled.Text`
  text-align: center;
  margin-top: 20px;
`;

export const TransactionsView = styled.View`
  width: 90%;
  margin-top: 30px;
`;

export const TransactionsMenu = styled.View`
  background-color: #00a884;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonMenu = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const TransactionItems = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

export const TransactionItem = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
export const TransactionIcon = styled.View``;
export const TransactionTexts = styled.View``;
export const TransactionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const TransactionDescription = styled.Text`
  font-size: 13px;
`;
export const TransactionNumbers = styled.View``;
export const TransactionValue = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const TransactionDate = styled.Text`
  font-size: 13px;
`;
