import mongoose from "mongoose";

const ChatsSchema = new mongoose.Schema({
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
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

export default mongoose.model("Chats", ChatsSchema);
