import { EditorState, convertToRaw, ContentState } from 'draft-js'
import React, { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

const ContentEditor: React.FC<{
  value?: string
  onChange?: (s: string) => void
}> = ({ value, onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  useEffect(() => {
    const contentBlock = htmlToDraft(value)
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks,
      )
      setEditorState(EditorState.createWithContent(contentState))
    }
  }, [])
  const onEditorStateChange = (state: EditorState) => {
    setEditorState(state)
    onChange(draftToHtml(convertToRaw(state.getCurrentContent())))
  }

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      editorStyle={{ minHeight: '200px', border: '1px solid #eee' }}
    />
  )
}

export default ContentEditor
