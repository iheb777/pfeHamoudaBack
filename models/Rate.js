import mongoose from "mongoose";

const RateSchema = new mongoose.Schema({
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Projects",
            required: true,
            unique: false,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true,
            unique: false,
        },

        value: {
            type: Number,
            required: true,
        },


    },
    {timestamps: true}
);

export default mongoose.model("Rates", RateSchema);
