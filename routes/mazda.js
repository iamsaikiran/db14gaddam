var express = require('express'); 
const mazda_controlers= require('../controllers/mazda'); 
var router = express.Router(); 
 
/* GET mazdas */ 
router.get('/', mazda_controlers.mazda_view_all_Page );
router.get('/detail', mazda_controlers.mazda_view_one_Page);
router.get('/create', mazda_controlers.mazda_create_Page);
router.get('/update', mazda_controlers.mazda_update_Page);
router.get('/delete', mazda_controlers.mazda_delete_Page);

module.exports = router;

 