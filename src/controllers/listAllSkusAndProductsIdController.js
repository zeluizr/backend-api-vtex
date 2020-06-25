const api = require("axios");

module.exports = {
  async store(req, res) {
    // req.body
    const response = await api.get(
      `https://${process.env.APP_ACCOUNT}.${process.env.APP_ENVOIRMENT}/api/catalog_system/pvt/products/GetProductAndSkuIds`,
      {
        headers: {
          "x-vtex-api-appkey": process.env.APP_KEY,
          "x-vtex-api-apptoken": process.env.APP_TOKEN,
        },
      }
    );
    const { data } = response.data;
    return res.json(data);
  },
};
