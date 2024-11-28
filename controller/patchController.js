const { prisma } = require("../db/config");

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const details = req.body;
    const fetchedItem = await prisma.cart.findUnique({
      where: { cartId: parseInt(id, 10) },
    });

    if (!fetchedItem) {
      return res.status(404).json({
        error: "Cart not found",
      });
    }

    let updatedItem = await prisma.cart.update({
      where: { cartId: parseInt(id, 10) },
      data: {
        ...details,
      },
    });

    return res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = updateProduct;
