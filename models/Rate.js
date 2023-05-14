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
            ref: "User",
            required: true,
            unique: false,
        },
        score: {
            type: Number,
            required: false,
            default:0
        },
        bcm1: {
            type: Number,
            required: false,
            default: 0
        },
        bcm2: {
            type: Number,
            required: false,
            default:0
        },


    },
    {timestamps: true}
);

export default mongoose.model("Rates", RateSchema);
