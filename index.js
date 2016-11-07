class President {
  constructor(name, politicalParty, yearsInOffice, homeState){
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!"
  }

  passBill() {
    return "You can do that!"
  }

  doCharity() {
    return "I like to help people."
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }
  //
  // sayHi() {
  //   `Hi, my name is ${name}. I am from ${homestate}. I represent the ${politcalParty}s, and was in office ${yearsInOffice}.`
  // }
}

President.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
}

var washington = new President("George Washington", "Independent", 8, "Virginia")

var lincoln = new President("Abraham Lincoln", "Republican", 4, "Kentucky")

var nixon = new President("Richard Nixon", "Republican", 5, "California")

var carter = new President("Jimmy Carter", "Democrat", 4, "Georgia")
