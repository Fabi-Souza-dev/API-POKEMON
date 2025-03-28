# Pokémon Search App

Este é um aplicativo web simples para buscar informações de Pokémon usando a API PokeAPI.

## Visão Geral

O aplicativo permite que os usuários pesquisem informações sobre Pokémon por nome. Ele exibe detalhes como imagem, ID, tipo e habilidades do Pokémon.

## Arquivos do Projeto

-   `index.js`: Servidor Express.js que lida com as rotas para buscar informações do Pokémon.
-   `public/index.html`: A página HTML principal com a interface de pesquisa.
-   `public/styles.css`: Folha de estilo CSS para a interface do usuário.
-   `public/script.js`: Código JavaScript para interagir com a API e atualizar a interface do usuário.
-   `public/pokemon.jpg`: imagem de fundo da pagina
-   `package.json`: Arquivo de configuração do Node.js que lista as dependências do projeto.
-   `package-lock.json`: Arquivo de bloqueio para gerenciar dependências do npm.

## Dependências

-   `express`: Framework web para Node.js.
-   `node-fetch`: Biblioteca para fazer requisições HTTP.

## Como Executar

1.  **Clone o repositório:**

    ```bash
    git clone <seu_repositorio_url>
    cd <nome_do_repositorio>
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute o servidor:**

    ```bash
    node index.js
    ```

4.  **Abra o navegador:**

    Acesse `http://localhost:3000` no seu navegador.

## Funcionalidades

-   **Pesquisa de Pokémon:** Insira o nome de um Pokémon no campo de entrada e clique em "Buscar" para exibir suas informações.
-   **Exibição de Informações:** O aplicativo exibe a imagem, ID, tipo e habilidades do Pokémon pesquisado.
-   **Tratamento de Erros:** Exibe mensagens de erro se o Pokémon não for encontrado ou se ocorrer um erro ao buscar os dados.

## Rotas da API

-   `/`: Exibe a página principal (`index.html`).
-   `/pokemon/:name`: Busca informações de um Pokémon pelo nome.

## Estrutura do Código

### `index.js`

-   Configura um servidor Express.js.
-   Serve arquivos estáticos da pasta `public`.
-   Define uma rota para a página principal.
-   Define uma rota para buscar informações de Pokémon usando a PokeAPI.
-   Lida com erros e retorna respostas JSON apropriadas.

### `public/index.html`

-   Contém a estrutura HTML para a interface de pesquisa.
-   Inclui campos de entrada para o nome do Pokémon e um botão de pesquisa.
-   Exibe as informações do Pokémon em um cartão.

### `public/styles.css`

-   Define os estilos CSS para a interface do usuário.

### `public/script.js`

-   Adiciona um ouvinte de eventos ao botão de pesquisa.
-   Faz uma requisição para a rota `/pokemon/:name` no servidor.
-   Atualiza a interface do usuário com as informações do Pokémon.
-   Lida com erros e exibe mensagens de alerta.

### `package.json`

-   Define as dependências do projeto e scripts.

## Melhorias Futuras

-   Adicionar paginação ou rolagem infinita para exibir múltiplos resultados.
-   Implementar uma interface de usuário mais sofisticada.
-   Adicionar mais detalhes do Pokémon, como movimentos e estatísticas.
-   Adicionar tratamento de erros mais robusto e mensagens de erro mais informativas.
-   Adicionar uma imagem caso o pokemon não possua foto.
-   Adicionar validações de entrada.
