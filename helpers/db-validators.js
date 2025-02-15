const { Category, Product, Cohort } = require('../models')

/**
 * Validación contra la BD de categorías
 */
const categoryByIdExists = async (id = '') => {
  const categoryExists = await Category.findById(id)
  if (!categoryExists) {
    throw new Error(`Categoría con id '${id}' no existe en la base de datos`)
  }
}

/**
 * Validación contra la BD de productos
 */
const productByIdExists = async (id = '') => {
  const productExists = await Product.findById(id)
  if (!productExists) {
    throw new Error(`Producto con id '${id}' no existe en la base de datos`)
  }
}

/**
 * Validar contra la BD de artículos
 */

const cohortByIdExists = async (id = '') => {
  const cohortExists = await Cohort.findById(id)
  if (!cohortExists) {
    throw new Error(`La cohorte con id '${id}' no existe en la base de datos`)
  }
}

module.exports = {
  categoryByIdExists,
  cohortByIdExists,
  productByIdExists,
}
