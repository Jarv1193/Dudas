const { expect } = require('@wdio/globals')
const InicioPage = require('../pageobjects/inicio.page')
const ProductoJordanPage = require('../pageobjects/producto.page')

describe('Buscar cosas en la tienda de Nike', () => {
    it('Buscar productos Jordan', async () => {
        await InicioPage.open()
        await InicioPage.buscarArticulosJordan()
        await ProductoJordanPage.verificarArticuloJordan('Air Jordan 1 Mid')
    })
})

