import SkillCard from "./SkillCard";

interface Technology {
  name: string;
  level: string;
  progress: number;
  projects: number;
}

interface Props {
  category: {
    category: string;
    color: string;
    technologies: Technology[];
  };
}

export default function SkillCategory({
  category,
}: Props) {
  return (
    <div>

      <div className="mb-10 flex items-center gap-4">

        <div
          className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.color}`}
        />

        <h3 className="text-2xl font-bold sm:text-3xl">
          {category.category}
        </h3>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {category.technologies.map((skill) => (

          <SkillCard
            key={skill.name}
            skill={skill}
            color={category.color}
          />

        ))}

      </div>

    </div>
  );
}