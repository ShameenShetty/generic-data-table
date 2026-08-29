import { ActionIcon, Box, Center, Checkbox, Group, ScrollArea, Skeleton, Table, Title } from '@mantine/core';
import type { GenericDataTableProps } from '../types/table';
import { useMemo } from 'react';

export function GenericDataTable<T>({
    data,
    columns,
    tableName = '',
    showSerialNumber = false,
    isLoading = false,
    maxHeight,
    theme = {}
}: GenericDataTableProps<T>) {
    // Fallback theme tokens mapping to your current design defaults
    const colors = {
        titleBgColor: theme.titleBgColor ?? '#A67B5B',
        titleTextColor: theme.titleTextColor ?? '#212529',
        headerBgColor: theme.headerBgColor ?? '#9C7A5B',
        headerTextColor: theme.headerTextColor ?? '#212529',
        borderColor: theme.borderColor ?? 'black',
        stripedBgColor: theme.stripedBgColor ?? '#CFB595',
    };

    const displayCols = useMemo(() => [
        ...(showSerialNumber ? [{ label: 'SrNo', accessor: () => '' }] : []),
        ...columns
    ], [showSerialNumber, columns]);

    const safeData = Array.isArray(data) ? data : [];
    const skeletonRowsCount = safeData.length > 0 ? safeData.length : 5;
    const skeletonRows = Array(skeletonRowsCount).fill(null);

    return (
        <Box>
            {tableName.length > 0 &&
                <Center mb='sm'>
                    <Box
                        style={{
                            backgroundColor: colors.titleBgColor,
                            padding: '12px 22px',
                            borderRadius: '16px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                    >
                        <Title order={2} c={colors.titleTextColor} style={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                            {tableName}
                        </Title>
                    </Box>
                </Center>
            }

            <ScrollArea style={{ height: maxHeight, width: '100%' }} offsetScrollbars>
                <Table
                    layout='auto'
                    striped
                    stripedColor={colors.stripedBgColor}
                    withTableBorder
                    fz="lg"
                    lh="xl"
                    style={{ borderCollapse: 'separate', borderSpacing: 0 }}
                >
                    <Table.Thead bg={colors.headerBgColor}>
                        <Table.Tr>
                            {displayCols.map((colName, index) => (
                                <Table.Th
                                    key={index}
                                    c={colors.headerTextColor}
                                    fw={700}
                                    fz="lg"
                                    style={{
                                        textAlign: 'left',
                                        fontStyle: 'italic',
                                        padding: '16px',
                                        whiteSpace: 'nowrap',
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 2,
                                        backgroundColor: colors.headerBgColor,
                                        boxShadow: `inset 0 -2px 0 0 ${colors.borderColor}, inset -1px 0 0 0 ${colors.borderColor}, inset 1px 0 0 0 ${colors.borderColor}, inset 0 2px 0 0 ${colors.borderColor}`,
                                    }}
                                >
                                    {colName.label}
                                </Table.Th>
                            ))}
                        </Table.Tr>
                    </Table.Thead>

                    <Table.Tbody style={{ border: `2px solid ${colors.borderColor}` }}>
                        {isLoading ? (
                            skeletonRows.map((_, rowIdx) => (
                                <Table.Tr key={`skeleton-row-${rowIdx}`}>
                                    {columns.map((_, colIdx) => (
                                        <Table.Td key={`skeleton-cell-${colIdx}`} style={{ padding: '16px' }}>
                                            <Skeleton height={24} radius="sm" animate />
                                        </Table.Td>
                                    ))}
                                </Table.Tr>
                            ))
                        ) : (
                            safeData.length === 0 ? (
                                <Table.Tr>
                                    <Table.Td colSpan={displayCols.length} style={{ textAlign: 'center', padding: '32px' }}>
                                        No records found.
                                    </Table.Td>
                                </Table.Tr>
                            ) : (safeData.map((row, rowIdx) => (
                                <Table.Tr key={rowIdx}>
                                    {showSerialNumber && (
                                        <Table.Td>{rowIdx + 1}</Table.Td>
                                    )}
                                    {columns.map((tableCol, cellIdx) => (
                                        <Table.Td key={cellIdx} style={{
                                            padding: '16px', whiteSpace: 'nowrap',
                                            backgroundColor: tableCol.cellBgColor?.(row),
                                            color: tableCol.cellTextColor?.(row),
                                        }}>
                                            {tableCol.accessor(row)}
                                        </Table.Td>
                                    ))}
                                </Table.Tr>
                            )))
                        )}
                    </Table.Tbody>
                </Table>
            </ScrollArea>
        </Box>
    );
}