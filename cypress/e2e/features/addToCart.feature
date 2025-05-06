Feature: Adicionar produto ao carrinho
    Como um usuário
    Eu quero adicionar produtos ao meu carrinho
    Para poder comprá-los posteriormente

    Scenario: Adicionar um produto ao carrinho com sucesso
        Given que estou na página inicial
        When eu seleciono a quantidade "2" do produto "1"
        And clico no botão "Adicionar ao Carrinho"
        Then devo ver a mensagem "Produto adicionado ao carrinho!"
        And o número de itens no carrinho deve ser atualizado