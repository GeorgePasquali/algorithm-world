const Article = require('../Models/Article');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.traitId || !req.body.articleDescription) {
        return res.status(400).send({
            message: "Note traitId and articleDescription can not be empty"
        });
    }

    // Create a Note
    const article = new Article({
        traitId: req.body.traitId, 
        articleDescription: req.body.articleDescription,
        cCode: req.body.cCode,
        jsCode: req.body.jsCode,
    });

    // Save Note in the database
    article.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Article."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Article.find()
    .then(articles => {
        res.send(articles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Articles."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Article.findById(req.params.traitId)
    .then(articles => {
        if(!articles) {
            return res.status(404).send({
                message: "articles not found with id " + req.params.traitId
            });            
        }
        res.send(articles);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "articles not found with id " + req.params.traitId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving articles with id " + req.params.traitId
        });
    });
};