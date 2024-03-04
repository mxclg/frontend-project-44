import gameEngine from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = () => {
  const startValue = getRandomNumber(1, 25);
  const stepValue = getRandomNumber(1, 25);

  const progressionLength = 10;
  const progressionArray = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(startValue + (stepValue * i));
  }

  const randomArrayIndex = getRandomNumber(0, progressionArray.length - 1);

  const hiddenElementArray = progressionArray.slice();
  hiddenElementArray[randomArrayIndex] = '..';

  return [progressionArray, hiddenElementArray];
};

const getMissingElement = (progressionArray, hiddenElementArray) => {
  let missingElement;
  for (let i = 0; i < progressionArray.length; i += 1) {
    if (progressionArray[i] !== hiddenElementArray[i]) {
      missingElement = progressionArray[i];
      break;
    }
  }
  return missingElement;
};

const createTaskData = () => {
  const [progressionArray, hiddenElementArray] = generateProgression();
  const hiddenElementProgression = hiddenElementArray.join(' ');

  const askQuestion = `Question: ${hiddenElementProgression}`;
  const resultStr = getMissingElement(progressionArray, hiddenElementArray).toString();

  return [askQuestion, resultStr];
};

const brainProgression = () => {
  gameEngine(gameRules, createTaskData);
};

export default brainProgression;
