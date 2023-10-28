const express = require ('express');

const morgan = require ('morgan');
const cors = require ('cors');
const { APP_PORT } = require ('./config/config');

const app = express();


app.use(cors())
app.use(morgan('dev'))

const port = APP_PORT || process.env.PORT;


app.listen(port, () => {
    console.log(`App has been strated on ${port}`)
})