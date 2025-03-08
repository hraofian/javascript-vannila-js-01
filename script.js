function createCircle(radius){
    return{
        radius : radius,
        draw : function(){console.log("draw")}
    }
}

let circle1 =  createCircle(1)
console.log(circle1)
//2-53-00

