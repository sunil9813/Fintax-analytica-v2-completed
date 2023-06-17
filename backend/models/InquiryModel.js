const mongoose = require("mongoose")

const inquirySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
    },
    phone: {
      type: String,
      required: [true, "Please add a phone"],
    },
    message: {
      type: String,
      required: [true, "Please add a message"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 2592000000,
    },
  },
  { timestamps: true }
)
const inquiry = mongoose.model("Inquiry", inquirySchema)
module.exports = inquiry
