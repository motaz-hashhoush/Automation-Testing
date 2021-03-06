describe('Sort by user reviews feature', ()=>{
    beforeEach(() => {
        const usrname = 'mohamad';
        const password = '15447631';
        cy.visit('https://skillsmatch.mdx.ac.uk/en/search/');

        cy.get('input[type="username"]').type(usrname);
        cy.get('input[type="password"]').type(password);
        cy.get('input[type="submit"]').click()
      })

      it('search All Key Words ', ()=>{
          cy.xpath('//*[@id="searchFrom"]/div[1]/div[2]/tags/span').type('python {enter} java {enter}');
          
          cy.xpath('//*[@id="searchFrom"]/div[2]/div[2]/div/div[1]/a').click();
          cy.xpath('//*[@id="collapseThree"]/div/div[1]/label').click();
          cy.xpath('//*[@id="searchFrom"]/div[1]/div[3]/button').click();
          

          //to make sure that the first result contain greater than or equal number of stars in result two

        var x = 1;
          cy.get('#search-result [test-data*=searchItem]').each((item)=>{
            cy.xpath('//*[@id="search-result"]/div['+x+']/span[2]').should("contain.text","python");
            cy.xpath('//*[@id="search-result"]/div['+x+']/span[3]').should("contain.text","java");   
            x++;
            })    
      })

    
})
