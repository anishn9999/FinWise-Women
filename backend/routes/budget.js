const express = require("express");
const Budget = require("../models/Budget");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const { userId, income, expenses } = req.body;

        if (!userId || income === undefined || expenses === undefined) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const savings = Number(income) - Number(expenses);

        const budget = await Budget.create({
            userId,
            income,
            expenses,
            savings
        });

        res.status(201).json({
            message: "Budget saved successfully",
            budget
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Unable to save budget"
        });
    }
router.post("/", async (req, res) => {

    try {

        const {
            userId,
            income,
            expenses
        } = req.body;


        if (
            !userId ||
            income === undefined ||
            expenses === undefined
        ) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }


        const savings =
            Number(income) -
            Number(expenses);


        const budget =
            await Budget.create({

                userId: userId,

                income: Number(income),

                expenses: Number(expenses),

                savings: savings

            });


        res.status(201).json({

            message:
                "Budget saved successfully",

            budget: budget

        });


    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message:
                "Unable to save budget"

        });

    }

});


module.exports = router;
});

module.exports = router;