const express = require('express');

const {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectsController');

const router = express.Router();

router.get('/', getAllProjects);
router.post('/', createProject);
router.patch('/:pid', updateProject);
router.delete('/:pid', deleteProject);

module.exports = router;
