import Button from './common/Button';
import Input from './common/Input';
import TextArea from './common/TextArea';

function NewProject() {
  return (
    <div className='mx-10 py-16 col-start-3 col-span-4 flex flex-col gap-5'>
      <Input label='Title' inputType='text' />
      <TextArea label='Description' />
      <Input label='Due Date' inputType='text' />
      <div className='flex gap-5'>
        <Button label='Cancel' buttonStyle='secondary' />
        <Button label='Save' />
      </div>
    </div>
  );
}
export default NewProject;
