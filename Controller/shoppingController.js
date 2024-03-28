const shoppingModel = require("../Models/shoppingModels");

const CreateProduct = async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      productCategory,
      productDescription,
      productImage,
    } = req.body;
    if (
      !productName ||
      !productPrice ||
      !productCategory ||
      !productDescription ||
      !productImage
    ) {
      console.log("All fields are required");
      return res
        .status(400)
        .send({ message: "All Fields are mandatory", status: "error" });
    }

    const createdata = await shoppingModel.create({
      productName,
      productPrice,
      productCategory,
      productDescription,
      productImage,
    });

    if (createdata) {
      console.log("Product Created Successfully");
      res
        .status(200)
        .send({ message: "Product Created Successfully", status: "success" });
    } else {
      console.log("Error Creating Product");
      res
        .status(400)
        .send({ message: "Error Creating Product", status: "error" });
    }
  } catch (error) {
    console.log("Internal Server error, Error Creating Product", error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
};

const FetchAvailableProducts = async (req, res) => {
  try {
    const allproducts = await shoppingModel.find({});
    if (allproducts) {
      console.log("Product Fetched Sucessfully");
      res.status(200).send({
        Message: "Product Fetched Successfully",
        allproducts,
        status: "success",
      });
    } else {
      console.log("Error Fetching Products");
      res
        .status(400)
        .send({ message: "Error Fetching Products", status: "error" });
    }
  } catch (error) {
    console.log("Internal Server error, Error Retrieving Products", error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
};

module.exports = { CreateProduct, FetchAvailableProducts };
