const router = require('express').Router();
const Contact = require('../models/Contact');
const Property = require('../models/Property');

router.get('/', async (_req, res) => {
  try {
    const [totalContacts, activeLeads, properties] = await Promise.all([
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'Lead' }),
      Property.countDocuments(),
    ]);
    res.json({ totalContacts, activeLeads, properties });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
