"use client";

interface Props {
  onSelect: (question: string) => void;
}

const questions = [
  "🚀 Tell me about Startup Judge",
  "💻 What technologies do you know?",
  "🏆 Why should we hire you?",
  "🎯 What's your startup vision?"
];

export default function SuggestedQuestions({
  onSelect,
}: Props) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">

      {questions.map((question) => (

        <button
          key={question}
          onClick={() => onSelect(question)}
          className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 text-xs transition hover:bg-violet-600 hover:text-white"
        >
          {question}
        </button>

      ))}

    </div>
  );
}