export interface ColumnDefinition<T> {
    label: string;
    accessor: (item: T) => string | number | React.ReactElement;
    cellBgColor?: (item: T) => string | undefined;
    cellTextColor?: (item: T) => string | undefined;
}

export interface GenericDataTableProps<T> {
    tableName: string;
    columns: ColumnDefinition<T>[];
    data: T[];
    showSerialNumber?: boolean;
    isLoading?: boolean;
    maxHeight?: number;
    theme?: DataTableTheme;
    tableActions?: TableAction<T>[];
}

export interface DataTableTheme {
    titleBgColor?: string;
    titleTextColor?: string;
    headerBgColor?: string;
    headerTextColor?: string;
    borderColor?: string;
    stripedBgColor?: string;
}
export interface TableAction<T> {

    icon: React.ReactElement;
    tooltip?: string
    onClick: (row: T) => void;
}