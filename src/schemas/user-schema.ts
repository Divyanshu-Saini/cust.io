import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface
export interface IUser extends Document {
  username: string;
  password: string;
}

// Create the schema
const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create the model
const User = mongoose.model<IUser>('User', UserSchema);

export default User;
