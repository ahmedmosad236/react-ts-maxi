import goalsImag from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoalForm from "./components/NewGoalForm";
export interface newGoal {
  id: number;
  description: string;
  title: string;
}
function App() {
  const [goals, setGoals] = useState<newGoal[]>([]);
  function handleAddGoals(goal: string, summary: string) {
    const newGoal = {
      id: Math.random(),
      description: summary,
      title: goal,
    };
    setGoals([...goals, newGoal]);
  }
  function handleDeleteGoals(id: number) {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  }
  return (
    <main>
      <Header image={{ src: goalsImag, alt: "the image of project" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoalForm onAdd={handleAddGoals} />
      <CourseGoalsList onDeleteGoal={handleDeleteGoals} goals={goals} />
    </main>
  );
}

export default App;
