// 'use client';

// import { useState } from 'react';
// import 'react-quill/dist/quill.snow.css';
// import Button from '@/components/Button';

// import dynamic from 'next/dynamic';
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// function App() {
//   const [value, setValue] = useState<string>('');
//   const handleClear = () => {
//     setValue('');
//   };
//   const handleCreate = () => {
//     console.log(value);
//   };

//   return (
//     <div className="grid grid-cols-2 m-12 gap-16">
//       <div className="col-span-2 h-96">
//         <ReactQuill
//           modules={{
//             toolbar: [
//               [{ header: [1, 2, 3, 4, 5, 6, false] }],
//               ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//               [{ align: ['right', 'center', 'justify'] }],
//               [{ list: 'ordered' }, { list: 'bullet' }],
//               ['link', 'image'],
//             ],
//           }}
//           value={value}
//           onChange={setValue}
//           className="h-full"
//         />
//       </div>
//       <div className="col-start-2 row-start-2 flex gap-4 place-content-end">
//         <Button
//           className="bg-transparent text-emerald-900 hover:text-emerald-950 py-2 px-4 border border-emerald-900 hover:border-emerald-950 rounded"
//           buttonText="Clear"
//           onClick={handleClear}
//         />
//         <Button
//           className="bg-emerald-900 hover:bg-emerald-950 text-white  py-2 px-4 rounded"
//           buttonText="Create"
//           onClick={handleCreate}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
