import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    ratings: { type: Number, required: true },
    reviews: { type: [String], required: true },
    category: {
      maleTopwear: { type: Boolean, default: false },
      bottomwear: { type: Boolean, default: false },
      sneakers: { type: Boolean, default: false },
      women: { type: Boolean, default: false },
      kids: { type: Boolean, default: false },
      furniture: { type: Boolean, default: false },
      books: { type: Boolean, default: false },
    },
  });
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product;