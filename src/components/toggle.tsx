type ToggleProps<T = string> = {
  options: Option<T>[];
  value?: T;
  onChange?: (value: T) => void;
};

export function Toggle<T>({ options = [], value, onChange }: ToggleProps<T>) {
  return (
    <div>
      {options.map(({ value, label }, index) => (
        <label key={index}>
          <input type="checkbox" value={String(value)} hidden />
          {label}
        </label>
      ))}
    </div>
  );
}
