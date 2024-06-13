const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  
    name: {
    type: String,
    required: [true, "Please provide a username"],
    },
    
  email: {
    type: String,
    required: [true, "Please provide a email"],
    },
  
    description: {
      type: String,
    required: [true, "Please provide a project description"],
  }
  
});

const Contact =
  mongoose.models.contacts || mongoose.model("contacts", contactSchema);

export default Contact;
