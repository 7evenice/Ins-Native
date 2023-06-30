import mongoose from 'mongoose';

const professionalSchema = new mongoose.Schema(
  {
    id: String,
    image: String,
    title: String,
    description: String,
  },
  {collection: 'professionals'},
);

export default mongoose.model('ProfessionalModel', professionalSchema);
