const express = require('express');

const router = express.Router();

router.get('/users', async (req, res, next) => {});
router.post('/users', async (req, res, next) => {});

router.get('/users/:id', async (req, res, next) => {});
router.put('/users/:id', async (req, res, next) => {});
router.patch('/users/:id', async (req, res, next) => {});
router.delete('/users/:id', async (req, res, next) => {});

router.get('/users/:id/cars', async (req, res, next) => {});
router.post('/users/:id/cars', async (req, res, next) => {});

module.exports = router;
