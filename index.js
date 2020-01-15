const express = require('express');

const app = express();
app.use(express.json())

//Métodos HTTP: GET, POST, PUT, DELETE.

// Tipos de parâmetros:
// Query Params: request.query (Filtros, paginação, ordenação, ...)
// Route Params: request.params (indentificar um recurso na alteração ou remoção)
// Body: resquest.body(Dados para alteração ou criação de um registro)


app.get('/', (request, response) => {
    return response.json({ message: 'Hello Word' })
})

app.listen(3333);