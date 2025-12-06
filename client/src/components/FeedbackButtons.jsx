

"use client";

import { ThumbsUp, ThumbsDown, SkipForward } from "lucide-react";
import { useState } from "react";

export default function FeedbackButtons({ onFeedback }) {
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = async (reaction) => {
    setSubmitted(true);
    await onFeedback(reaction);
  };

  if (submitted) {
    return (
      <div className="text-sm text-green-600 font-medium">
        ✅ Feedback recorded — thank you!
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <FeedbackButton
        label="Relevant"
        icon={<ThumbsUp className="w-4 h-4" />}
        className="bg-green-50 text-green-700 hover:bg-green-100"
        onClick={() => handleFeedback("up")}
      />

      <FeedbackButton
        label="Not Relevant"
        icon={<ThumbsDown className="w-4 h-4" />}
        className="bg-red-50 text-red-700 hover:bg-red-100"
        onClick={() => handleFeedback("down")}
      />

      <FeedbackButton
        label="Skip"
        icon={<SkipForward className="w-4 h-4" />}
        className="bg-gray-50 text-gray-700 hover:bg-gray-100"
        onClick={() => handleFeedback("skip")}
      />
    </div>
  );
}

const FeedbackButton = ({ label, icon, className, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-colors ${className}`}
  >
    {icon}
    {label}
  </button>
);
