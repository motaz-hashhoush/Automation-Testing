describe('Translate feature', ()=>{

    beforeEach(() => {

        const usrname = 'yaseen_asaliya';
        const password = 'yaseen2001';
        cy.visit('https://skillsmatch.mdx.ac.uk/en/search/');

        cy.get('input[type="username"]').type(usrname);
        cy.get('input[type="password"]').type(password);
        cy.get('input[type="submit"]').click()
      })

      it('Translate to english',()=>{
        cy.xpath('//*[@id="searchFrom"]/div[1]/div[2]/tags/span').type('برمجيات');
        cy.xpath('//*[@id="searchFrom"]/div[2]/div[2]/div/div[1]/a').click();
        cy.xpath('//*[@id="translateInput"]').select('English');
        cy.xpath('//*[@id="searchFrom"]/div[1]/div[3]/button').click();
        cy.get('#search-result [test-data*=searchItem]').each((item)=>{
            cy.wrap(item).should("contain.text","software") 
        })        
      })
})