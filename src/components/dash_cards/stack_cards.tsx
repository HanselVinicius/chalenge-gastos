import StackView from "./stack_view";
import { useEffect, useState } from "react";

export default function StackCards({ stacks, isCategory }) {
  const [renderedStacks, setRenderedStacks] = useState<Array<any>>([]);

  useEffect(() => {
    const sortedStacks = [...stacks].sort((a, b) => b.valor - a.valor);

    const limitedStacks = sortedStacks.slice(0, 4);

    while (limitedStacks.length < 4) {
      limitedStacks.push({ categoria: "Não Informado", data: "Não Informado", valor: "Não informado" });
    }

    setRenderedStacks(limitedStacks);
  }, [stacks]);

  return (
    <div className="space-y-2 mt-2">
      {renderedStacks.map((stack, index) => (
        <StackView key={index} categoria={stack.categoria} data={stack.data} valor={stack.valor} isCategory={isCategory} />
      ))}
    </div>
  );
}
