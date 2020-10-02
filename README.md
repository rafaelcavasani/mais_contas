# App MAISContas

## Desenvolvimento

Foi utilizado React native para o desenvolvimento.

Os arquivos foram divididos nas pastas:
* assets: imagens utilizadas no projeto;
* components: componentes criados para reaproveitamento e componentização;
* screens: componentes responsáveis por renderizar cada página do app;
* services: exclusivo para acesso a API;
* stacks: stacks criadas para navegação no app;

## Como Rodar

* Faça clone do código
* yarn start
* react-native run-android

## Apresentação

### Login

O app possui uma tela de login, que busca em uma api com dados mockados e não verifica autenticação.

![login](/src/assets/images/login.png?raw=false)

### Home

Página principal somente com mensagem de boas vindas ao usuário.

![home](/assets/images/home.png?raw=false)

### Transações

Página de consulta as transações do usuário.

![transacoes](/src/assets/images/transacoes.png?raw=false)

O usuário poderá filtrar se deseja visualizar todas as transações:

![todas_transacoes](/src/assets/images/tudo.png?raw=false)

Visualizar somente as entradas de valores:

![entradas](/src/assets/images/entradas.png?raw=false)

Ou a saída de valores:

![saidas](/src/assets/images/saidas.png?raw=false)
