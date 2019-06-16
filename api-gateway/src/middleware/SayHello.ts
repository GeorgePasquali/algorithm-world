export default function(req, res, next) {
    const message = { message: 'Hello from the API Gateway!' };
    // добавяме съобщение в заглавния обект на заявката
    req.headers['gateway-message'] = JSON.stringify(message);
    // продължаваме напред към друг междинен скрипт или към друга микро услуга
    next();
  };
  