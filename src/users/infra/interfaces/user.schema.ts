import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    email: String,
    phone: String,
  },
  {
    timestamps: true,
    collection: 'api-ton',
  },
);
