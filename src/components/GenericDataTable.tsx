import { ActionIcon, Box, Center, Checkbox, Group, ScrollArea, Skeleton, Table, Title } from '@mantine/core';
import type { GenericDataTableProps } from '../types/table';
import { useMemo } from 'react';

export function GenericDataTable<T>({
    data,
    columns,
    tableName,
    showSerialNumber,
    isLoading,
    maxHeight
}: GenericDataTableProps<T>) {
    const displayCols = useMemo(() => [
        ...(showSerialNumber ? [{ label: 'SrNo', accessor: () => '' }] : []),
        ...columns
    ], []);

    const safeData = Array.isArray(data) ? data : [];
    const skeletonRowsCount = safeData.length > 0 ? safeData.length : 5;
    const skeletonRows = Array(skeletonRowsCount).fill(null);

    return (
        <Box mx="lg" my="md">
            {/* Table name */}
            {tableName.length > 0 &&
                <Center mb='sm'>
                    <Box
                        style={{
                            backgroundColor: '#A67B5B',
                            padding: '12px 22px',
                            borderRadius: '16px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}
                    >
                        <Title order={2} c='#212529' style={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                            {tableName}
                        </Title>
                    </Box>
                </Center>
            }

            <ScrollArea style={{ height: maxHeight, width: '100%' }} offsetScrollbars>
                <Table
                    layout='auto'
                    striped
                    stripedColor='#CFB595'
                    withTableBorder
                    fz="lg"          // Upscales body content font sizes globally
                    lh="xl"          // Balances vertical row distribution for larger typography
                    style={{ borderCollapse: 'separate', borderSpacing: 0 }}
                >
                    {/* Header section */}
                    <Table.Thead bg='#9C7A5B'>
                        <Table.Tr>
                            {displayCols.map((colName, index) => {
                                return (
                                    <Table.Th
                                        key={index}
                                        c='#212529'
                                        fw={700}
                                        fz="lg" // Match body scale hierarchy
                                        style={{
                                            textAlign: 'left',
                                            fontStyle: 'italic',
                                            padding: '16px', // Extra internal structural padding for wider fonts
                                            whiteSpace: 'nowrap',
                                            position: 'sticky',
                                            top: 0,
                                            zIndex: 2,
                                            backgroundColor: '#9C7A5B',

                                            // Box-shadow variant keeps line placement consistent during composite rendering
                                            boxShadow: 'inset 0 -2px 0 0 black, inset -1px 0 0 0 black, inset 1px 0 0 0 black, inset 0 2px 0 0 black',
                                        }}
                                    >
                                        {colName.label}
                                    </Table.Th>
                                );
                            })}
                        </Table.Tr>
                    </Table.Thead>


                    {/* Body section */}
                    <Table.Tbody style={{ border: '2px solid black' }}>
                        {isLoading ? (
                            skeletonRows.map((_, rowIdx) => (
                                <Table.Tr key={`skeleton-row-${rowIdx}`}>
                                    {columns.map((_, colIdx) => (
                                        <Table.Td key={`skeleton-cell-${colIdx}`} style={{ padding: '16px' }}>
                                            <Skeleton height={24} radius="sm" animate />
                                        </Table.Td>
                                    ))}
                                    <Table.Td style={{ textAlign: 'center' }}>
                                        <Group gap="xs" justify="center" wrap="nowrap">
                                            <Skeleton height={28} width={28} circle />
                                        </Group>
                                    </Table.Td>
                                </Table.Tr>
                            ))
                        ) : (
                            safeData.length === 0 ? (
                                // Explicit Empty State UI
                                <Table.Tr>
                                    <Table.Td colSpan={displayCols.length} style={{ textAlign: 'center', padding: '32px' }}>
                                        No records found.
                                    </Table.Td>
                                </Table.Tr>
                            ) : (safeData.map((row, rowIdx) => {
                                return <Table.Tr key={rowIdx}>

                                    {showSerialNumber && (
                                        <Table.Td>{rowIdx + 1}</Table.Td>
                                    )}

                                    {columns.map((tableCol, cellIdx) => {
                                        return <Table.Td key={cellIdx} style={{
                                            padding: '16px', whiteSpace: 'nowrap',
                                            backgroundColor: tableCol.cellBgColor?.(row),
                                            color: tableCol.cellTextColor?.(row),
                                        }}>
                                            {tableCol.accessor(row)}
                                        </Table.Td>
                                    })}
                                </Table.Tr>
                            }
                            ))
                        )}
                    </Table.Tbody>
                </Table>
            </ScrollArea>
        </Box >
    );
}