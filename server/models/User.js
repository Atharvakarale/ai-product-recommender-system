import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+@.+\..+/,
    },
    preferredCategories: {
      type: [String],
      default: [],
    },
    priceMin: {
      type: Number,
      default: 0,
    },
    priceMax: {
      type: Number,
      default: 10000,
    },
    viewedProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true },
)

export default mongoose.model("User", userSchema)
