var app = require('./requires/app_v1-1');
// var swaggerUi = require('swagger-ui-express');
// var swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});