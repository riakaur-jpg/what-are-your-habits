import ActivityButton from "@/components/ActivityButton";

const IntroScreen = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center flex flex-col items-center gap-6">
      <span className="text-5xl">🌿</span>
      <h1 className="text-xl font-semibold text-foreground">What Are Your Habits?</h1>
      <p className="text-sm text-muted-foreground text-justified leading-relaxed">
        Small daily habits influence stress. Let's explore yours gently.
      </p>
      <ActivityButton label="Start Activity" onClick={onNext} />
    </div>
  );
};

export default IntroScreen;
