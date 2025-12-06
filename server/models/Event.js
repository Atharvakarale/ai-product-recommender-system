import mongoose from "mongoose"

const eventSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    eventType: {
      type: String,
      enum: ["view", "cart", "purchase"],
      required: true,
    },
    weight: {
      type: Number,
      default: function () {
        const weights = { view: 1, cart: 2, purchase: 5 }
        return weights[this.eventType] || 1
      },
    },
  },
  { timestamps: true },
)

export default mongoose.model("Event", eventSchema)
