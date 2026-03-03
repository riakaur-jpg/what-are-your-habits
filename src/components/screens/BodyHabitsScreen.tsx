import { useState } from "react";
import SelectableTile from "@/components/SelectableTile";
import ActivityButton from "@/components/ActivityButton";
import StepProgress from "@/components/StepProgress";

const options = [
  "Sleeping less than 6–7 hours",
  "Irregular sleep timing",
  "Skipping meals",
  "Overeating when stressed",
  "Little movement",
  "Avoiding outside",
  "Hygiene changes",
  "My routine feels stable",
];

const BodyHabitsScreen = ({ onNext }: { onNext: () => void }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border flex flex-col gap-5">
      <StepProgress current={1} total={4} />
      <h2 className="text-xl font-semibold text-foreground">🧍‍♀️ Your Body Habits</h2>
      <p className="text-sm text-muted-foreground text-justified">Which feel inconsistent lately?</p>
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

export default BodyHabitsScreen;
