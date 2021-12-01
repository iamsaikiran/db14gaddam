var Mazda = require('../models/mazda'); 
 
 
 
// for a specific mazda. 
exports.mazda_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Mazda.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    }
}; 
 
// Handle Mazda create on POST. 
exports.mazda_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Mazda(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.cost = req.body.cost; 
    document.model = req.body.model; 
    document.color = req.body.color;
    try{ 
        if(document.cost < 500 || document.cost>19999){
            throw new TypeError("Please add cost in between 500 and 19999")
        }
        else{
            let result = await document.save(); 
            res.send(result);
        } 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle mazda delete form on DELETE. 
exports.mazda_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Mazda.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};
 
// Handle mazda update form on PUT. 
exports.mazda_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Mazda.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.cost)  toUpdate.cost = req.body.cost; 
        if(req.body.model) toUpdate.model = req.body.model; 
        if(req.body.color) toUpdate.color = req.body.color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    }
};
// List of all Mazdas 
exports.mazda_list = async function(req, res) { 
    try{ 
        theMazdas = await Mazda.find(); 
        res.send(theMazdas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// VIEWS 
// Handle a show all view 
exports.mazda_view_all_Page = async function(req, res) { 
    try{ 
        theMazdas = await Mazda.find(); 
        res.render('mazda', { title: 'Mazda Search Results', results: theMazdas }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

exports.mazda_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Mazda.findById( req.query.id) 
        res.render('mazdadetail',  
{ title: 'Mazda Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for creating a mazda. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.mazda_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('mazdacreate', { title: 'Mazda Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for updating a mazda. 
// query provides the id 
exports.mazda_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Mazda.findById(req.query.id) 
        res.render('mazdaupdate', { title: 'mazda Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.mazda_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Mazda.findById(req.query.id) 
        res.render('mazdadelete', { title: 'Mazda Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};