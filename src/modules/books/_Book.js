const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    publisher: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Publisher",
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Author",
    },
    copies: {
      type: mongoose.SchemaTypes.Number,
      required: true,
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

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;