import { useState } from "react";
import PillOption from "@/components/PillOption";
import ActivityButton from "@/components/ActivityButton";

const commitments = [
  "Sleep earlier",
  "Step outside daily",
  "Reduce scrolling",
  "Kind self-talk",
  "Complete one avoided task",
];

const InsightScreen = ({ onNext }: { onNext: () => void }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-6">
      <span className="text-4xl text-center">💡</span>
      <p className="text-sm text-foreground text-justified leading-relaxed">
        Small daily patterns shape how your body responds to stress.
        Even small consistent changes can reduce anxiety.
      </p>
      <div className="flex flex-wrap gap-2">
        {commitments.map((c) => (
          <PillOption
            key={c}
            label={c}
            selected={selected.includes(c)}
            onToggle={() => toggle(c)}
          />
        ))}
      </div>
      <ActivityButton label="Commit" onClick={onNext} />
    </div>
  );
};

export default InsightScreen;
