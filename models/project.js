const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project must have a title.'],
  },
  description: {
    type: String,
    required: [true, 'Project must have a description.'],
  },
  technologies: {
    type: Array,
    required: [true, 'Project must have a technologies.'],
  },
  image: {
    type: String,
    required: [true, 'Project must have a image.'],
  },
  images: {
    type: Array,
    required: [true, 'Project must have a images array.'],
  },
  githubLink: {
    type: String,
    required: [true, 'Project must have a Github link.'],
  },
  demoLink: {
    type: String,
    required: [true, 'Project must have a demo link.'],
  },
  creationDate: {
    type: String,
    required: [true, 'Project must have a creation date.'],
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
