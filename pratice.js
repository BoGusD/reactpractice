function solution(survey, choices) {
  let answer = "";
  const table = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      table[survey[i][0]] += 4 - choices[i];
    } else {
      table[survey[i][1]] += choices[i] - 4;
    }
  }

  answer += table["R"] >= table["T"] ? "R" : "T";
  answer += table["C"] >= table["F"] ? "C" : "F";
  answer += table["J"] >= table["M"] ? "J" : "M";
  answer += table["A"] >= table["N"] ? "A" : "N";

  return answer;
}
