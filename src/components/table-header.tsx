import { ComponentProps } from "react";

interface TableHeadreProps extends ComponentProps<"th"> {}

export function TableHeader(props: TableHeadreProps) {
  return (
    <th className="px-4 py-3 font-semibold text-sm text-left" {...props} />
  );
}
