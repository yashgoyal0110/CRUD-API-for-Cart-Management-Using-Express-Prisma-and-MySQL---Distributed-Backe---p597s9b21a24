const { prisma } = require("../db/config");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const fetchedItem = await prisma.cart.findUnique({
      where: { cartId: parseInt(id, 10) },
    });

    if (!fetchedItem) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    let deletedItem = await prisma.delete({
      where: { cartId: parseInt(id, 10) },
    });

    return res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Cart deleted successfully",
    });
  }
};

module.exports = deleteProduct;
