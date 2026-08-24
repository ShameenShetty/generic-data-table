import React from 'react';

export interface GenericDataTableProps<T> {
    data: T[];
}

export function GenericDataTable<T>({ data }: GenericDataTableProps<T>) {
    return (
        <div>
            <p>Table</p>
        </div>
    );
}