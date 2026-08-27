# GenericDataTable

`GenericDataTable` is a lightweight, type-safe data table component built on top of Mantine UI. Designed for clean modular display, it streamlines structured tabular data rendering with built-in loading skeletons, empty states, and cell-level color overrides.

---

## Installation

```bash
npm install generic-data-table
# or
pnpm add generic-data-table
```

*(Note: Ensure your host project has `@mantine/core`, `@mantine/hooks`, and `react` / `react-dom` installed as peer dependencies.)*

---

## Current Features (Basic Version)

* **Strict Type Safety:** Generic architecture (`<T>`) matching your data models seamlessly.
* **Serial Number Integration:** Optional automatic index numbering column (`showSerialNumber`).
* **Loading Skeletons:** Built-in animated skeleton rows activated via `isLoading`.
* **Explicit Empty State:** Graceful fallback messaging when data arrays are empty.
* **Cell Styling Hooks:** Custom per-cell background and text coloring via `cellBgColor` and `cellTextColor` accessor callbacks.
* **Sticky Header & Scroll Area:** Scrollable container with fixed table headers for large datasets.

---

## Quick Start Example

Below is an example of how to implement the basic version of `GenericDataTable` using the current props:

```tsx
import { GenericDataTable, ColumnDefinition } from 'generic-data-table';
import { Badge } from '@mantine/core';

interface UserRow {
  id: number;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
}

const data: UserRow[] = [
  { id: 1, name: 'Alice Smith', role: 'Developer', status: 'Active' },
  { id: 2, name: 'Bob Jones', role: 'Designer', status: 'Inactive' },
];

const columns: ColumnDefinition<UserRow>[] = [
  {
    label: 'Name',
    accessor: (row) => row.name,
  },
  {
    label: 'Role',
    accessor: (row) => row.role,
  },
  {
    label: 'Status',
    accessor: (row) => (
      <Badge 'Active' 'gray'} 'green' : ? color="{row.status">
        {row.status}
      </Badge>
    ),
    // Optional per-cell styling example
    cellBgColor: (row) => (row.status === 'Active' ? '#f4fcf4' : undefined),
  },
];

export function App() {
  return (
    <GenericDataTable<UserRow>
      tableName="User Directory"
      data={data}
      columns={columns}
      showSerialNumber={true}
      maxHeight={400}
      isLoading={false}
    />
  );
}
```

---

## API Reference (`GenericDataTableProps`)

| Prop Name | Type | Description |
| :--- | :--- | :--- |
| `tableName` | `string` | Renders a styled header title banner above the table. Pass `""` to omit. |
| `data` | `T[]` | Array of row data objects. |
| `columns` | `ColumnDefinition<T>[]` | Configuration array defining table headers and accessors. |
| `showSerialNumber` | `boolean` (optional) | Automatically prepends an incremental "SrNo" index column. |
| `isLoading` | `boolean` (optional) | Toggles animated skeleton loader placeholders. |
| `maxHeight` | `number \| string` (optional) | Sets the vertical scroll viewport ceiling via Mantine's `ScrollArea`. |

### `ColumnDefinition<T>`
* `label`: `string` — Header text label.
* `accessor`: `(item: T) => ReactNode` — Data accessor rendering cell contents.
* `cellBgColor?: (item: T) => string \| undefined` — Dynamic background color resolver per cell.
* `cellTextColor?: (item: T) => string \| undefined` — Dynamic text color resolver per cell.

---

## Roadmap & Planned Features

### 🚀 Coming Soon
* **Row Interactivity:** `onRow` / `onRowsSelect` event handlers for selection and row-click workflows.
* **Generic Action Column:** Built-in configuration slots for row-level buttons.
* **Row Highlighting:** `getRowBgColor` prop for whole-row status coloring.

### 🗺️ Future Roadmap
* **Native Table Export:** Integrated toolbar menu supporting direct Excel and PDF data exports.
* **Client-Side Sorting:** Ascending and descending sort toggles per column header.
* **Global Search & Filtering:** Built-in search input for real-time row filtering across data fields.