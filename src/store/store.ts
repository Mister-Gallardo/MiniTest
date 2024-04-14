import { makeAutoObservable } from "mobx";
import Questions from "../components/Questions";

export interface IQuestion {
  id: number;
  type: number;
  question: string;
  answers: string[];
}

type Questions = IQuestion[];

const LSquestionsString: string | null = localStorage.getItem('questions');
const LSquestions: Questions = LSquestionsString ? JSON.parse(LSquestionsString) : null;

class Test {
  questions: Questions = LSquestions ? LSquestions : [
    {
      id: 1,
      type: 1,
      question: "Как расшифровывается HTML?",
      // answerNumber: [1],
      answers: [
        "Язык веб-программирования",
        "Язык разметки гипертекста",
        "Язык разработки интерфейса",
        "Все вышеперечисленное",
      ],
    },
    {
      id: 2,
      type: 3,
      question: "Напишите название языка программирования для создания стилей",
      // answerNumber: [0],
      answers: ["CSS"],
    },
    {
      id: 3,
      type: 2,
      question:
        "Какие языки программирования используются для разработки фронтенда?",
      // answerNumber: [0, 2, 3],
      answers: ["HTML", "Java", "CSS", "JavaScript"],
    },
    {
      id: 4,
      type: 1,
      question: "Для чего используется JavaScript?",
      // answerNumber: [3],
      answers: [
        "Для разработки стилей",
        "Для создания элементов на странице",
        "Для создания логики и интерактивности веб-приложения",
        "Все вышеперечисленное",
      ],
    },
    {
      id: 5,
      type: 2,
      question: "Какие элементы являются блочными?",
      // answerNumber: [0, 1, 3],
      answers: ["div", "h1", "a", "p"],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  saveQuestionsToLocalStorage() {
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

  // loadQuestionsFromLocalStorage() {
  //   const storedQuestions = localStorage.getItem('questions');
  //   if (storedQuestions) {
  //     this.questions = JSON.parse(storedQuestions);
  //   }
  // }

  addQuestion(question: IQuestion) {
    this.questions.push(question);
    this.saveQuestionsToLocalStorage();
  }
}

export default new Test();
