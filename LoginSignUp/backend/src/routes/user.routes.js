import { Router } from "express";
import { RegisterUser , LoginUser} from "../controller/user.controller.js";

// Create an instance of the router
const route = Router();

// Use the 'route' instance to define the path
route.route('/register').post(RegisterUser);
route.route('/login').post(LoginUser);

// Export the router to be used in other files
export default route;