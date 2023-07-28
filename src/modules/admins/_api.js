const express = require('express');
const { isLoggedIn, isSuper } = require('../../shared/auth');
const {
  postLoginAdmin,
  postRegisterAdmin,
  getAdmins,
  getAdmin,
  patchAdmin,
  patchMe,
  deleteAdmin
} = require('./_controllers');

const router = express.Router();

router.post('/login', postLoginAdmin);
router.post('/admins', isLoggedIn, isSuper, postRegisterAdmin);
router.get('/admins', isLoggedIn, getAdmins);
router.get('/admins/:id', isLoggedIn, getAdmin);
router.patch('/admins/:id', isLoggedIn, isSuper, patchAdmin);
router.patch('/admins', isLoggedIn, patchMe);
router.delete('/admins/:id', isLoggedIn, isSuper, deleteAdmin);

module.exports = router;