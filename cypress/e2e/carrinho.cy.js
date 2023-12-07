describe("Automacao Carrinho", () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")

        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get(".btn_action").click()
    })

    it("Adicionar itens ao carrinho e conferir", () => {
        cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
        cy.xpath('//*[@id="inventory_container"]/div/div[5]/div[3]/button').click()
        cy.xpath('//*[@id="inventory_container"]/div/div[4]/div[3]/button').click()

        cy.get(".shopping_cart_container").click()

        // Verificar se os itens estão no carrinho
        cy.get(".cart_item").should("have.length", 3)
    
        //REMOVER ITENS DO CARRINHO E CONFERIR 

        cy.xpath('//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/button').click()
        cy.xpath('//*[@id="cart_contents_container"]/div/div[1]/div[4]/div[2]/div[2]/button').click()
        cy.xpath('//*[@id="cart_contents_container"]/div/div[1]/div[5]/div[2]/div[2]/button').click()

        // Verificar se o carrinho está vazio
        cy.get(".cart_item").should("have.length", 0)
    })
})