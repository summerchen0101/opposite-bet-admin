import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const ContentEditor: React.FC = () => {
  return (
    <Editor editorStyle={{ minHeight: '200px', border: '1px solid #eee' }} />
  )
}

export default ContentEditor
