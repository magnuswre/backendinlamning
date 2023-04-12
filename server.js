const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => console.log('http://localhost:' + PORT))

mongoose.connect(process.env.MONGO_URI)
    .then(console.log('DB connected'))
    .catch((err) => console.log(err))


    // Man ska kunna registrera en användare med en POST och användaren ska då få en jsonwebtoken 
    // tillbaka som innehåller relevant information.

    // Man ska kunna logga in en registrerad användare med en POST och användaren ska då få en 
    // jsonwebtoken tillbaka som innehåller relevant information.

    // Man ska kunna spara en order om man är inloggad. Ordern ska innehålla en lista av order-rader. 
    // Varje order-rad ska innehålla en produkt samt hur många av den produkten som är tilllagda.

    // Varje order ska vara kopplad till en specifik användare.
    
    // Man ska kunna hämta alla ordrar som är kopplade till den specifika användaren som är inloggad genom att göra en 
    // GET och skicka med en Bearer token.