import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useCallback, useRef } from 'react';
import ReactQuill from 'react-quill';

const ReactQuillComponent = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return function Component({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const Editor = ({ value, onChange }: EditorProps) => {
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('image', file);

      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        
        const imageUrl = data.imageUrl;

        const editor = quillRef.current;
        if (!editor) return;

        const quill = editor.editor;
        if (!quill) return;

        const range = quill.getSelection();
        const insertIndex = range?.index || 0;
        
        // Insert the image at cursor position
        quill.insertEmbed(insertIndex, 'image', imageUrl);
        
        // Move cursor after the image with proper range object
        quill.setSelection({ index: insertIndex + 1, length: 0 });
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    };
  }, []);

  return (
    <ReactQuillComponent
      forwardedRef={(el: ReactQuill) => {
        if (el) {
          (quillRef as any).current = el;
        }
      }}
      value={value}
      onChange={onChange}
      modules={{
        toolbar: {
          container: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
          ],
          handlers: {
            image: imageHandler,
          },
        },
      }}
      className="quill-editor"
    />
  );
};

export default Editor;