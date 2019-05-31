import express from 'express';
import bodyParser = require('body-parser');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import url = require('url');
import services from '../services.json';
import { proxy } from './lib/proxy';
import { restreamer } from './lib/restreamer';

export class APIGateway {


  private readonly expressInstance: any = express();

  constructor() {
    this.setUpApp(this.expressInstance);
    this.setWelcomeRoute(this.expressInstance)
    this.bootstrapServices(this.expressInstance);
  }

  /**
   * Set up the app
   */
  setUpApp(app) {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
  }

  /**
   * A welcomming message that tells the user the api gateway is running
   * @param app express instance
   */
  setWelcomeRoute(app) {
    app.get('/', function (req, res) {
      res.json({
        message: "The API Gateway is up!"
      });
    });
  }

  bootstrapServices(app){
    services.forEach(service => {

      const {name, host, port} = service
      const rootPath = service.rootPath || "";
      const protocol = service.protocol || "http";
      
      console.log(`Adding service: ${protocol}://${host}:${port}/${rootPath}`);

      let middleware = [];
      if (service.middleware) {
        middleware = service.middleware.map(text => require(`./middleware/${text}`));
      }

      // need to restream the request so that it can be proxied
      middleware.push(restreamer());

      

      app.use(`/api/${name}*`, middleware, (req, res, next) => {
        const newPath = url.parse(req.originalUrl).pathname.replace(`/api/${name}`, rootPath);
        console.log(`Forwarding request to: ${newPath}`);
        proxy.web(req, res, { target: `${protocol}://${host}:${port}/${newPath}` }, next);
      });

    });
  }

  public getApp = () => this.expressInstance

};