module.exports=(sequelize,DataTypes)=>{
     const patient=sequelize.define("patient",{
            "fName":{
                type:DataTypes.STRING,
                allowNull:false
            },
            "lName":{
                type:DataTypes.STRING,
                allowNull:false
            },
            "faName":{
                type:DataTypes.STRING,
                allowNull:false
            },
            "address":{
                type:DataTypes.STRING,
                allowNull:false
            },
            "age":{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            "userName":{
                type:DataTypes.STRING,
                allowNull:false
            },
            "password":{
                type:DataTypes.STRING,
                allowNull:false
            },
            "birthDate":{
                type:DataTypes.STRING,
                allowNull:false
            },
            "mobileNumber":{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            "landNumber":{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            "familyStation":{
                type:DataTypes.STRING,
                allowNull:false 
            }
     });
     patient.associate=model=>{
           patient.hasMany(model.meeting,{onDelete:"CASCADE"});
           patient.belongsTo(model.doctor);
           patient.belongsTo(model.scrtiera);
     };
     return patient;
};