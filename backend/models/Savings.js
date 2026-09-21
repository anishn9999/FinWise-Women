const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        goal: {
            type: String,
            required: true
        },

        target: {
            type: Number,
            required: true
        },

        saved: {
            type: Number,
            required: true
        },

        remaining: {
            type: Number,
            required: true
        },

        progress: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Savings", savingsSchema);