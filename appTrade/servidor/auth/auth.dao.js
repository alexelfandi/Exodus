// no de si usarlo

const authSchema = require('./auth.model');
authSchema.statics = {
    create: function (data, cb){
        const user = new this(data);
        user.save(cb);
    },
    login: function(query, cb){
        this.find(query, cb);
    }
}
