import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";

export type AccountModel = mongoose.Document & {
  email: string,
  fullName: string,
  projects: Array<string>,
  isFirstTimer: boolean
};

const accountSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  fullName: { type: String },
  projects: { type: Array },
  isFirstTimer: { type: Boolean }
}, { timestamps: true });

const Account = mongoose.model("Account", accountSchema);
export default Account;
