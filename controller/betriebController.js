const { csvFile } = require('../dev-data/import-csv');

exports.getAll = function (req, res) {
  res.json(csvFile);
};

exports.getOne = function (req, res) {
  try {
    //Get the route parameter and check if an object has the same property
    let id = req.params.id.toUpperCase();
    let result = csvFile.find((elem) => elem.abk === id);

    //Copy result object and return response with the desired fields
    if (result) {
      let cleanResult = Object.assign({}, result);
      delete cleanResult.abk;
      res.status(200).json(cleanResult);
    } else {
      throw Error('Keine Betriebsstelle gefunden.');
    }
  } catch (err) {
    res.status(404).json(err.message);
  }
};
