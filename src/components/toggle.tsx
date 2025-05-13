type ToggleProps<T = string> = {
  options: Option<T>[];
  value?: T;
  onChange?: (value: T) => void;
};

export function Toggle<T>({ options = [], value, onChange }: ToggleProps) {
  return (
    <div>
      {options.map(({ value, label }, index) => (
        <label key={index}>
          <input type="checkbox" value={value} hidden />
          {label}
        </label>
      ))}
    </div>
  );
}
