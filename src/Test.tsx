import { useState } from "react";

document.title = "Home Screen";

const Test = () => {
  const [state, setState] = useState<{}>({});

  const newData = [
    {
      question: "What do you want",
      answer: "apple",

      A: "apple",
      B: "orange",
      C: "pineapple",
      D: "banana",
    },
    {
      question: "What do you want",
      answer: "apple",

      A: "apple",
      B: "orange",
      C: "pineapple",
      D: "banana",
    },
    {
      question: "What do you want",
      answer: "apple",

      A: "apple",
      B: "orange",
      C: "pineapple",
      D: "banana",
    },
    {
      question: "What do you want",
      answer: "apple",

      A: "apple",
      B: "orange",
      C: "pineapple",
      D: "banana",
    },
    {
      question: "What do you want",
      answer: "apple",

      A: "apple",
      B: "orange",
      C: "pineapple",
      D: "banana",
    },
    {
      question: "What do you want",
      answer: "apple",

      A: "apple",
      B: "orange",
      C: "pineapple",
      D: "banana",
    },
  ];
  const handleMyOptions = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let correctAnwsers: Array<string> = [];
    let score: number = 0;
    let remake: string = "";
    let grade: string = "";
    let percentage: number = 0;

    for (let i = 0; i < newData.length; i++) {
      correctAnwsers.push(newData[i].answer);

      if (correctAnwsers[i] === Object.values(state!)[i]) {
        score++;
      }
    }

    percentage = Math.ceil((score / newData.length) * 100);

    if (percentage)
      if (percentage > 65) {
        remake = "Congratulation....";
      } else {
        remake = "Try again next month!!!";
      }

    if (percentage >= 0 && percentage <= 65) {
      grade = "F";
    } else if (percentage >= 66 && percentage <= 100) {
      grade = "A";
    }

    console.log("grade: " + grade);
    console.log("remake: " + remake);
    console.log("score: " + score);
    console.log("percentage: " + percentage);
  };

  return (
    <div className="text-blue-950 bg-slate-100 flex justify-center pt-32 w-full min-h-[100vh]">
      <div className="w-[500px] min-h-[500px] mb-20 rounded-md border shadow-sm bg-white p-4 ">
        <p className="mt-10 w-full text-center font-bold text-[20px] mb-10">
          Question
        </p>

        {newData?.map((props: any, i: number) => (
          <div className="my-4" key={i}>
            <p className="font-medium">
              <span className="mr-2 w-[100px]">{i + 1}.</span>
              {props.question}
            </p>
            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                id={props.A}
                value={props.A}
                name={`${i + 1}`}
                onChange={(e: any) => handleMyOptions(e)}
                className="radio radio-sm checked:bg-green-700"
              />
              <label htmlFor={props.A}>{props.A}</label>
            </p>
            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                id={props.B}
                value={props.B}
                name={`${i + 1}`}
                onChange={(e: any) => handleMyOptions(e)}
                className="radio radio-sm checked:bg-green-700"
              />
              <label>{props.B}</label>
            </p>
            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                id={props.C}
                value={props.C}
                name={`${i + 1}`}
                onChange={(e: any) => handleMyOptions(e)}
                className="radio radio-sm checked:bg-green-700"
              />
              <label>{props.C}</label>
            </p>
            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                id={props.D}
                value={props.D}
                name={`${i + 1}`}
                onChange={(e: any) => {
                  handleMyOptions(e);
                }}
                className="radio radio-sm checked:bg-green-700"
              />
              <label>{props.B}</label>
            </p>
          </div>
        ))}

        <div className="mt-10" />
        <div>
          <button className="btn btn-neutral rounded-md" onClick={handleSubmit}>
            Submit Question
          </button>
        </div>
        <div className="mt-32" />
      </div>
    </div>
  );
};

export default Test;

{
  /* {data?.map((props: any, i: number) => (
          <div className="my-4" key={i}>
            <p className="font-medium">
              <span className="mr-2 w-[100px]  ">{i + 1}.</span>
              {props.question}
            </p>
            <p className="ml-10 mt-2 ">
              {props?.options.map((el: any, i: number) => (
                <div>
                  <div className="flex">
                    <input
                      type="radio"
                      className=" mr-3"
                      id={`${i}`}
                      name={`${i}`}
                      value={`
                      ${
                        i === 0
                          ? `${el.A}`
                          : i === 1
                          ? `${el.B}`
                          : i === 2
                          ? `${el.C}`
                          : i === 3
                          ? `${el.D}`
                          : null
                      }`}
                    />

                    <label htmlFor={`${i}`}>{el.A}</label>
                    <label htmlFor={`${i}`}>{el.B}</label>
                    <label htmlFor={`${i}`}>{el.C}</label>
                    <label htmlFor={`${i}`}>{el.D}</label>
                  </div>
                </div>
              ))}
            </p>
          </div>
        ))} */
}
