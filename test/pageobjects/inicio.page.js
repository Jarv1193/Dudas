const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InicioPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonDeBusqueda () {
        return $('#nav-search-icon');
    }

    get inputBarraDeBusqueda () {
        return $('#gn-search-input');
    }

    get linkATenisJordan () {
        return $('[href="https://www.nike.com/mx/t/tenis-air-jordan-1-mid-ntkGmF/DQ8426-067"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async buscarArticulosJordan () {
        await this.buttonDeBusqueda.click();
        await this.inputBarraDeBusqueda.click();
        await this.inputBarraDeBusqueda.setValue('jordan');
        await this.linkATenisJordan.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new InicioPage();
