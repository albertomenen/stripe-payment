import Stripe from "stripe"
import {SECRET_KEY_STRIPE} from "../routes/confij.js"

const stripe = new Stripe(SECRET_KEY_STRIPE)


export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: "course",
                        description: "Negotiation course",
                    },
                    unit_amount: 100000,
                },
                quantity: 1,
            },
            {
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: "course2",
                        description: "Trading course",
                    },
                    unit_amount: 1000000,
                },
                quantity: 1,
            }
        ],
        mode: "payment",
        success_url : "http://localhost:3000/success",
        cancel_url : "http://localhost:3000/cancel"
    })
    return res.json(session)

}