export const SEND_EMAIL = 'SEND_EMAIL';

export const sendEmail = (email, name) => (
  {
    type: SEND_EMAIL,
    payload: {
      email,
      name,
    },
  }
);

export const SEND_QUESTIONS = 'SEND_QUESTIONS';

const sendQuestions = (payload) => (
  {
    type: SEND_QUESTIONS,
    payload,
  }
);

export const DECREASE_TIMER = 'DECREASE_TIMER';

export const decreaseTimer = () => ({
  type: DECREASE_TIMER,
});

export const STOP_TIMER = 'STOP_TIMER';

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const SAVE_CORRECT_ANSWER = 'SAVE_CORRECT_ANSWER ';

export const saveCorrectAnwer = (score) => ({
  type: SAVE_CORRECT_ANSWER,
  payload: score,
});

export const sendToken = (payload) => ({
  type: SEND_TOKEN,
  payload,
});

export const SEND_SCORE = 'SEND_SCORE';

export const sendScore = (payload) => (
  {
    type: SEND_SCORE,
    payload,
  }
);

export const IS_VISIBLE = 'IS_VISIBLE';

export const isVisible = (payload) => (
  {
    type: IS_VISIBLE,
    payload,
  }
);

export const requestToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  localStorage.setItem('token', data.token);
};

// thunk
export const fetchQuestions = (token) => async (dispatch) => {
  console.log(token);
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const data = await response.json();
  dispatch(sendQuestions(data.results));
  return data.response_code;
};
