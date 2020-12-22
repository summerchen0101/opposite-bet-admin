import React, { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
const ContentEditor: React.FC<{
  onChange?: (text: string) => void
  value?: string
}> = ({ onChange, value }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const handleChange = (s: EditorState) => {
    onChange && onChange(draftToHtml(convertToRaw(s.getCurrentContent())))
  }

  useEffect(() => {
    const contentBlock = htmlToDraft(value || '')
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
    )
    setEditorState(EditorState.createWithContent(contentState))
  }, [value])
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleChange}
      editorStyle={{ minHeight: '200px', border: '1px solid #eee' }}
    />
  )
}

export default ContentEditor
