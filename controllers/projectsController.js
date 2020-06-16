const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Project = require('../models/project');

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).json({
    status: 'success',
    projects: projects.map((project) => project.toObject({ getters: true })),
  });
});

exports.createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create(req.body);

  res.status(201).json({
    project: newProject,
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.pid, req.body);

  if (!project) {
    return next(new AppError('No project found with that ID.'));
  }

  res.status(200).json({
    status: 'success',
    project,
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.pid);

  if (!project) {
    return next(new AppError('No project found with that ID.'));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
