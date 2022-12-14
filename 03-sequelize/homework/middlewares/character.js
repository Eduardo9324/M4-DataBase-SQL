const { Router } = require('express');
const { Op, Character, Role } = require('../db');
const router = Router();

router.post("/", async (req, res) => {
  const { code, name, hp, mana } = req.body;

  if (!code || !name || !hp || !mana)
    return res.status(404).send("Falta enviar datos obligatorios");

  try {
    const character = await Character.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(404).send("Error en alguno de los datos provistos");
  }
});

router.get("/", async (req, res) => {
  const { race } = req.query;
  /* if (!race) {
    const characters = await Character.findAll({});
    res.json(characters)
  } else {
    const characters = await Character.findAll({
      where: {
        race
      }
    });
    res.json(characters);
  } */
  const condition = {}
  const where = {}
  if (race) where.race = race;
  //if (age) where.age = age;
  condition.where = where;
  const characters = await Character.findAll(condition);
  res.json(characters);
})

router.get("/:code", (req, res) => {
  const { code } = req.params;
  Character.findByPk(code)
    .them(character => {
      if (!character)
        return res
          .status(404)
          .send(`El código ${code} no corresponde a un personaje existente`);
      res.json(character);
    })
})

module.exports = router;