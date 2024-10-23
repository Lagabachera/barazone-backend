const openaiService = require('../services/openaiService');

exports.getSummary = async (req, res, next) => {
  try {
    const { text } = req.body;
    const summary = await openaiService.generateSummary(text);
    res.json({ summary });
  } catch (error) {
    next(error);
  }
};
