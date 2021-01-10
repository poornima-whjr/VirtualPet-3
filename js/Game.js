class Game{
    constructor(){
     
    }

    readState(){
        var readState = database.ref("gameState");
        readState.on("value",function(data){
          gameState = data.val();
        })
      }
      
    changeState(state){
        database.ref("/").update({
          gameState : state
        })
      }
}