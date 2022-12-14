/// <reference types = 'Cypress' />

describe('localHost3333UpdateProduct', () => {

    it('update', () => {
        cy.request(
            {
                method: 'PATCH',
                url   : 'http://localhost:3333/Products/9',
                body :
                {                    
                    'price'     :    4444
                }

               /* {
                    'price'     :    2750.44                   
                }
               {
                    'id'        :   9,
                    'title'     :   'Product 9',
                    'category'  :   'accessories',
                    'price'     :    4000,
                    'description':  'This is description about product 9'
                 }
                 {
                    'id'        :   8,
                    'title'     :   'Product 8',
                    'category'  :   'furniture',
                    'price'     :    7000,
                    'description':  'This is description about product 8'
                 }
                 {
                    'id'        :   7,
                    'title'     :   'Product 7',
                    'category'  :   'furniture',
                    'price'     :    6000,
                    'description':  'This is description about product 7'
                 }
                {
                    'id'        :   4,
                    'title'     :   'Product 4',
                    'category'  :   'fitness',
                    'price'     :    3000,
                    'description':  'This is description about product 4'
                 }
                {
                    'id'        :   10,
                    'title'     :   'Product 10',
                    'category'  :   'electronics',
                    'price'     :    3000,
                    'description':  'This is description about product 10',
                    'discount'  :  
                        {
                            'type'  :   'shipping'
                        } 
                 }
                {
                    'id'        :   3,
                    'title'     :   'Product 3',
                    'category'  :   'books',
                    'price'     :    1000,
                    'description':  'This is description about product 3'
                 }
                {
                   'id':1,
                    'title':        'Product 1',
                    'category':     'electronics',
                    'price':        4000,
                    'description':  'This is description about product 1'
                }*/
            }
        )
    });
});