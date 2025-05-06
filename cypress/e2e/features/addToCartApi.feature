Feature: API de Carrinho
    Como um testador de API
    Eu quero validar o endpoint de carrinho
    Para garantir que produtos possam ser adicionados corretamente

    Scenario: Adicionar produto ao carrinho via API
        When eu adiciono produto ao carrinho via API
        Then o status da resposta de carrinho deve ser 201
        And a resposta deve confirmar adição ao carrinho