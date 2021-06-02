const router = require("express").Router();
const solarCalcuatorRoutes = require("./solarCalculator");

// Solar routes
router.use("/solarCalculator", solarCalculatorRoutes);

module.exports = router;
