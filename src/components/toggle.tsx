import { TOption } from "@/types/commons";
import { ChangeEventHandler, useCallback } from "react";

type ToggleProps<T = string> = {
  options: TOption<T>[];
  value?: T;
  onChange?: (value?: T) => void;
};

export function Toggle<T>({
  options = [],
  value,
  onChange = () => {}
}: ToggleProps<T>) {
  const handleChange: ChangeEventHandler<HTMLFormElement> = useCallback((e) => {
    onChange(e.target.value as T);
  }, []);
  return (
    <div>
      <form defaultValue={String(value)} onChange={handleChange}>
        {options.map(({ value: val, label }, index) => (
          <label
            key={index}
            className="has-checked:bg-red-500 has-checked:text-white"
          >
            <input
              name="toggle"
              type="radio"
              value={String(val)}
              hidden
              defaultChecked={val === value}
            />
            {label}
          </label>
        ))}
      </form>
    </div>
  );
}
