const asyncHandler = require("express-async-handler")
const Contact = require("../models/ContactModel")

const sendInquiry = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !phone || !message) {
    res.status(400)
    throw new Error("Please fill in all fields")
  }

  const cont = await Contact.create({
    name,
    email,
    phone,
    message,
  })

  res.status(201).json({
    success: true,
    data: cont,
  })
})

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find().sort("-createdAt")
  res.status(200).json(contacts)
})

module.exports = {
  getAllContacts,
  sendInquiry,
}
