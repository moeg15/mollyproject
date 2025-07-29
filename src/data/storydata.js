import chardata from "./chardata";

const storyData = {
  start: {
    talking: [
      {
        character: chardata.molly, 
        text: "what where am i?"
      },
      {
        character: chardata.evilGolfBall, 
        text: "I have captured you"
      },
      {
        character: chardata.molly, 
        text: "who are you!?"
      },
      {
        character: chardata.evilGolfBall, 
        text: "I am the evil golf ball!!!!"
      },
      {
        character: chardata.molly, 
        text: "is that name not a bit on the nose?"
      },
      {
        character: chardata.evilGolfBall, 
        text: "Is tHaT NaMe nOt a bIt oN ThE NoSe??"
      },
      {
        character: chardata.molly, 
        text: "......."
      },
      {
        character: chardata.evilGolfBall, 
        text: "......."
      },
      {
        character: chardata.molly, 
        text: "......."
      }, {
        character: chardata.evilGolfBall, 
        text: "Well if you want to escape you must defeat my mini golf course of doom!"
      }, {
        character: chardata.molly, 
        text: "and if i dont?"
      }, {
        character: chardata.evilGolfBall, 
        text: "your boyfriend wont be able to have a sweet little treat for....."
      }, {
        character: chardata.evilGolfBall, 
        text: "72 whole hours!!!!!!"
      }
      
    ],
    choices: [
      { label: "help Moe!", next: "Dohelp" },
      { label: "Moe doesnt need a sweet treat", next: "dontHelp" }
    ],
    requiresRoll: false,
    backgroundImage: "/backgroundimgs/bg-0.png"
  },
  Dohelp:{


  }


};

export default storyData;
