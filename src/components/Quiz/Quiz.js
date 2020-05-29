import React, { Component } from "react";
import QuizComponent from "../QuizComponent/QuizComponent";
import { QuizData } from "../../questions.js";
import ProgressBar from "../../ProgressBar/ProgressBar";
import "./Quiz.css";
import Button from "../Buttons/Button";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //      userAnswer: false,
      currentQuestion: 0,
      questions: QuizData,
      quizEnd: false,
      score: 0,
      width: 10,
    };
  }

  checkAnswer = (answer) => {
    const {
      //    userAnswer,
      score,
      questions,
      width,
      currentQuestion,
      quizEnd,
    } = this.state;

    if (questions[currentQuestion].id < questions.length) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        width: width + 10,
      });

      if (answer === questions[currentQuestion].answer) {
        this.setState({
          score: score + 1,
        });
      }
    } else {
      this.setState({ quizEnd: true });
      if (answer === questions[currentQuestion].answer) {
        this.setState({
          score: score + 1,
        });
      }
    }
  };

  rifilloLojen = () => {
    this.setState({
      //  userAnswer: null,
      currentQuestion: 0,
      questions: QuizData,
      quizEnd: false,
      score: 0,
      width: 10,
    });
  };

  render() {
    const {
      questions,
      width,
      currentQuestion,
      //userAnswer,
      quizEnd,
      score,
    } = this.state;

    if (quizEnd) {
      return (
        <div className="Quiz">
          <h3>
            {" "}
            Loja ka perfunduar Ju keni qelluar {score} pike nga{" "}
            {questions.length}
          </h3>
          <Button
            name="Rifillo"
            ngjyra="#FF7F27"
            color="black"
            metoda={this.rifilloLojen}
          />
        </div>
      );
    } else {
      return (
        <div className="Quiz">
          <h4>Pyetja: {questions[currentQuestion].id}</h4>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="butonat">
            <Button
              name="Sakte"
              ngjyra="#22B14C"
              color="white"
              metoda={() => this.checkAnswer(true)}
            />
            <Button
              name="Pa sakte"
              ngjyra="#ED1C24"
              color="white"
              metoda={() => this.checkAnswer(false)}
            />
          </div>
          <h3>Total te qelluara :{score}</h3>
          <Button
            name="Rifillo"
            ngjyra="#FF7F27"
            color="black"
            metoda={this.rifilloLojen}
          />
          <div className="progress-bar">
            <span>
              <strong>{`Pyetja Aktuale ${currentQuestion + 1}/${
                questions.length
              }`}</strong>
            </span>
            <div style={{ float: "right" }}>
              <strong>Total Pyetje :{questions.length}</strong>
            </div>

            <ProgressBar width={width} />
          </div>
        </div>
      );
    }
  }
}

export default Quiz;
