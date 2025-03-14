import { FormEvent, useRef } from "react";
type AddGoal = {
  onAdd: (goal: string, summary: string) => void;
};
function NewGoalForm({ onAdd }: AddGoal) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    onAdd(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" name="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Your Summary</label>
        <input type="text" id="summary" name="summary" ref={summary} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoalForm;
