const { user: User, category, order, product } = require("./models");
async function getAll(model) {
  console.log("fetching entries...");
  const allEntries = await model.findAll();
  console.log(allEntries.map((user) => user.get({ plain: true })));
}

// getAll(category);

async function include(model) {
  console.log("fetching entries...");
  const entries = await model.findAll({
    include: [{ model: product, required: true, as: "products" }],
  });
  console.log(entries.map((user) => user.get({ plain: true }).products));
}

include(User);
