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
    talking: [
      {
        character: chardata.Valentino, 
        text: "hello molly i will be your caddy today"
      },
      {
        character: chardata.molly, 
        text: "are you an orangutan?"
      },
      {
        character: chardata.Valentino, 
        text: "A cheeky one! I graduated jungle school with a minors in mini golf! so im here to help!"
      },
      {
        character: chardata.molly, 
        text: "so what your gonna give me advice?"
      },
      {
        character: chardata.Valentino, 
        text: "yep and I have some for this hole!"
      }
    ],
    choices: [
      { label: "take the shot", next: "takeshot1", scoreIncrement: 3  },
      { label: "talk to Valentino", next: "talkVal1", scoreIncrement: [1,2] }
    ],
    requiresRoll: false,
    backgroundImage: "/backgroundimgs/bg-1.png"

  },
  takeshot1:{
   

  }


};

export default storyData;
