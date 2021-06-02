const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//may need to use plug in to use decimal values in mongoose?

const solarCalcSchema = new Schema({
    lattitude: { type: number, required: true },
    longitude: { type: number, required: true },
    monthlyElectricBill: { type: number, required: true },
    monthlyKwhUse : {type: number, required: true }
});

const solarCalcSchema = mongoose.model("solarCalculator", solarCalcSchema);

module.exports = solarCalculator;
