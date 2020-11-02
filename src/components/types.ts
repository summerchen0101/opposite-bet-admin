type RenderWithDataIndex = (value: any, row: any) => any;
type RenderWithNoDataIndex = (row: any) => any;

export interface IColumn {
  title: string;
  dataIndex?: string;
  width?: number | string;
  render?: RenderWithDataIndex;
}
