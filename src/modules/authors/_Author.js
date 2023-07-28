const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    full_name: {
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

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;