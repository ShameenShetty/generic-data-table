// TODO
// Should use array ColumnDefinition to get the headers and the data, otherwise
// we end up printing the entire object instead of the specific columns shown
// in the table.
export const exportToCSV = <T extends object>(data: T[], filename: string) => {
  if (!data.length) return;

  const firstRow = data[0];
  if (!firstRow) return;

  const headers = Object.keys(firstRow).join(',');
  const rows = data.map(row =>
    Object.values(row)
      .map(val => `"${String(val ?? '').replace(/"/g, '""')}"`) // Escape quotes & wrap string
      .join(',')
  ).join('\n');

  const blob = new Blob([`${headers}\n${rows}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};