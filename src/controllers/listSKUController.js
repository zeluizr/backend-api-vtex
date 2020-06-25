const api = require("axios");

module.exports = {
  async store(req, res) {
    const { _link } = req.headers;
    const response = await api.get(
      `https://${process.env.APP_ACCOUNT}.${process.env.APP_ENVOIRMENT}/api/catalog_system/pub/products/search/${_link}/p`
    );

    console.log(_link);

    return res.json(response.data);
  },
};
