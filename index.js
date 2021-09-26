const app = require('express')();
const PORT = process.env.PORT || 8080;

app.listen(
    PORT,
    () => {
        console.warn(`App listening on http://localhost:${PORT}`);
    });