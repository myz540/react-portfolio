import Header from "../components/ReactQuiz/Header";
import Main from "../components/ReactQuiz/Main";
import Loader from "../components/ReactQuiz/Loader";
import Error from "../components/ReactQuiz/Error";
import StartScreen from "../components/ReactQuiz/StartScreen";
import Question from "../components/ReactQuiz/Question";
import NextButton from "../components/ReactQuiz/NextButton";

import ProgressBar from "../components/ReactQuiz/ProgressBar";
import FinishScreen from "../components/ReactQuiz/FinishScreen";
import Timer from "../components/ReactQuiz//Timer";
import Footer from "../components/ReactQuiz/Footer";
import { useQuiz } from "../context/QuizContext";

import styles from "./ReactQuiz.module.css";

export default function ReactQuiz() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <ProgressBar />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
