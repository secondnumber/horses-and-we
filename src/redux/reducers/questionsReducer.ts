export type InitialStateType = {
  questionsList: Array<QuestionType>;
};

export type QuestionType = {
  id: string;
  question: string;
  answer: string;
};
const initialState = {
  questionsList: [
    {
      id: '01',
      question: 'Bresaola hamburger sirloin?',
      answer:
        'Flank andouille leberkas, shoulder shankle prosciutto chicken corned beef cupim kevin ham buffalo. ' +
        'Cow short ribs shoulder pancetta alcatra pork chop.',
    },
    {
      id: '02',
      question: 'capicola jerky turducken meatloaf?',
      answer:
        'Meatloaf shank corned beef rump, alcatra chicken bacon turducken tongue. ' +
        'Burgdoggen drumstick short loin tongue shankle shank. Pig salami pancetta.',
    },
    {
      id: '03',
      question: 'filet mignon rump doner landjaeger?',
      answer:
        'Beef ribs meatloaf andouille tail pork belly bresaola tenderloin. ' +
        'Sirloin shank filet mignon rump. Jerky drumstick meatloaf sirloin ball tip landjaeger. ',
    },
    {
      id: '04',
      question: 'Meatloaf leberkas short loin?',
      answer:
        'Beef leberkas drumstick jowl flank burgdoggen strip \n' +
        'steak shoulder. Shankle tri-tip spare ribs turkey beef ribs fatback buffalo t-bone tail flank.',
    },
  ],
};

const questionsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  return state;
};

export default questionsReducer;
