import { useState } from "react";
import SelectableTile from "@/components/SelectableTile";
import ActivityButton from "@/components/ActivityButton";
import StepProgress from "@/components/StepProgress";

const options = [
  "Avoid tasks",
  "Excess scrolling",
  "Isolate",
  "Overwork",
  "Talk to someone",
  "Breathing exercises",
  "Distract with TV/games",
  "Not sure",
];

const CopingHabitsScreen = ({ onNext }: { onNext: () => void }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-5">
      <StepProgress current={3} total={4} />
      <h2 className="text-xl font-semibold text-foreground">🌊 How You Respond to Stress</h2>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <SelectableTile
            key={opt}
            label={opt}
            selected={selected.includes(opt)}
            onToggle={() => toggle(opt)}
          />
        ))}
      </div>
      <ActivityButton label="Continue" onClick={onNext} />
    </div>
  );
};

export default CopingHabitsScreen;
