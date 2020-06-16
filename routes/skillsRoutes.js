const express = require('express');

const {
  getAllSkills,
  createSkill,
  deleteSkill,
  updateSkill,
} = require('../controllers/skillsControllers');

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', createSkill);
router.delete('/:sid', deleteSkill);
router.patch('/:sid', updateSkill);

module.exports = router;
