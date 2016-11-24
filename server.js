const express = require('express');
const app = express();
const apiRoutes = require('./server/routes/api');

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 9090;
app.listen(PORT, process.env.IP, function() {
    /* eslint-disable */
    console.log(`Node is listening on port ${PORT}`);
});
