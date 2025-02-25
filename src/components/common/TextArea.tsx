export interface TextAreaProps {
  label: string;
}

function TextArea({ label }: TextAreaProps) {
  const generateLabel = (labelText: string) => {
    return labelText.replace(/\s/gi, '').toLowerCase();
  };

  return (
    <div className='flex flex-col w-full'>
      <label htmlFor={generateLabel(label)}>{label}</label>
      <textarea
        className='border-2 border-solid rounded-md p-2 border-nymph-200'
        name={generateLabel(label)}
        id={generateLabel(label)}
      />
    </div>
  );
}
export default TextArea;
