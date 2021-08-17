/*
1. Entidades como palabras clave como sustantivos.
2. Crear ID, URL o endpoints para acceder a los recursos
3. Accede a conjunto de elementos, colleciones.
Recurso = cada album por separado.
Conjunto en plural*
para entrar a 1 Recurso específico de colección /albumes/{id}
/artistas/2/albumes/{id}, se puede acceder de varias maneras.
4.- El endpoint tiene que devolver un json
ej:
*/
/*{
    "link":"http://domain.com/api/genres",
    "total_items":5,
    "data":[
        {"id":1,"name":"Rock","link":"http://domain.com/api/genres/1"},
        {"id":2,"name":"Pop","link":"http://domain.com/api/genres/2"},
        {"id":3,"name":"Blues","link":"http://domain.com/api/genres/3"},
        {"id":4,"name":"Jazz","link":"http://domain.com/api/genres/4"},
        {"id":5,"name":"Techno","link":"http://domain.com/api/genres/5"}
    ]
}*/
/*
Link al mismo endpoint, es un json, tiene info genérica, información especifica del recurso.
*/
/*
Asociar a los métodos con los HTTP, get, post, put y patch y delete.
GET /generos,
POST /generos (enlace de consulta del creado y json),
PUT /generos (reemplazar el 100% de un recurso existente)
PATCH /generos parche, actualizar modificar PARCIALMENTE un dato.
DELETE /generos borra recurso no COLECCIONES.
*/

module.exports = {
    list: (req,res)=>{
        DB.movie.findAll()
        .then(movies=>{
            return res.status(200).json({total:movies.length,
            data:movies,
        status:200})
        })
    },
    show:(req,res)=>{
        DB.movie.findByPk(req.params.id)
        .then(movie=>{
            return res.status(200).json({
            data:movies,
        status:200
    })})},
    store:(req,res)=>{
        DB.movie.create(req.body)
        .then(movie=>{
            return res.status(200).json({
            data:movies,
        status:200,
        created:"ok"
    })})
    },
    delete:(req,res)=>{
        DB.movie.
        destroy({ where: 
            {id: req.params.id}}).
        then(response=>{
            return res.json(response);
        })    
    },
    search:(req,res)=>{
        DB.Movie.findAll({
            where:{
                title:{[Op.like]: '%' + req.query.keyword+'%'}
            }
        }).then(movies=>{
            return res.status(200).json(movies);
        })
    }
}