import express from 'express';
import bodyParser = require('body-parser');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import url = require('url');
import services from '../services.json';
import { proxy } from './lib/proxy';
import { restreamer } from './lib/restreamer';
import { cors }  from 'cors';

export class APIGateway {


  private readonly expressInstance: any = express();

  constructor() {
    // Настройваме библиотеки, които обработват заявката.
    this.setUpApp(this.expressInstance);
    // Създаваме път, който достъпваме за да проверим дали сървъра работи.
    this.setWelcomeRoute(this.expressInstance)
    // имплементираме функционалността, където казваме при коя заявка към коя услуга да изисква отговор
    this.bootstrapServices(this.expressInstance);
    this.addCors(this.expressInstance);
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

  private addCors(app) {
    var allowedOrigins = ['http://localhost:4200'];
    console.log("ADDED CORS HEADER");
    app.use(cors());
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

  bootstrapServices(app) {
    // Обхождаме всички конфигурации в services.json конфигурационен файл
    services.forEach(service => {


      const { name, host, port } = service
      const rootPath = service.rootPath || "";
      const protocol = service.protocol || "http";

      console.log(`Adding service: ${protocol}://${host}:${port}/${rootPath}`);

      // Тук достъпваме написани от нас библиотеки, които искаме да
      // повлиаят на заявката по някакъв начин (това е добро място за имплементиране на автентикация)
      let middleware = [];
      if (service.middleware) {
        middleware = service.middleware.map(text => require(`./middleware/${text}`));
      }

      // restream-ваме заявката за да може да бъде препратена.
      middleware.push(restreamer());

      // настройваме сървърът да препраща заявките към зададената конфигурация
      app.use(`/api/${name}*`, middleware, (req, res, next) => {
        const newPath = url.parse(req.originalUrl).pathname.replace(`/api/${name}`, rootPath);
        console.log(`Forwarding request to: ${newPath}`);
        proxy.web(req, res, { target: `${protocol}://${host}:${port}/${newPath}` }, next);
      });

    });
  }

  public getApp = () => this.expressInstance

};