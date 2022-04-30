

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

      it('answer qustion', ()=>{

          cy.get('a.btn.btn-primary.btn-lg.active.mt-5').click();
          cy.xpath ('//*[@id="2"]/a').click();
          cy.xpath('//*[@id="3"]').check()
          cy.get('[test-data="NextStep"]').click();

          let nextButton = [4, 7, 11, 14, 17, 22, 26];
          let numQustion = 9;
          let button = 2;
          let index = 0;

        
          for(let qustion = 1; qustion <= 26; qustion++){

            cy.xpath(`//*[@id="${numQustion}"]`).click()
            numQustion +=5;

            if( qustion == nextButton[index]){

                cy.xpath(`//*[@id="answerForm"]/fieldset[${button}]/input[2]`).click();
                button++;
                index++;
            } 
          }

       
      })

      it('check the stars')

      

})