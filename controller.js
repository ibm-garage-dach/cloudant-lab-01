const cloudant = require("./cloudant");
const db = cloudant.db.use('tasks');

module.exports.getTasks = async (req, res) => {
  const tasks = await db.find({ selector: {} });
  res.render('todo.ejs', { todoTasks: tasks.docs });
};


module.exports.createTask = async (req, res) => {
  // @TODO: insert new item into tasks db
  res.redirect("/");
};


module.exports.getTask = async (req, res) => {
  const id = req.params.id;
  let tasks; // @TODO: get existing task by id
  res.render("todoEdit.ejs", { todoTask: tasks.docs[0] });
};

module.exports.editTask = async (req, res) => {
  const id = req.params.id;
  try {
    let result; // @TODO: get existing task by id
    if (!result.docs.length) {
      return res.status(404).end();
    }

    // @TODO: update existing task with new content
    res.redirect("/");
  } catch (err) {
    res.send(500, err);
  }
};

module.exports.removeTask = async (req, res) => {
  const id = req.params.id;
  try {
    let result; // @TODO: get existing task by id
    if (!result.docs.length) {
      return res.status(404).end();
    }
    // @TODO: delete existing task
    res.redirect("/");
  } catch (err) {
    return res.send(500, err);
  }
};
