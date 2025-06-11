import { ReactElement, ReactNode } from "react";

type TextIconProps = {
  icon?: ReactNode | ReactElement;
  children?: ReactNode;
};

export function TextIcon({ icon, children }: TextIconProps) {
  return (
    <p className="inline-flex items-center">
      <span className="inline-block mr-1">{icon}</span>
      {children}
    </p>
  );
}
