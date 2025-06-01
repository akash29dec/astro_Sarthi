import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true }, // Firebase UID
    email: String,
    name: String,
    photoURL: String,
    provider: String, // 'google' or 'facebook'
    role: { type: String, enum: ['user', 'astrologer'], default: 'user' }
});

const User = mongoose.model('User', userSchema);

export default User;
