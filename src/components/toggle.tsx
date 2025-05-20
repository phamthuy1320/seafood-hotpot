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
  const handleChange: ChangeEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      onChange(e.target.value as T);
    },
    [onChange]
  );
  return (
    <div className="bg-[#eee] rounded-4xl h-fit p-1">
      <form defaultValue={String(value)} onChange={handleChange}>
        {options.map(({ value: val, label }, index) => (
          <label
            key={index}
            className="has-checked:red-focus has-checked:rounded-4xl py-1 px-2 cursor-pointer"
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
