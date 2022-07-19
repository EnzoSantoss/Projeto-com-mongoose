const AppModel = require("../models/AppModel");

module.exports = class appController {
  static async home(req, res) {
    //resgatando dados
    const products = await AppModel.find().lean(); //O uso do método lean é para que o handlebars consiga fazer o looping
    res.render("appProduct/appAll", { products });
  }

  static createProduct(req, res) {
    res.render("appProduct/create");
  }

  static async createProductPost(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;

    //Inserindo dados
    const product = new AppModel({ name, price, description });

    await product.save();

    res.redirect("/app/allProducts");
  }

  static async getProduct(req, res) {
    const id = req.params.id;
    const product = await AppModel.findById(id).lean();
    res.render("appProduct/product", { product });
  }

  static async removeProduct(req, res) {
    const id = req.params.id;

    await AppModel.deleteOne({ _id: id });

    res.redirect("/app/allProducts");
  }

  static async editProduct(req, res) {
    const id = req.params.id;

    const product = await AppModel.findById(id).lean();

    res.render("appProduct/editForm", { product });
  }

  static async editProductPost(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;

    const product = { name, price, description };

    await AppModel.updateOne({ _id: id }, product);

    // res.redirect("/app/allProducts");
    res.redirect("/");
  }
};
