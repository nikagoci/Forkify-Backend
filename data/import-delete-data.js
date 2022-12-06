const mongoose = require('mongoose');
const axios = require('axios')
const dotenv = require('dotenv');
const Recipe = require('../models/recipesModel');
dotenv.config({path: './config.env'})

let DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => console.log('DB is connected'));

const fetchAllData = async () => {
    try {
        const response = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
            return item.recipe_id
        })
        
        const data = [];
        allId.forEach(async (id) => {
            const allData = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            data.push(allData.data)
        })

        return data
    } catch (err) {
        console.log('err')
    }
}

const importData = async() => {
    try{
        console.log(fetchAllData())

        console.log('Data is imported')
    }catch(err) {
        console.log(err)
    }
}

const deleteData = async() => {
    try{
        await Recipe.deleteMany();
        console.log('Data is deleted')
    }catch(err){
        console.log(err)
    }
}

if(process.argv[2] === '--import'){
    importData()
} else if(process.argv[2] === '--delete'){
    deleteData()
}