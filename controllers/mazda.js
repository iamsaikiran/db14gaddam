var Mazda = require('../models/mazda'); 
 
// List of all mazdas 
exports.mazda_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: mazda list'); 
}; 
 
// for a specific mazda. 
exports.mazda_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: mazda detail: ' + req.params.id); 
}; 
 
// Handle mazda create on POST. 
exports.mazda_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: mazda create POST'); 
}; 
 
// Handle mazda delete form on DELETE. 
exports.mazda_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: mazda delete DELETE ' + req.params.id); 
}; 
 
// Handle mazda update form on PUT. 
exports.mazda_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: mazda update PUT' + req.params.id); 
}; 