const mongoose = require('mongoose');
const axios = require('axios')
const dotenv = require('dotenv');
const Recipe = require('../models/recipesModel');
dotenv.config({path: './config.env'})

let DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => console.log('DB is connected'));

const data = [];

const fetchAllData = async () => {
    try {
        const response = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
        const allId = response.data.recipes.map(item => {
            return item.recipe_id
        })
        
  
        allId.forEach( async (id) => {
            const allData = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
            
            data.push(allData.data)
        })

        setTimeout(() => {
            return data
        }, 1000)
    } catch (err) {
        console.log('err')
    }
}

const importData = async() => {
    try{
        fetchAllData()
        setTimeout(async () => {
            await Recipe.create(data)
        }, 1500)
        
        
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