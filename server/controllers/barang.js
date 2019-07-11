const model = require("../models");

const { Barang } = model;

class Barangs {
  // insert barang baru
  static insertBarang(req, res) {
    return Barang.create({
      ...req.body
    })
      .then(barang =>
        res.status(201).send({
          success: true,
          message: "Barang successfully created",
          barang
        })
      )
      .catch(error =>
        res.status(400).send({
          success: false,
          message: "Barang fail to create",
          error
        })
      );
  }

  // delete barang berdasarkan id
  static deleteBarang(req, res) {
    return Barang.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(barang => {
        res.status(201).send({
          success: true,
          message: "Barang successfully deleted",
          barang
        });
      })
      .catch(error => {
        res.status(400).send({
          success: false,
          message: "Barang fail to delete",
          error
        });
      });
  }

  // read semua barang
  static getBarang(req, res) {
    return Barang.findAll()
      .then(barangs => {
        res.status(201).send(barangs);
      })
      .catch(error =>
        res.status(400).send({
          success: false,
          message: "Barang fail to read",
          error
        })
      );
  }

  // update barang berdasarkan id
  static updateBarang(req, res) {
    return Barang.update(
      { ...req.body },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(barang => {
        res.status(201).send({
          success: true,
          message: "Barang successfully updated",
          barang
        });
      })
      .catch(error => {
        res.status(400).send({
          success: false,
          message: "Barang fail to update",
          error
        });
      });
  }
}

module.exports = Barangs;
