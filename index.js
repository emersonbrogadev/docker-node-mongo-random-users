import express from 'express';
import routes from 'routes';

const PORT = 3000;

const app = express();

app.use('/', routes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
