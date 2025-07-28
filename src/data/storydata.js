import chardata from "./chardata";

const storyData = {
  start: {
    talking: [
      {
        character: chardata.molly, 
        text: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestte"
      }
    ],
    choices: [
      { label: "take the shot", next: "" },
      { label: "ask for tips", next: "" }
    ],
    requiresRoll: false,
    backgroundImage: "/backgroundimgs/testbg.jpg"
  }
};

export default storyData;
