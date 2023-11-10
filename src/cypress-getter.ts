// const { cy } = require('cypress');
/* global cy */
export const getHouseDataFromUrl = async (url: string) => {
    const housePrice = '[data-testid=price] span';
    cy.visit(url);
    return cy.get(housePrice).then((price: string) => {
        return price;
    })
}

// export const getUrlsForGivenPage = () => {
//     const houseItems = '#grid-search-results ul > li [data-test=property-card-link]';
//     const paginationContainer = '.search-pagination';
  
//     cy.get('#grid-search-results').should('be.visible');
//     console.log('houseItems: ', houseItems);
//     const houseUrlList = [];
//     cy.get(paginationContainer).scrollIntoView({ duration: 10000 });
//     cy.get(houseItems)
//       .each(($el, index, $list) => {
//         // const { href } = $el;
//         houseUrlList.push($el.attr('href'));
//       })
//       // .invoke('attr', 'href')
//       // .then(href => {
//       // });
     
//     // cy.get(houseItems).should('have.length', 25)
//     cy.request('POST', 'http://localhost:3000/urls', { houseData: houseUrlList });
//     const paginationButton = '.search-pagination ul li a'
//     // // if (cy.get(paginationButton).last().href) {
//       cy.get(paginationButton).last().click();
//       const paginationChildren = '.search-pagination ul li';
  
//       cy.get(paginationChildren).then(result => {
//         console.log('result.length: ', result.length);
//         console.log('result: ', result);
//         console.log('result[length-3]: ', result[result.length-3]);
//         // console.log()
//         const title = result[result.length-3].children[0].title;
//         console.log('title: ', title)
  
//         // Cypress.$(result).eq(result.length-3).debug();
//         // const lastNumberElementTitle = Cypress.$(result).get('a').invoke('attr', 'title').debug();
//         // console.log('lastNumberElementTitle: ', lastNumberElementTitle);
//         if (!title.includes('current page')) {
//           //we are done
//           getUrlsForGivenPage();
//         }
//       });
//     //   getUrlsForGivenPage();
//     // // }
//   }
  
//   describe('url scraper', () => {
//       beforeEach(() => {
//         // Cypress starts out with a blank slate for each test
//         // so we must tell it to visit our website with the `cy.visit()` command.
//         // Since we want to visit the same URL at the start of all our tests,
//         // we include it in our beforeEach function so that it runs before each test
//         cy.visit('https://zillow.com')
//       })
    
//       it('prints out list of URLs', () => {
//         // We use the `cy.get()` command to get all elements that match the selector.
//         // Then, we use `should` to assert that there are two matched items,
//         // which are the two default items.
//         const searchInput = 'input#search-box-input';
//         const searchButton = 'button#search-icon';
//         const forSaleText = 'For sale';
  
//         //home page
//         cy.get(searchInput).type('King County, WA');
//         cy.get(searchButton).click();
  
//         //skip listings modal
//         cy.get('button').contains(forSaleText).click();
        
     
  
//         // for (let i = 0; i < 100; i++) {
//           const paginationChildren = '.search-pagination ul li';
//           const bottomButtonList = cy.get(paginationChildren).then(result => {
//             console.log('result.length: ', result.length);
//             console.log('result: ', result);
//             console.log('result[length-3]: ', result[result.length-3]);
//             // console.log()
//             const title = result[result.length-3].children[0].title;
//             console.log('title: ', title)
  
//             // Cypress.$(result).eq(result.length-3).debug();
//             // const lastNumberElementTitle = Cypress.$(result).get('a').invoke('attr', 'title').debug();
//             // console.log('lastNumberElementTitle: ', lastNumberElementTitle);
//             if (!title.includes('current page')) {
//               //we are done
//               getUrlsForGivenPage();
//             }
//           });
//           // const lastNumberElement = cy.get(paginationChildren).eq(bottomButtonList.its('length')-3).debug();
//           // const lastNumberElementTitle = lastNumberElement.get('a').invoke('attr', 'title').debug();
  
          
//           // }
        
  
//         // }
//         // const paginationButton = '.search-pagination ul li a'
//         // const nextPageUrl = cy.get(paginationButton).last().should('have.attr', 'href');
//         // while (nextPageUrl.)
//       })
//     })
    