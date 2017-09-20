/**
 * WantedController
 *
 * @description :: Server-side logic for managing wanteds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req,res){
        WantedService.getWanted(function(wanted){
            res.json(wanted)
        })
    },

    create: function(req,res){
        var wantedVal = (req.body) ? req.body : undefined
        WantedService.addWanted(wantedVal, function(sucess){
            res.json(sucess)
        })
    }
};

