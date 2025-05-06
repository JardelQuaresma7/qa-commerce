Feature: API de Listagem de Produtos
    Como um testador de API
    Eu quero validar o endpoint de produtos
    Para garantir o correto funcionamento da listagem

    Scenario: Listar produtos via API
        When eu faço uma requisição GET para listar produtos
        Then o status da resposta de produtos deve ser 200
        And a resposta deve conter uma lista de produtos válidos