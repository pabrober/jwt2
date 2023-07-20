import { Router } from "express";
import { login, publica, protegida } from "../controllers/Controlador.controller";
import validateJWT from "../middlewares/validar-jwt";

const router = Router();

router.get("/publica", publica);
router.get("/protegida", [validateJWT], protegida);
router.post("/login", login);

export default router;