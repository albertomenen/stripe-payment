import {Router} from "express";
import {createSession} from "../controlers/payment.controler.js"

const router = Router()

router.post("/create-checkout-session", createSession)
router.get("/success", (req, res) => res.redirect("/public/success.html"))
router.get("/cancel", (req, res) => res.redirect("/"))


export default router