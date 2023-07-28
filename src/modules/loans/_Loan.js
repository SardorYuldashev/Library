const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Book",
    },
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
    borrower: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Borrower",
    },
    out_date: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date()
    },
    due_date: {
      type: mongoose.SchemaTypes.Date,
    },
    returned: {
      type: mongoose.SchemaTypes.Boolean,
      required: true,
      default: false
    }
  },
  {
    versionKey: false,
    timestamps: false
  }
);

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;