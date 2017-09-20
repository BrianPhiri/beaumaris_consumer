module.exports = {
    getWanted: function(next){
        Wanted.find().exec(function(err, wanted){
            if(err) throw err;
            next(wanted)
        })
    },

    addWanted: function(wantedBody, next){
        Wanted.create(wantedBody).exec(function(err,wanted){
            if(err) throw err;
            next(wanted)
        })
    }
}