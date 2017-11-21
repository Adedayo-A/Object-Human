class Human {
  constructor(name,age,race,hairColor,eyeColor,skinColor) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.skinColor = skinColor;
    this.heart = true;
    this.happy = true;
    this.food = true;
    this.innovation = true;
  }
  
  static bodyParts(){
    return('Human have eyes, nose, mouth and many other body parts')
  }
  
  breath(){
    if(this.heart){
      return("Human is alive")
    }
    else{
      return "Human is dead"
    }
  }
  
  person(){
    return 'My name is ' + this.name + ', I am ' + this.age + ' years' + ', I am ' + this.race + '. My hair is ' + this.hairColor + ', My eye color is ' + this.eyeColor + ', and I have ' + this.skinColor + ' skin'
  }
  
  eat(){
    if(this.food===true){
      return 'Human is refreshed'
    } else{
      return 'Human is hungry'
    }
  }
  
  mood(){
    if(this.happy===true){
      return 'man is happy'
    } else{
      return 'man is sad'
    }
  }
  
  innovate(){
    if(this.innovation===true){
      return 'I am an innovator'
    }
    else{
      return 'We are required to innovate'
    }
  }
  
  year () {
    if(this.age >= 60){
      return 'Old age'
    }
    else if(this.age >= 40 && this.age < 60){
      return 'mid year period'
    }
    else if(this.age>=20 && this.age < 40){
      return 'Enjoy your youthful days'
    }
    else if(this.age>=13 && this.age < 20){
      return 'Teen years'
    }
    else if(this.age>=5 && this.age < 11){
      return 'Human is a young child'
    }
    else {
      return 'Human is a baby'
    }
  }
}

  class Profession extends Human {
    constructor(name,age,race,hairColor,eyeColor,skinColor,profession) {
      super(name,age,race,hairColor,eyeColor,skinColor)
      this.profession = profession
      this.job = 'job'
      
    }
    
    getProfession(){
      return 'I am a ' + this.profession
    }
    
    person(){
    return 'My name is ' + this.name + ', I am ' + this.age + ' years' + ', I am ' + this.race + '. My hair is ' + this.hairColor + ', My eye color is ' + this.eyeColor + ', and I have ' + this.skinColor + ' skin' + 'and I am a ' + this.profession + '.' + ' I work for ' + this.job
  }
  }