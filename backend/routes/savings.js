const express = require("express");
const Savings = require("../models/Savings");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const {
            userId,
            goal,
            target,
            saved
        } = req.body;

        if (!userId || !goal || target === undefined || saved === undefined) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (saved > target) {
            return res.status(400).json({
                message: "Saved amount cannot be greater than target"
            });
        }

        const remaining = Number(target) - Number(saved);

        const progress =
            (Number(saved) / Number(target)) * 100;

        const savings = await Savings.create({
            userId,
            goal,
            target,
            saved,
            remaining,
            progress
        });

        res.status(201).json({
            message: "Savings goal saved successfully",
            savings
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Unable to save savings goal"
        });
    }
});

module.exports = router;