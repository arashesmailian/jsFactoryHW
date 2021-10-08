function commentFactory (author , text ){
    return{
        author,
        date : new Date(),
        rate  : 0 ,
        text
    }

}
function foodFactory(name , type , price , deliverTime  , isReady  ) {
    return{
        name ,
        type  ,
        price  ,
        deliverTime  ,
        rate : 0,
        comment : [] ,
        isReady ,
        order : function isPremiumUser(a){
            if (a){
                console.log(0.8*price , this.rate )
            }
            else {
                console.log(price , this.rate )
            }
        }
    }
}

// const pizza = foodFactory("mix", "fastfood" , "60000" , "45 minutes" , "Yes"  )
// const pizzaCommnet = commentFactory("akbar" , "This was a good pizza")
// pizza.comment.push(pizzaCommnet) ;
// console.log(pizza)
// pizza.order(true)

function CommentConstructor  (author , text) {
    this.author = author ;
    this.date = new Date() ;
    this.rate = 0 ;
    this. text = text
}

function FoodConstructor  (name , type , price , deliverTime  , isReady )  {
    this.name = name
    this.type  = type
    this.price = price
    this. deliverTime = deliverTime
    this.rate = 0
    this.comment = []
    this. isReady = isReady
    this.order = function isPremiumUser(a) {
        if (a) {
            console.log(0.8 * price, this.rate)
        } else {
            console.log(price, this.rate)
        }
    }
}

const pizza = new FoodConstructor("mix", "fastfood" , "60000" , "45 minutes" , "Yes" )
// const pizzaComment = new CommentConstructor("akbar" , "This was a good pizza")
// pizza.comment.push(pizzaComment) ;
// console.log(pizza)
// pizza.order(true)


//---------------------------/// Exercise 2 ////////////////----------------------///

const obj1 = {
    key0 : false ,
    key1 : "vall" ,
    key2 : 20 ,
    key3 : [0 , 1 , 2] ,
    key4 : {name : "Mahed"}
}

const obj2 = {
    key0 : false ,
    key1 : "vall" ,
    key2 : 30 ,
    key3 : [0 , 1 , 2] ,
    key4 : {name : "asghar"}
}



const objectChecker = (object1 , object2) => {
    if (object1.length === object2.length){
        for (i = 0 ; i <= object1.length ; i++){
            if (object1[i] !== object2[i]){
                return false
            }
        }
        return true
    } else {
        return false
    }
}

// console.log(objectChecker()(obj1 , obj2))
