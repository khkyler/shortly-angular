var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    helpers     = require('./helpers.js');//, // our custom middleware
    //linksController = require('./linkController.js');


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  var userRouter = express.Router();
  var linkRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));


  app.use('/api/users', userRouter); // use user router for all user request

  // authentication middleware used to decode token and made available on the request
  // /api/links/
  app.use('/api/links', helpers.decode, linkRouter);
  // app.use('/api/links', linkRouter); // user link router for link request
  // app.use('/:code', function (req,res){
  //   console.log(req.headers['x-access-token']
  //   res.redirect('/api/links/' + req.params.code);
  // });
  // /DFjk4f89
  app.use('/', linkRouter);
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../users/userRoutes.js')(userRouter);
  require('../links/linkRoutes.js')(linkRouter);
};
