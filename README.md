# Pokedex desenvolvida em React Native

# Problema que a aplicação se propõe a resolver:
    Criar uma fonte de acesso a informações de pokemons, tais como nome, aparência e alguma breve descrição de comportamento ou história (chamado de flavor text).
# Instruções de execução:
    (para o desenvolvimento utilizei o Android Studio, não consegui checar se existe algum erro na versão de IOS)
    Clone o repositório.
    Para inicializar o projeto, abra 2 terminais na pasta 'MyApp' desse repositório.
    No primeiro terminal, execute 'npm install' para instalar as dependencias do projeto.
    A seguir, ainda nesse terminal, execute o comando 'npx react-native start' e nesse terminal rodará o Metro.
    No segundo terminal, execute o comando 'npx react-native run-android' e espere executar o arquivo no emulador ou dispositivo.
# Limitações: 
    A pokedex só recupera a informação dos primeiros 151 pokemons existentes.
    Alguns sprites de pokemons grandes ficam com pontas cortadas no layout do sprite.
    O flavor text dos pokemons não está padronizado em inglês.
# Bugs conhecidos:
    No Visual Studio Code, o typescript acusa incompatibilidade de tipo na chamada da função handleOpenPokemonPage() no primeiro argumento de .navigate()
    Não sei se é problema de renderização pelo meu pc estar meio lerdo, mas ao "scrollar" a lista de pokemons muito rápido o aplicativo começa a demorar para renderizar alguns cards e ao voltar, alguns cards do inicio pararam de ser renderizados e precisam ser renderizados de novo.
# Próximos passos para a evolução do sistema:
    Implementar componentes com css dinâmico, provavelmente com styled-components.
    Melhorar o design.
    Implementar possibilidade de um fazer filtragem a partir de alguns parâmetros como tipo e nome.
    Incluir mais informações na tela de pokemon, como ataques e linha evolutiva.
    Implementar a criação de um "team building" que informasse fraquezas do time a partir das fraquezas defensivas e ofensivas.
