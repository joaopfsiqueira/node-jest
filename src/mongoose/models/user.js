import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    'name': String,
    'password': String,
    'created_at': Date
});

export default mongoose.model('Campaign', UserSchema);
