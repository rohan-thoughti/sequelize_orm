const db = require("../models");

const Products = db.products;

//Create

const addProducts = async (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Please Instert Title" });
    return;
  }
  const productInfo = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  try {
    const product = await Products.create(productInfo);
    res.status(200).send(product);
    console.log(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured",
    });
  }
};

const getAllProducts = async (req, res) => {
  const products = await Products.findAll({});
  res.status(200).send(products);
};
// get By id

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Products.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// update

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Products.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};
// delete product

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Products.destroy({ where: { id: id } });
  res.status(200).send("product is deleted");
};

//  publish

const publishedProduct = async (req, res) => {
  const product = await Products.findAll({ where: { published: true } });
  res.status(200).send(product);
};

module.exports = {
  addProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  publishedProduct,
};
