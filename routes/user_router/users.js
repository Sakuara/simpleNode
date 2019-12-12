const express = require('express');
const router = express.Router();
const user_controller = require('../../controller/user_controller/user');

// user list
router.post('/user-list',user_controller.studentList);
// get user info
router.get('/user-info',user_controller.userInfo);
// add user
router.get('/userinfo/add',user_controller.addUser);
// update user
router.get('/userinfo/update',user_controller.updateUser);
// delete user
router.get('/userinfo/delete',user_controller.deleteUser);

module.exports = router;

