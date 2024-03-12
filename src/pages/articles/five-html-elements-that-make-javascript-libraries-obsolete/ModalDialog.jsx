import { useRef } from 'react';

export function ModalDialog() {
  const dialogRef = useRef();

  function closeModal() {
    dialogRef.current.close();
  }

  function showModal() {
    dialogRef.current.showModal();
  }

  return (
    <>
      <dialog
        className="fixed left-1/2 top-1/2 -ml-32 -mt-24 h-48 w-64 transform p-8"
        ref={dialogRef}
      >
        <button
          autoFocus
          className="rounded bg-slate-200 px-4 py-2 text-gray-900 transition-colors hover:bg-slate-400"
          onClick={closeModal}
        >
          Close
        </button>
        <p>Hello, I am a modal dialog!</p>
      </dialog>
      <button
        className="rounded bg-slate-200 px-4 py-2 text-gray-900 transition-colors hover:bg-slate-400"
        onClick={showModal}
      >
        Show the dialog
      </button>
    </>
  );
}
