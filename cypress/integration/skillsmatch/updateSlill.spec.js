

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

          let nextButton = [4, 7, 11, 14, 17, 22, 26]; // Number of questions answered
          let numQustion = 9;
          let buttonNumber = 2;
          let index = 0;

        
          // answer all qustions in all pages
          for(let qustion = 1; qustion <= 26; qustion++){

            cy.xpath(`//*[@id="${numQustion}"]`).click()
            numQustion +=5;

            if( qustion == nextButton[index]){

                cy.xpath(`//*[@id="answerForm"]/fieldset[${buttonNumber}]/input[2]`).click();
                buttonNumber++;
                index++;
            } 
          }

       
      })

      it('check the scor', ()=>{

          // check the scor in all skills
        cy.xpath('/html/body/div[2]/div[1]/legend[2]/div/div[1]/label/span').should('contain.text', '(0/16)');
        cy.xpath('/html/body/div[2]/div[1]/legend[3]/div/div[1]/label/span').should('contain.text', '(0/12)');
        cy.xpath('/html/body/div[2]/div[1]/legend[4]/div/div[1]/label/span').should('contain.text', '(0/16)');
        cy.xpath('/html/body/div[2]/div[1]/legend[5]/div/div[1]/label/span').should('contain.text', '(0/12)');
        cy.xpath('/html/body/div[2]/div[1]/legend[6]/div/div[1]/label/span').should('contain.text', '(0/12)');
        cy.xpath('/html/body/div[2]/div[1]/legend[7]/div/div[1]/label/span').should('contain.text', '(0/20)');

      })

      it('check the starts', ()=>{
          // check the starts in all skills

        for(let id=2; id<=7; id++) {
            cy.xpath(`/html/body/div[2]/div[1]/legend[${id}]/div/div[2]`).children('[test-data="EmptyStar"]').should('have.length', 5);
        }
        
      })



})