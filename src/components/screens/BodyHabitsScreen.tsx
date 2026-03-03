import { useState } from "react";
import SelectableTile from "@/components/SelectableTile";
import ActivityButton from "@/components/ActivityButton";
import StepProgress from "@/components/StepProgress";

const options = [
  "I haven't been sleeping well",
  "My sleep timing is irregular",
  "I sometimes skip meals",
  "I eat more than usual when stressed",
  "I haven't been moving or exercising much",
  "I haven't been going outside much",
  "My personal care routine has changed",
  "My daily routine feels steady",
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
      <h2 className="text-xl font-semibold text-foreground">🧍‍♀️ Your Daily Body Routine</h2>
      <p className="text-sm text-muted-foreground text-justified">Which of these has felt a little off lately? (Select any that apply)</p>
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
