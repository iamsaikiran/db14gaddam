var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var mazda_controller = require('../controllers/mazda'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// MAZDA ROUTES /// 
 
// POST request for creating a Mazda.  
router.post('/resource/mazda', mazda_controller.mazda_create_post); 
 
// DELETE request to delete Mazda. 
router.delete('/resource/mazda/:id', mazda_controller.mazda_delete); 
 
// PUT request to update Mazda. 
router.put('/resource/mazda/:id', 
mazda_controller.mazda_update_put); 
 
// GET request for one Mazda. 
router.get('/resource/mazda/:id', mazda_controller.mazda_detail); 
 
// GET request for list of all Mazda items. 
router.get('/resource/mazda', mazda_controller.mazda_list); 
 
module.exports = router; 