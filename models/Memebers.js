const mongoose = require("mongoose");

const MemberSchema = mongoose.Schema({
  enrollId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: Date.now,
  },
  enrolledDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Members", MemberSchema);
