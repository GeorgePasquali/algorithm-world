module.exports = (app) => {
    const articleController = require('../Controllers/article');

    // Create a new Article
    app.post('/api/v1/articles', articleController.create);

    // Retrieve all Article
    app.get('/api/v1/articles', articleController.findAll);

    // Retrieve a single Article with noteId
    app.get('/api/v1/articles/:articleId', articleController.findOne);

    // Update a Article with articleId
    //app.put('/articles/:articleId', articleController.update);

    // Delete a Article with articleId
    //app.delete('/articles/:articleId', articleController.delete);
}