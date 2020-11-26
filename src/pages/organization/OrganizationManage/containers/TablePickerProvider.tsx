import generateTablePickerProvider from '@/utils/generateTablePickerProvider'

type TableTayp = 'member' | 'main' | 'top'

const [TablePickerProvider, useTablePicker] = generateTablePickerProvider<
  TableTayp
>('top')

export { TablePickerProvider, useTablePicker }
