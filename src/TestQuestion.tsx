import { useState } from "react";

const TestQuestion = () => {
  const [questionState, setQuestionState] = useState([
    {
      question: "",
      answer: "",

      A: "",
      B: "",
      C: "",
      D: "",
    },
  ]);

  const handleAddQuestion = () => {
    setQuestionState([
      ...questionState,
      {
        question: "",
        answer: "",

        A: "",
        B: "",
        C: "",
        D: "",
      },
    ]);
  };

  const handleRemoveQuestion = (i: number) => {
    const items = [...questionState];
    items.splice(i, 1);
    setQuestionState(items);
  };

  const handleInputQuestion = (e: any, i: number) => {
    const { name, value }: any = e.target;

    const items = [...questionState];
    // items.splice(i, 1);
    // setQuestionState(items);
    items[i].question = value;
    setQuestionState(items);
  };

  return (
    <div className="text-blue-950 bg-slate-100 flex justify-center pt-32 w-full min-h-[100vh]">
      <div className="w-[700px] min-h-[800px] mb-20 rounded-md border shadow-sm bg-white p-4 ">
        <p className="mt-10 w-full text-center font-bold text-[20px] mb-10">
          Create Questions
        </p>
        <div>
          {questionState?.map((props: any, i: number) => (
            <div key={i}>
              <p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-error w-full max-w-xs"
                  value={props.question}
                  name={`${i}`}
                  onChange={(e: any) => {
                    handleInputQuestion(e, i);
                  }}
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-error w-full max-w-xs"
                  value={props.question}
                  name={`${i}`}
                  onChange={(e: any) => {
                    handleInputQuestion(e, i);
                  }}
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-error w-full max-w-xs"
                  value={props.question}
                  name={`${i}`}
                  onChange={(e: any) => {
                    handleInputQuestion(e, i);
                  }}
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-error w-full max-w-xs"
                  value={props.question}
                  name={`${i}`}
                  onChange={(e: any) => {
                    handleInputQuestion(e, i);
                  }}
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-error w-full max-w-xs"
                  value={props.question}
                  name={`${i}`}
                  onChange={(e: any) => {
                    handleInputQuestion(e, i);
                  }}
                />
              </p>
              <button
                className="btn btn-neutral rounded-md ml-2 "
                onClick={handleAddQuestion}
              >
                Add Question
              </button>
              <button
                className="btn btn-error text-white rounded-md ml-2 "
                onClick={() => handleRemoveQuestion(i)}
              >
                Remove Question
              </button>
            </div>
          ))}
        </div>
        <button
          className="btn bg-green-500 mt-20 text-white rounded-md ml-2 "
          onClick={() => {
            console.log(questionState);
          }}
        >
          Finish setting Questions
        </button>
      </div>
    </div>
  );
};

export default TestQuestion;
