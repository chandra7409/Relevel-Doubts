Architecture: {
    MVC:{
        Model:{
            Database
            ext resource
            orm / odm (mongoose / sequelize)
        }
        View:{
            static pages / dynamic templates: ejs, hbs
            routes
        }
        Controller:{
            Logic
            Services
        }
    }
    Misc:{
        Middlewares:{
            used with router
            token authorization
            data parsing
        }
        Utils:{
            object prototypes
        }
        Config:{
            server configuration files
            db config
        }
    }
}