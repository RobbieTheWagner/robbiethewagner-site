import { useRef } from 'react';

export function BadReactInputFocus() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <div className="mb-2 cursor-default" onClick={focusInput}>
        My Cool Input Label
      </div>
      <input
        className="border p-2"
        placeholder="My cool input text"
        ref={inputRef}
        type="text"
      />
    </>
  );
}
