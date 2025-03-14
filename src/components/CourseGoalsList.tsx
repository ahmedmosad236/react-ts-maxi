import { newGoal } from "../App";
import CourseGoal from "./CourseGoal";
interface CourseGoalsListProps {
  goals: newGoal[];
  onDeleteGoal: (goalId: number) => void; // Add type here for goalId parameter to onDeleteGoal function.
}
function CourseGoalsList({ goals, onDeleteGoal }: CourseGoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal
            key={goal.id}
            title={goal.title}
            id={goal.id}
            onDelete={onDeleteGoal}
          >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalsList;
