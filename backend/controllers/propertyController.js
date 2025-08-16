const Property = require('../models/Property');

exports.getProperties = async (_req, res) => {
  try {
    const props = await Property.find().sort({ createdAt: -1 });
    res.json(props);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
