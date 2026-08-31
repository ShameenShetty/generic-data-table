import { ActionIcon, Box, Center, Checkbox, Group, Menu, MenuDropdown, MenuTarget, ScrollArea, Skeleton, Table, Title, Tooltip } from '@mantine/core';
import { IconDatabaseExport, IconMenu2 } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import type { GenericDataTableProps } from '../types/table';
import { exportToCSV } from '../utils/export_data';

export function GenericDataTable<T extends object>({
    tableName = '',
    rowKey,
    columns,
    data,
    showSerialNumber = false,
    isLoading = false,
    maxHeight,
    theme = {},
    rowBgColor,
    onRowSelect,
    onRowsSelect,
    tableActions = []
}: GenericDataTableProps<T>) {
    // Fallback theme tokens mapping to current design defaults
    const colors = {
        titleBgColor: theme.titleBgColor ?? '#A67B5B',
        titleTextColor: theme.titleTextColor ?? '#212529',
        headerBgColor: theme.headerBgColor ?? '#9C7A5B',
        headerTextColor: theme.headerTextColor ?? '#212529',
        borderColor: theme.borderColor ?? 'black',
        stripedBgColor: theme.stripedBgColor ?? '#CFB595',
    };

    const hasSelection = Boolean(onRowSelect || onRowsSelect);
    const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());

    const displayCols = useMemo(() => [
        ...(hasSelection ? [{ label: '', accessor: () => '' }] : []),
        ...(showSerialNumber ? [{ label: '#', accessor: () => '' }] : []),
        ...columns,
        ...(tableActions.length > 0 ? [{ label: '', accessor: () => '' }] : []),
    ], [hasSelection, showSerialNumber, columns, tableActions.length]);

    const safeData = Array.isArray(data) ? data : [];
    const skeletonRowsCount = safeData.length > 0 ? safeData.length : 5;
    const skeletonRows = Array(skeletonRowsCount).fill(null);

    const getRowId = (row: T): string | number => {
        if (typeof rowKey === 'function') {
            return rowKey(row);
        }
        return row[rowKey] as unknown as string | number;
    };

    // Handle individual row checkbox toggle
    const handleToggleRow = (row: T, checked: boolean) => {
        const id = getRowId(row);
        const newSet = new Set(selectedIds);

        if (checked) {
            if (onRowSelect) newSet.clear();
            newSet.add(id);
        } else {
            newSet.delete(id);
        }

        setSelectedIds(newSet);

        // Trigger callbacks
        onRowSelect?.(row);

        if (onRowsSelect) {
            const selectedRows = safeData.filter((item) => newSet.has(getRowId(item)));
            onRowsSelect(selectedRows);
        }
    };

    const handleToggleAll = (checked: boolean) => {
        if (checked) {
            const allIds = new Set(data.map((row) => getRowId(row)));
            setSelectedIds(allIds);
            onRowsSelect?.(data);
        } else {
            setSelectedIds(new Set());
            onRowsSelect?.([]);
        }
    };

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
                        {/* Table name card */}
                        <Box
                            style={{
                                backgroundColor: colors.titleBgColor,
                                padding: '12px 22px',
                                borderRadius: '16px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                        >
                            <Group>
                                <Title order={2} c={colors.titleTextColor} style={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                                    {tableName}
                                </Title>

                                {/* Table Card Dropdown menu */}
                                <ActionIcon variant='subtle'>
                                    <Menu>
                                        <MenuTarget><IconMenu2 color={colors.headerTextColor} /></MenuTarget>
                                        <MenuDropdown>
                                            <Menu.Label>Export data</Menu.Label>
                                            <Menu.Item
                                                onClick={() => exportToCSV<T>(safeData, tableName)}
                                                leftSection={<IconDatabaseExport />}>
                                                Export as CSV
                                            </Menu.Item>
                                        </MenuDropdown>
                                    </Menu>
                                </ActionIcon>
                            </Group>
                        </Box>
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
                                    {(onRowsSelect && index === 0) ?
                                        // Header checkbox
                                        <Checkbox
                                            checked={safeData.length !== 0 && safeData.length === selectedIds.size}
                                            onChange={(event) => handleToggleAll(event.target.checked)}
                                        /> :
                                        colName.label}
                                </Table.Th>
                            ))}
                        </Table.Tr>
                    </Table.Thead>

                    <Table.Tbody style={{ border: `2px solid ${colors.borderColor}` }}>
                        {/* Skeleton */}
                        {isLoading ? (
                            skeletonRows.map((_, rowIdx) => (
                                <Table.Tr key={`skeleton-row-${rowIdx}`}>
                                    {displayCols.map((_, colIdx) => (
                                        <Table.Td key={`skeleton-cell-${colIdx}`} style={{ padding: '16px' }}>
                                            <Skeleton height={24} radius="sm" animate />
                                        </Table.Td>
                                    ))}
                                </Table.Tr>
                            ))
                        ) : (
                            safeData.length === 0 ? (
                                <Table.Tr>
                                    <Table.Td colSpan={displayCols.length}
                                        style={{ textAlign: 'center', padding: '32px' }}>
                                        No records found.
                                    </Table.Td>
                                </Table.Tr>
                            ) : (safeData.map((row, rowIdx) => (
                                <Table.Tr key={rowIdx} bg={rowBgColor?.(row) || ''}>
                                    {/* Selection col / Checkbox col */}
                                    {hasSelection && (
                                        <Table.Td>
                                            <Checkbox
                                                checked={selectedIds.has(getRowId(row))}
                                                onChange={(e) => handleToggleRow(row, e.currentTarget.checked)}
                                            />
                                        </Table.Td>
                                    )}

                                    {/* Sr No col */}
                                    {showSerialNumber && (
                                        <Table.Td>{rowIdx + 1}</Table.Td>
                                    )}

                                    {/* Columns */}
                                    {columns.map((tableCol, colIdx) => (
                                        <Table.Td key={colIdx} style={{
                                            padding: '16px', whiteSpace: 'nowrap',
                                            backgroundColor: tableCol.cellBgColor?.(row),
                                            color: tableCol.cellTextColor?.(row),
                                        }}>
                                            {tableCol.accessor(row)}
                                        </Table.Td>
                                    ))}

                                    {/* Action col */}
                                    {tableActions.length > 0 && (
                                        <Table.Td width={10} style={{ whiteSpace: 'nowrap' }} >
                                            <Group gap="xs" justify="center" wrap="nowrap">
                                                {tableActions.map((t, idx) => {
                                                    return (
                                                        <Tooltip key={`action-${idx}`} label={t.tooltip} disabled={!t.tooltip}>
                                                            <ActionIcon
                                                                variant='subtle'
                                                                onClick={() => t.onClick(safeData[rowIdx]!)}
                                                            >
                                                                {t.icon}
                                                            </ActionIcon>
                                                        </Tooltip>
                                                    )
                                                })}
                                            </Group>
                                        </Table.Td>
                                    )}
                                </Table.Tr>
                            )))
                        )}
                    </Table.Tbody>
                </Table>
            </ScrollArea>
        </Box>
    );
}