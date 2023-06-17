const mongoose = require("mongoose")

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trime: true,
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      trime: true,
    },
    phone: {
      type: String,
      required: [true, "Please add a phone number"],
      trime: true,
    },
    message: {
      type: String,
      required: [true, "Please add a message"],
      trime: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 2592000000,
    },
  },
  { timestamps: true }
)
const contact = mongoose.model("Contact", contactSchema)
module.exports = contact
