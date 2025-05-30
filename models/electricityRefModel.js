import mongoose from "mongoose";

const electricityReferenceSchema = mongoose.Schema({
  category: {
    type: String,
    enum: ["Lamp", "AC", "StandbyDevice", "BigAppliance"],
    required: true,
  },
  types: {
    type: String,
    required: true,
  },
  powerUsageWatt: {
    type: Number,
  },
});

export default mongoose.model("ElectricityRef", electricityReferenceSchema);
