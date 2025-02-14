import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const Editor = ({ value, onChange }: EditorProps) => {
  return <ReactQuill value={value} onChange={onChange} className="quill-editor" />;
};

export default Editor;
