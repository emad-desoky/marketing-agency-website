// src/react-quill.d.ts or types/react-quill.d.ts
declare module 'react-quill' {
    import * as React from 'react';
  
    interface QuillEditorProps {
      value?: string;
      onChange?: (content: string) => void;
      modules?: Record<string, unknown>;  // Using Record<string, unknown> instead of any
      formats?: string[];
      bounds?: string | HTMLElement;
      placeholder?: string;
      theme?: string;
    }
  
    class Quill extends React.Component<QuillEditorProps> {}
  
    export default Quill;
  }
  