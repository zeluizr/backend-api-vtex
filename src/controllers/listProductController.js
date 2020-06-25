const api = require("axios");

module.exports = {
  async store(req, res) {
    const { id } = req.headers;
    const response = await api.get(
      `https://${process.env.APP_ACCOUNT}.${process.env.APP_ENVOIRMENT}/api/catalog_system/pub/products/search?O=OrderByPriceDESC`
    );

    return res.json(response.data);
  },
};
