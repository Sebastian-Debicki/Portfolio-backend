const Skill = require('../models/skill');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllSkills = catchAsync(async (req, res, next) => {
  const skills = await Skill.find();

  res.status(200).json({
    status: 'success',
    skills: skills.map((place) => place.toObject({ getters: true })),
  });
});

exports.createSkill = async (req, res, next) => {
  const newSkill = await Skill.create(req.body);

  res.status(201).json({
    status: 'success',
    skill: newSkill,
  });
};

exports.deleteSkill = catchAsync(async (req, res, next) => {
  const deletedSkill = await Skill.findByIdAndDelete(req.params.sid);

  if (!deletedSkill) {
    return next(new AppError('No skill found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.updateSkill = catchAsync(async (req, res, next) => {
  const skillId = req.params.sid;
  const updatedSkill = await Skill.findByIdAndUpdate(skillId, req.body);

  if (!updatedSkill) {
    return next(new AppError('No skill found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    skill: updatedSkill,
  });
});
