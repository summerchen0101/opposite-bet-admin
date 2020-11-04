import React from 'react'

const collapsed = false
// eslint-disable-next-line @typescript-eslint/no-empty-function
const toggleCollapsed = () => {}

export default React.createContext({ collapsed, toggleCollapsed })
