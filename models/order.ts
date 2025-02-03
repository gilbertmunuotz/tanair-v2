// Import npm packages
import { Schema, model, models } from 'mongoose';

// Define interface for order Model
interface Order {
    customerName: string;
    productName: string;
    quantity: number;
    price: number;
    status: 'pending' | 'shipped' | 'delivered';
    user: Schema.Types.ObjectId // Reference to User model
}

// **** Functions **** //
const orderSchema = new Schema<Order>({
    customerName: { type: String, required: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true } // Reference to User Model
}, { timestamps: true });


// ****Check if model existst &Export default it **** //
const orderModel = models.Order || model<Order>("Order", orderSchema);
export default orderModel;