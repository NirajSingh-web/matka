import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
export enum AdminRole {
  ADMIN = "admin",
  SUPERADMIN = "superadmin",
};
export interface IAdmin extends Document {
  email: string;
  phone: string;
  password: string;
  userPanel: boolean;
  adminPanel: boolean;
  role: AdminRole;
  loginAt?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // prevent returning password by default
    },
    userPanel: {
      type: Boolean,
      default: false,
    },
    adminPanel: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: Object.values(AdminRole),
      default: AdminRole.ADMIN,
    },
    loginAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
AdminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};
export const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);