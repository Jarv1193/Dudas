const { expect } = require('@wdio/globals')
const InicioPage = require('../pageobjects/inicio.page')
const ProductoJordanPage = require('../pageobjects/producto.page')

describe('Navegando en mercado libre', () => {     

    it('Verificar el menu de categorias', async () => {
        await InicioPage.open()
        await InicioPage.desplegarMenuDeCategorias()
        await expect(await InicioPage.menuDeVehiculosInternoEnCategorias).toHaveText('Vehículos')
        await expect(await InicioPage.menuDeSupermercadoInternoEnCategorias).toHaveText('Supermercado')
    })
})

