const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    address: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    phone: {
      type: mongoose.SchemaTypes.String,
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

const Publisher = mongoose.model("Publisher", publisherSchema);

module.exports = Publisher;