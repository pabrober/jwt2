import { generateJWT } from "../helpers/generar-jwt";

export const login = async (req, res) => {
    try {
        const { nombre, pass } = req.body

        const infoNombre = 'admin'
        const infoPass = '1234'

        if (nombre != infoNombre && pass != infoPass) {
            res.status(400).json({
                msg: "Usuario o Contraseña son incorrectos",
            });
            return;
        }

        const token = await generateJWT(nombre);
        res.json({
            result: {
                nombre: nombre,
            },
            token,
        });

    } catch (error) {
        res.status(500).json(error);
    }
}

export const protegida = async (req,res) => {
    try {
        res.json('esta es una api protegida');
    } catch (error) {
        res.status(500).json(error);
    }
}

export const publica = async (req,res) => {
    try {
        res.json('esta es una api sin seguridad o publica');
    } catch (error) {
        res.status(500).json(error);
    }
}
