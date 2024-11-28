const { prisma } = require("../db/config");

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const fetchedItem = await prisma.cart.findUnique({
      where: { cartId: parseInt(id, 10) },
    });

    if (!fetchedItem) {
      return res.status(404).json({
        error: "Cart not found",
      });
    }

    return res.status(200).json(fetchedItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = getProduct;
