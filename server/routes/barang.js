const express = require("express");
const router = express.Router();

// controller untuk barang
const Barangs = require("../controllers/barang");

// insert barang baru
router.post("/add", Barangs.insertBarang);

// delete barang berdasarkan id
router.delete("/delete/:id", Barangs.deleteBarang);

// read semua barang
router.get("/", Barangs.getBarang);

// update barang berdasarkan id
router.patch("/update/:id", Barangs.updateBarang);

// get barang berdasarkan id
router.get("/:id", Barangs.getBarangById);

module.exports = router;
