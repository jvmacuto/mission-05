const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    // ... other item fields
  });
  
  const Item = mongoose.model('Item', ItemSchema);
  
  const UserSchema = new mongoose.Schema({
    // ... other user fields
    watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  });
  
  const User = mongoose.model('User', UserSchema);