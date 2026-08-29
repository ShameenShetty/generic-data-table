# GenericDataTable v2.3.1

`GenericDataTable` is a lightweight, type-safe data table component built on top of Mantine UI. Designed for clean modular display, it streamlines structured tabular data rendering with built-in loading skeletons, empty states, and cell-level color overrides.

<table style="width: 100%; border: none; background: transparent;">
  <tr>
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-example.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-example.png" alt="Default GenericDataTable Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-empty-title-example.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-empty-title-example.png" alt="GenericDataTable with Empty Title" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-custom-theme-example.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-custom-theme-example.png" alt="Custom Theme Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-example-3.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-example-3.png" alt="Table Action Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
  </tr>
  <tr>
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Default GenericDataTable example where we set custom table cell color according to Status value.
    </td>
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Example of GenericDataTable when <code>titleName</code> is explicitly set to an empty string, removing the header container.
    </td>
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Applying custom themes.
    </td>
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Add action column to perform operations on a particular row.
    </td>
  </tr>
</table>

## Note
*(Note: Ensure your host project has `@mantine/core`, `@mantine/hooks`, and `react` / `react-dom` installed as peer dependencies.)*

> **IMPORTANT FOR VITE USERS:** If you encounter a `MantineProvider was not found` error when using this component in a Vite-powered application, you must exclude the package from Vite's pre-bundling optimization so it shares your app's React context:
> ```ts
> // vite.config.ts
> export default defineConfig({
>   optimizeDeps: {
>     exclude: ['generic-data-table'],
>   },
> });
> ```

---

## Current Features (Version 2.3.0)

* **Strict Type Safety:** Generic architecture (`<T>`) matching your data models seamlessly.
* **Serial Number Integration:** Optional automatic index numbering column (`showSerialNumber`).
* **Row Action Support:** Dedicated action column (`tableActions`) allowing row-level interactive buttons with built-in Mantine tooltips.
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
    accessor: (row) => row.status,
    // Optional per-cell styling example
    cellBgColor: (row) => (row.status === 'Active' ? '#A4D5A6' : 'lightgrey'),
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

## Theming & Customization

`GenericDataTable` features a fully configurable `theme` prop (`DataTableTheme`), allowing you to override default table colors, borders, and headers to match your application's design system.

![Custom Theme GenericDataTable Example](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-custom-theme-example.png)
*Custom blue theme applied via the `theme` prop.*

```tsx
export function UserDirectoryTable({ data }: { data: UserRow[] }) {
  return (
    <GenericDataTable<UserRow>
      tableName="User Directory"
      data={data}
      columns={columns}
      showSerialNumber={true}
      maxHeight={400}
      isLoading={false}
      theme={{
        titleBgColor: '#3B82F6',
        titleTextColor: '#FFFFFF',
        headerBgColor: '#2563EB',
        headerTextColor: '#FFFFFF',
        borderColor: '#1E3A8A',
        stripedBgColor: '#DBEAFE',
      }}
    />
  );
}
```

---

## Table Actions

`GenericDataTable` supports a dedicated row-level action column via the `tableActions` prop. By supplying an array of `TableAction<T>` definitions, the component automatically creates a right-most action column populated with icon buttons and optional tooltips for each data row.

| Standard Action View | Hover Tooltip Display | Action Interaction & Console Log |
| :---: | :---: | :---: |
| ![Table Action View 1](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-example-1.png) | ![Table Action View 2](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-example-2.png) | ![Table Action View 3](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-example-3.png) |
| *Action column automatically appends interactive icon buttons.* | *Mantine tooltips trigger dynamically on hover.* | *Row-specific click handlers passing payload data directly.* |

### Implementation Example

```tsx
import { GenericDataTable, ColumnDefinition, TableAction } from 'generic-data-table';
import { IconEdit, IconTrash, IconEye, IconQuestionMark } from '@tabler/icons-react';

const genericTableActions: TableAction<UserRow>[] = [
  {
    icon: <IconEdit color="blue"/>,
    tooltip: 'Testing',
    onClick: (row) => console.log('Clicked on GenericEdit for row - ', row)
  },
  {
    icon: <IconTrash color="red"/>,
    tooltip: 'Delete a user',
    onClick: (row) => console.log('Clicked on GenericDelete for row - ', row)
  },
  {
    icon: <IconEye color="green"/>,
    tooltip: 'View all user details',
    onClick: (row) => console.log('Clicked on GenericView for row - ', row)
  },
  {
    icon: <IconQuestionMark color="purple"/>,
    tooltip: '',
    onClick: (row) => console.log('Clicked on GenericQuestion for row - ', row)
  },
];

export function App() {
  return (
    <>
      <GenericDataTable<UserRow>
        tableName="User Directory"
        data={genericData}
        columns={genericCols}
        showSerialNumber={true}
        maxHeight={400}
        isLoading={false}
        tableActions={genericTableActions}
      />
    </>
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
| `tableActions` | `TableAction<T>[]` (optional) | Array of row action definitions, appending an interactive action column at the end. |

### `ColumnDefinition<T>`
* `label`: `string` — Header text label.
* `accessor`: `(item: T) => ReactNode` — Data accessor rendering cell contents.
* `cellBgColor?: (item: T) => string | undefined` — Dynamic background color resolver per cell.
* `cellTextColor?: (item: T) => string | undefined` — Dynamic text color resolver per cell.

### `TableAction<T>`
* `icon`: `React.ReactElement` — React element (such as an icon) rendered inside the button.
* `tooltip?: string` — Optional hover text displaying a Mantine tooltip.
* `onClick: (row: T) => void` — Callback handler triggered when clicked, passing the target row data.

---

## Roadmap & Planned Features

### 🚀 Coming Soon
* **Row Interactivity:** `onRow` / `onRowsSelect` event handlers for selection and row-click workflows.
* **Row Highlighting:** `getRowBgColor` prop for whole-row status coloring.

### 🗺️ Future Roadmap
* **Native Table Export:** Integrated toolbar menu supporting direct Excel and PDF data exports.
* **Client-Side Sorting:** Ascending and descending sort toggles per column header.
* **Global Search & Filtering:** Built-in search input for real-time row filtering across data fields.