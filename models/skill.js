const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill must have a name'],
  },
  icon: {
    type: String,
    required: [true, 'Skill must have a icon'],
  },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
