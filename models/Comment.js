import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
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

        text: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Comments", CommentsSchema);
