import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {}

export function TableHeader(props: TableHeaderProps) {
  return (
    <th className="px-4 py-3 font-semibold text-sm text-left" {...props} />
  );
}
