

describe('Update my skills feature', ()=>{

    beforeEach(() => {

        // Preconditions befor test
        const usrname = 'motaz_ha';
        const password = 'stringonly';
        cy.visit('https://skillsmatch.mdx.ac.uk/en/profile/');

        cy.get('input[type="username"]').type(usrname);
        cy.get('input[type="password"]').type(password);
        cy.get('input[type="submit"]').click()
      })

    

      //start to test
      it('sen app', ()=>{
          
          cy.xpath('/html/body/div[2]/div[1]/a').click()
      })

})