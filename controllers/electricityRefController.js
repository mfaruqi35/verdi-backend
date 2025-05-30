// import electricityRefModel from "../models/electricityRefModel.js";

// export const addReference = async (req, res) => {
//   try {
//     const { category, types, powerUsageWatt } = req.body;

//     if (!category || !types) {
//       return res
//         .status(400)
//         .json({ message: "Please fill all required fields" });
//     }
//     const newReference = new electricityRefModel({
//       category,
//       types,
//       powerUsageWatt,
//     });
//     await newReference.save();
//     res
//       .status(200)
//       .json({ message: "New reference is added", data: newReference });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getReference = async (req, res) => {
//   try {
//     const userId = req.params;
//     const elecRef = await
//     if(!userId){
//       return res.status(400).json({message: "User id is not provided"})
//     }
//     else {
//       return res.status(200).json({})
//     }

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
