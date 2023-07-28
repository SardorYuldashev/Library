const mongoose = require("mongoose");

const borrowerSchema = new mongoose.Schema(
  {
    full_name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    address: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    phone: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
      default: false
    },
  },
  {
    versionKey: false,
    timestamps: false
  }
);

const Borrower = mongoose.model("Borrower", borrowerSchema);

module.exports = Borrower;