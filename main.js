// This is to set everything as a transformer and if they are an autobot or descipticon
class Transformers{
  constructor(faction,name,rank){
    this._faction=faction
    this._name=name
    this._rank=rank
  }
  get faction(){
    return this._faction
  }
  get name(){
    return this._name
  }
  get rank(){
    return this._rank
  }
  rollCall(){
    if(this._faction=='Autobot'){
      console.log(`${this._faction}'s, rollout!`)
    }else{
      console.log(`${this._faction}'s, transform!`)
    }
}
}


      // This is to divide into groups within factions (ex. insecticons,dinobots)
      class Groups extends Transformers{
        constructor(faction,group,name,rank){
          super(name,rank,faction)
          this._group=group
        }
        get group(){
          return this._group
      }
      groupSpeak(){
        console.log(`Let's go, ${this._group}!`)
      }       
    }

    // This divides Groups even further for Combiners (ex.Superion)
    class Combiners extends Groups{
      constructor(faction,group,combinerName){
        super(faction,group)
        this._combinerName=combinerName
      }
      get combinerName(){
        return this._combinerName
      }
      combinerSpeak(){
        alert(`My name is ${this._combinerName} and I fight with the ${this.
          _group}.`)
      }
    }


// This is for creating new characters
let optimus=new Transformers('Autobot','Optimus Prime','Leader')
let bumblebee=new Transformers('Autobot','Bumblebee','Scout')
let starscream=new Transformers('Decepticon','Starscream','Warrior')
let grimlock=new Groups('Autobot','Dinobots','Grimlock','Warrior')
let motormaster=new Groups('Decepticon','Stunticons','Motor Master','Team Leader')
let backkick=new Groups('Decepticon','Insecticons','Scientist')
let superion=new Combiners('Autobot','Aerialbots','Superion')
let menasor=new Combiners('Decepticon','Stunticons','Menasor')

// This is for creating factions
let transformers=
let autobots=[]
let decepticons=[]

// This is to make the whole factions do something
// for(robot of autobots){
//   robot.rollCall
// }

// for (robot of decepticons){
//   robot.rollCall()
// }
