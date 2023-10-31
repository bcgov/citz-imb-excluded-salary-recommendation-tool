/**
 * @summary This is the User Endpoint for SET
 * @author Dallascrichmond
 */
import express from 'express';
import { getUserByGuid, getUsers } from '../controllers/user-controller';

const router = express.Router();

// User from single guid
router.route('/user/guid').get(getUserByGuid);

// Get all users
router.route('/user').get(getUsers);

export default router;
