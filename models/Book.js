const Sequelize=require('sequelize')

const sequelize=new Sequelize('Library','root','root',{dialect:'mysql'})

module.exports= Book=sequelize.define('Book',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    author:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
},{
    tableName:"Book"
}
)

Book.sync()

sequelize.authenticate().then(()=>{
    console.log('Database connection is Successful')
}).catch((err)=>{
    console.log(err)
})
