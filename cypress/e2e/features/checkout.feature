Feature: Finalizar compra com checkout simples
    Como um usuário
    Eu quero finalizar minha compra preenchendo os dados obrigatórios
    Para receber meu pedido corretamente

    Scenario: Concluir checkout com todos os campos obrigatórios preenchidos
        Given que adicionei um produto ao carrinho
        And estou na página do carrinho
        When clico no botão "Ir para o Checkout"
        And preencho os dados de entrega
            | campo     | valor                     |
            | nome      | Jardel                    |
            | sobrenome | Lima                      |
            | endereço  | Cristiano Angeli          |
            | número    | 700                       |
            | cep       | 09810555                  |
            | telefone  | 11999999999               |
            | email     | jardel.testando@gmail.com |
        And seleciono o método de pagamento "Boleto"
        And aceito os termos e condições
        And clico no botão "Finalizar Pedido"
        Then devo ver uma mensagem de sucesso