const { prisma } = require("../db/config");
const addProduct = async (req, res) => {
  console.log("postController");
  const { userId, productId, count } = req.body;
  if (!userId || !productId || !count) {
    return res.status(404).json({
      error: "All fields required",
    });
  }
  let addedProduct = await prisma.cart.create({
    data: {
      userId: userId,
      productId: productId,
      count: count,
    },
  });
  return res.status(201).set('apiauthkey', '8a60348b-d4a4-564a-9b45-aab518adb7f4').json(addedProduct)
};

module.exports = addProduct;
