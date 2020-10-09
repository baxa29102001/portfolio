const express = require('express');
const moongose = require('mongoose');
const path = require('path');
const app = express();

const env = process.env.NODE_ENV || 'dev';
const config = require(`./config/${env}`);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectDb = async () => {
    try {
        await moongose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        });
        console.log('Mongo is connected');
    } catch (error) {
        console.log(error);
    }
};
connectDb();
app.use('/', require('./routes/useRoutes'));

if (env === 'prod') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Port is working... ${PORT}`));
