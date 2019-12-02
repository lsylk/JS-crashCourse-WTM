const express = require("express");
const router = express.Router();

const TaskService = require("./../services/task-service");

router.get("/:taskId", async (req, res) => {
  const taskId = req.params.projectId;
  const task = await TaskService.find(taskId);
  if (!task) res.status(404)
  res.send(task);
});

router.put("/:taskId", async (req, res) => {
  const taskId = req.params.taskId;
  const task = await TaskService.find(taskId);
  if (!task) res.status(404)
  await TaskService.update(task, req.body);
  res.send(task);
});

module.exports = router;
