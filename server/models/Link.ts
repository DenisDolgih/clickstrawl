import { Schema, model } from 'mongoose';

const linkSchema = new Schema({
    from: {
        type: String,
        required: true,
        unique: true    // unique index
    },
    to: {
        type: String,
        required: true,
        unique: true    // unique index
    }
});

export default model('Link', linkSchema);