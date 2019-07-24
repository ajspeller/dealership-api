const express = require('express');

const router = express.Router();

router.get('/cars', async (req, res, next) => {});
router.get('/cars/:id', async (req, res, next) => {});
router.post('/cars', async (req, res, next) => {});
router.delete('/cars/:id', async (req, res, next) => {});
router.patch('/cars/:id', async (req, res, next) => {});
router.put('/cars/:id', async (req, res, next) => {});

module.exports = router;
