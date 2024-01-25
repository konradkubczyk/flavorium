describe('template spec', () => {
	it('Adds a first recipe and then checks if it is present on recipe list site', () => {
		cy.visit('http://localhost:5173/  ');
		cy.contains('Dodaj przepis').click();
		//Poczytaj jak uniknąć tego waita https://github.com/cypress-io/cypress/issues/3817
		//https://github.com/kuceb/cypress-plugin-tab
		cy.wait(1500);
		cy.get('#name').type('Zupa pomidorowa');
		cy.get('#description').type('Bardzo smaczna zupa pomidorowa zrobiona z rosołu z wczoraj');
		cy.wait(500);
		cy.get('#typeSelect').select('food');
		cy.get('#subTypeSelect').select('soup');
		cy.get('#isVeganCheckbox').check().wait(200).uncheck();
		//TODO Ogarnij jak zrobić żeby można było to sprawdzić
		//cy.get("#name").contains("Zupa pomidorowa")
		cy.get('#submitRecipeButton').click();
		cy.contains('Lista przepisów')
			.click()
			.wait(500)
			.url()
			.should('eq', 'http://localhost:5173/lista-przepisow');
		cy.get('.recipe').should('have.length', 1);
		cy.get('.recipe').then((recipe) => {
			expect(recipe).to.contain.text('Zupa pomidorowa');
			expect(recipe).to.contain.text('food');
			expect(recipe).to.contain.text('soup');

			//Nie testuje Vegan friendly bo na tym etapie nie jest to ważne
		});
		cy.contains('Dodaj przepis').click();
		cy.get('#name').clear().type('Muffin bananowy');
		cy.get('#description')
			.clear()
			.type('Wegański muffin bananowy  bez glutenu i bez cukry tylko z słodzikami');
		cy.wait(500);
		cy.get('#typeSelect').select('food');
		cy.get('#subTypeSelect').select('pastery');
		cy.get('#isVeganCheckbox').check();
		cy.get('#submitRecipeButton').click();
		cy.get('#submitRecipeButton').click();
		cy.get('#submitRecipeButton').click();
		cy.get('#submitRecipeButton').click();
		cy.get('#submitRecipeButton').click();
		cy.get('#submitRecipeButton').click();
		cy.contains('Lista przepisów')
			.click()
			.wait(500)
			.url()
			.should('eq', 'http://localhost:5173/lista-przepisow');
		cy.get('.recipe').should('have.length', 7);
		cy.get('.recipe')
			.first()
			.then((recipe) => {
				expect(recipe).to.contain.text('Zupa pomidorowa');
				expect(recipe).to.contain.text('food');
				expect(recipe).to.contain.text('soup');
			});
		// poczytaj jak zrobić żeby brało element należący do .recipe
		cy.get('.recipe')
			.last()
			.then((recipe) => {
				expect(recipe).to.contain.text('Muffin bananowy');
				expect(recipe).to.contain.text('food');
				expect(recipe).to.contain.text('pastery');
			});
		cy.contains('Strona').click();
	});
	//it("Check recipe",() =>{
	//cy.visit('http://localhost:5173/lista-przepisow')
	//cy.contains("Lista przepisów").click()
	// })
});
