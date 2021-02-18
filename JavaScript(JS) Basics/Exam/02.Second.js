function solve(task, score, course) {
  task = Number(task);
  score = Number(score);

  let points = 0;
  let coeficient = 0;

  if (task == `1`) {
    if (course == `Basics`) {
      points = 8;
    } else if (course == `Fundamentals`) {
      points = 11;
    } else if (course == `Advanced`) {
      points = 14;
    }
  } else if (task == `2`) {
    if (course == `Basics`) {
      points = 9;
    } else if (course == `Fundamentals`) {
      points = 11;
    } else if (course == `Advanced`) {
      points = 14;
    }
  } else if (task == `3`) {
    if (course == `Basics`) {
      points = 9;
    } else if (course == `Fundamentals`) {
      points = 12;
    } else if (course == `Advanced`) {
      points = 15;
    }
  } else if (task == `4`) {
    if (course == `Basics`) {
      points = 10;
    } else if (course == `Fundamentals`) {
      points = 13;
    } else if (course == `Advanced`) {
      points = 16;
    }
  }
  points = points / 100;
  coeficient = score * points;

  if (task == `1` && course == `Basics`) {
    coeficient = 0.8 * coeficient;
  }
  if (course == `Advanced`) {
    coeficient = 1.2 * coeficient;
  }
  console.log(`Total points: ${coeficient.toFixed(2)}`);
}
solve(2, 95, `Advanced`);
