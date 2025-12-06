
import { Sparkles } from "lucide-react";

const confidenceStyles = {
  High: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-gray-100 text-gray-700",
};

export default function ExplanationCard({ explanation, confidence }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-lg text-foreground mb-2">
            Why this recommendation?
          </h4>

          <p className="text-sm text-foreground leading-relaxed mb-3">
            {explanation}
          </p>

          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${confidenceStyles[confidence]}`}
          >
            {confidence} confidence
          </div>
        </div>
      </div>
    </div>
  );
}
