describe('Sort by user reviews feature', ()=>{
    beforeEach(() => {
        const usrname = 'yaseen_asaliya';
        const password = 'yaseen2001';
        cy.visit('https://skillsmatch.mdx.ac.uk/en/search/');

        cy.get('input[type="username"]').type(usrname);
        cy.get('input[type="password"]').type(password);
        cy.get('input[type="submit"]').click()
      })

      it('Sort based on user reviews', ()=>{
          cy.xpath('//*[@id="searchFrom"]/div[1]/div[2]/tags/span').type('software');
          cy.xpath('//*[@id="searchFrom"]/div[2]/div[2]/div/div[1]/a').click();
          cy.xpath('//*[@id="sort_by_user_reviews"]').click();
          cy.xpath('//*[@id="searchFrom"]/div[1]/div[3]/button').click();
          
          //to make sure that the first result contain greater than or equal number of stars in result two
          cy.xpath('//*[@id="search-result"]/div[2]/div[2]').children('.fill').its('length').then((size)=>{
            cy.xpath('//*[@id="search-result"]/div[1]/div[2]').children('.fill').its('length').should('be.gte',size)
          })
      })
})
