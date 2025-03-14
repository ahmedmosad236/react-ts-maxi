import { type ReactNode } from "react";

interface CourseGoalsProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (goalId: number) => void; //   description: string;
}
function CourseGoal({ title, children, onDelete, id }: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}

export default CourseGoal;
