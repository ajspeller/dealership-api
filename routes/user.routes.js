const express = require('express');

const router = express.Router();

router.get('users', async (req, res, next) => {});
router.get('users/:id', async (req, res, next) => {});
router.post('users/', async (req, res, next) => {});
router.delete('users/:id', async (req, res, next) => {});
router.put('users', async (req, res, next) => {});

module.exports = router;
