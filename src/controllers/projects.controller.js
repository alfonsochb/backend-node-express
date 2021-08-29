import Project from "../models/Project";

/* export async function methodExample(req, res) {
try {} catch (error) {}
} */

async function getProjects(req, res) {
  try {
    const rows = await Project.findAll();
    return res.json({
      message: "Successful consultation",
      data: rows,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: "Something goes wrong.",
      data: {},
    });
  }
}

async function getProjectById(req, res) {
  const { id } = req.params;
  try {
    const row = await Project.findOne({
      where: {
        id: id,
      },
    });
    return res.json({
      message: "Successful consultation",
      data: row,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: "Something goes wrong.",
      data: {},
    });
  }
}

async function createProject(req, res) {
  const { name, priority, deliverydate } = req.body;
  try {
    let newProjet = await Project.create(
      {
        name,
        priority,
        deliverydate,
      },
      {
        fields: ["name", "priority", "deliverydate"],
      }
    );
    if (newProjet) {
      return res.json({
        message: "Project created successfully",
        data: newProjet,
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: "Something goes wrong.",
      data: {},
    });
  }
}

async function updateProject(req, res) {
  const { id } = req.params;
  const { name, priority, deliverydate } = req.body;
  try {
    const rows = await Project.findAll({
      atributes: ["id", "name", "priority", "deliverydate"],
      where: {
        id,
      },
    });
    if (rows.length > 0) {
      rows.forEach(async (project) => {
        project.update({
          name,
          priority,
          deliverydate,
        });
      });
      return res.json({
        message: "Updated successfully.",
        data: rows,
      });
    } else {
      return res.json({
        message: "No records found.",
        data: {},
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: "Something goes wrong.",
      data: {},
    });
  }
}

async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    const countDelete = await Project.destroy({
      where: {
        id: id,
      },
    });
    return res.json({
      message: "Successful deleted",
      data: {
        count: countDelete,
      },
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      message: "Something goes wrong.",
      data: {},
    });
  }
}

export default {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
