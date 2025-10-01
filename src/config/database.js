const mongooes=require("mongoose");
const connectDB=async()=>{
   await mongooes.connect(
        "mongodb+srv://miralabhangi_db_user:HgfPhku3HfVahRlt@abhangimiral.2wxwkr1.mongodb.net/Tinder"
    );
};

module.exports={connectDB};