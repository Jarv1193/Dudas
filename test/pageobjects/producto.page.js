const { $ } = require('@wdio/globals')
const { expect } = require('@wdio/globals')
const Page = require('./page');

class ProductoJordanPage extends Page {
    /**
     * define selectors using getter methods
     */
    get labelDelArticulo () {
        return $('h1[data-testid="product_title"]');
    }

    get buttonAgregarArticulo(){
        return $('[data-testid="atb-button"]');
    }

    async verificarArticuloJordan(nombre){
        expect(this.labelDelArticulo.getText()).toHaveText(nombre);
        expect(this.buttonAgregarArticulo).toBeDisplayed();
    }

}

module.exports = new ProductoJordanPage();
