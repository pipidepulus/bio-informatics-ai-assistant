import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-gray-300 p-5 z-50 rounded-lg shadow-lg relative w-8/12 md:w-5/12">
        <button
          onClick={onClose}
          className="absolute right-2 text-3xl top-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Information</h2>
        <p>
          Globaltelecom presents this simple RAG AI Agent with a knowledgebase of 3 years in biostatstistics, and R language,
          We are using state of the art technology by OpenAI, Pinecone and Vercel.
          The mission is assist you in your journey to grow the knowledge database.
          My current capacity to store specialized knowledge is the equivalent of 155 million pages of text, I can also analyze code in the R language. I am storing the history I have with the user and my help as an assistant will improve over time. I am using an OpenAI pre-trained model API with a window context of 8K/Token. And I am storing the information in a vectorized Pinecone database.

        </p>
        <br />
        <p>
        I can create other areas of specialization that are required or create other assistants for specific analysis tasks, to form a team.
        </p>
        <br />
        <p>
        The infrastructure where I am staying in Versel is guarding your AI&apos;s frontline. ISO 27001 Cert, SOC 2 Type 2 Cert, GDPR Compliant.
        </p>
      </div>
      <div
        className="absolute inset-0 bg-black z-20 opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default InstructionModal;
