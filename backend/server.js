const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const savingsRoutes = require("./routes/savings");
const authRoutes = require("./routes/auth");
const budgetRoutes = require("./routes/budget");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/auth", authRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/savings", savingsRoutes);

app.get("/api/test", (req, res) => {
    res.json({
        message: "FinWise Women API is working!"
    });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(
                `Server running on http://localhost:${PORT}`
            );
const savingsRoutes = require("./routes/savings");
        });

    } catch (error) {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

        process.exit(1);
    }
}

startServer();