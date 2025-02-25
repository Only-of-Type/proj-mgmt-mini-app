export interface InputProps {
  label: string;
  inputType: React.HTMLInputTypeAttribute;
}

function Input({ label, inputType }: InputProps) {
  const generateLabel = (labelText: string) => {
    return labelText.replace(/\s/gi, '').toLowerCase();
  };

  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={generateLabel(label)}>{label}</label>
      <input
        className='border-2 border-solid border-nymph-200 rounded-md p-2'
        name={generateLabel(label)}
        id={generateLabel(label)}
        type={inputType}
      />
    </div>
  );
}
export default Input;
