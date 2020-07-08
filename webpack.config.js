module.exports={
    mudule:{
        rules:[
            {test:/\.(JPG|jpg|png|gif|bmp|jpeg|ico)$/,use:'url-loader?limit=7631$name=[hash:8]-[name].[ext]'},
        ]
    }
}