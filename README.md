# GenericDataTable

`GenericDataTable` is a lightweight, type-safe data table component built on top of Mantine UI. Designed for clean modular display, it streamlines structured tabular data rendering with built-in loading skeletons, empty states, and cell-level color overrides.

<table style="width: 100%; border: none; background: transparent;">
  <!-- ==================== ROW 1: Images 1 to 4 ==================== -->
  <tr>
    <!-- Row 1, Cell 1: Default Table Example -->
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table.png" alt="Default GenericDataTable Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <!-- Row 1, Cell 2: Complex Colored Cells Example -->
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/colored-cells.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/colored-cells.png" alt="Complex Cell Coloring Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <!-- Row 1, Cell 3: Empty Title Example -->
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-empty-title.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/data-table-empty-title.png" alt="GenericDataTable with Empty Title" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <!-- Row 1, Cell 4: Custom Cell Component Example -->
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/custom-cell-component-2.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/custom-cell-component-2.png" alt="Custom Cell Component Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
  </tr>

  <!-- ==================== ROW 1: Captions 1 to 4 ==================== -->
  <tr>
    <!-- Row 1, Cell 1 Caption -->
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Default table where we set custom table cell color according to salary range. Shows export data option (new v2.5.0 feature)
    </td>
    <!-- Row 1, Cell 2 Caption -->
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Example showing advanced cell coloring rules based on dynamic ranges.
    </td>
    <!-- Row 1, Cell 3 Caption -->
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Example of GenericDataTable when <code>titleName</code> is explicitly set to an empty string, removing the header container.
    </td>
    <!-- Row 1, Cell 4 Caption -->
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Embed any React component (e.g. buttons) directly into table cells to execute custom row-level functions, trigger callbacks, or open contextual modals.
    </td>
  </tr>

  <!-- ==================== ROW 2: Images 5 to 7 ==================== -->
  <tr>
    <!-- Row 2, Cell 1: Table Action Example -->
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px; padding-top: 20px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-3.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-3.png" alt="Table Action Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>    
    <!-- Row 2, Cell 2: onRowsSelect Example -->
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px; padding-top: 20px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/on-rows-select.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/on-rows-select.png" alt="onRowsSelect Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <!-- Row 2, Cell 3: Custom Theme Example -->
    <td style="width: 25%; vertical-align: bottom; text-align: center; padding: 5px; padding-top: 20px;">
      <a href="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/custom-theme.png" target="_blank">
        <img src="https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/custom-theme.png" alt="Custom Theme Example" style="max-width: 100%; height: auto;" />
      </a>
    </td>
    <!-- Row 2, Cell 4: Blank for grid alignment -->
    <td style="width: 25%;"></td>
  </tr>

  <!-- ==================== ROW 2: Captions 5 to 7 ==================== -->
  <tr>
    <!-- Row 2, Cell 1 Caption -->
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Add action column to perform operations on a particular row.
    </td>
    <!-- Row 2, Cell 2 Caption -->
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      onRowsSelect allows performing actions on multiple selected rows
    </td>
    <!-- Row 2, Cell 3 Caption -->
    <td style="width: 25%; vertical-align: top; text-align: center; padding: 5px; font-style: italic; font-size: 0.85em;">
      Applying custom themes.
    </td>
    <!-- Row 2, Cell 4 Caption -->
    <td></td>
  </tr>
</table>

## Table of Contents
- [Current Features](#current-features-version-251)
- [Quick Start Example](#quick-start-example)
- [Custom Cell Components](#custom-cell-components)
- [Theming & Customization](#theming--customization)
- [Table Actions](#table-actions)
- [onRowSelect & onRowsSelect](#row-selection)
- [API Reference](#api-reference-genericdatatableprops)
- [Roadmap](#roadmap--planned-features)

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

## Current Features (Version 2.5.1)

* **Strict Type Safety:** Generic architecture (`<T>`) matching your data models seamlessly.
* **Serial Number Integration:** Optional automatic index numbering column (`showSerialNumber`).
* 🟢 **Interactive Row Selection (New):** Checkbox selection system (`onRowSelect`, `onRowsSelect`) with an integrated "Select All" header toggle.
* 🟢 **Dynamic Row Highlighting (New):** Row-level background color styling (`rowBgColor`) driven by custom row data conditions.
* 🟢 **CSV Data Export (New):** Zero-dependency export utility allowing users to download table data directly as a CSV file.
* **Row Action Support:** Generalized action column (`tableActions`) supporting custom icons, tooltips, and row-level callbacks.
* **Cell Styling Hooks:** Custom per-cell background and text coloring via `cellBgColor` and `cellTextColor` accessor callbacks.
* **Loading Skeletons:** Built-in animated skeleton rows activated via `isLoading`.
* **Explicit Empty State:** Graceful fallback messaging when data arrays are empty.
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

## Custom Cell Components

`GenericDataTable` supports custom React components within column accessors via `accessor: (row) => ...`. This enables advanced ERP workflows—such as rendering interactive action buttons to trigger modals, dispatch server requests, or dynamically modify component states (e.g., disabling elements or rendering tooltips) based on specific row properties.

![Custom Cell Component GenericDataTable Example](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/custom-cell-component-2.png)
*Custom interactive buttons rendered via column accessors to trigger row detail modals.*

<details>
<summary><b>Click here to see an example of implementing custom cell components</b></summary>

```tsx
import { useState } from 'react';
import { Stack, Button, Modal, Text, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { GenericDataTable } from './components/GenericDataTable';
import type { ColumnDefinition } from './types/table';

interface DeveloperRow {
  id: number;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
  salary: number;
}

export default function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState<DeveloperRow null |>(null);

  const handleShowDetails = (developer: DeveloperRow) => {
    setSelectedDeveloper(developer);
    open();
  };

  const developerCols: ColumnDefinition<DeveloperRow>[] = [
    {
      label: 'Name',
      accessor: (row) => row.name,
    },
    {
      label: 'Role',
      accessor: (row) => row.role,
    },
    {
      label: 'Details',
      accessor: (row) => (
        <Button variant="light" onClick={() => handleShowDetails(row)}>
          Show more details
        </Button>
      ),
    },
    {
      label: 'Salary',
      accessor: (row) => `$${row.salary.toLocaleString()}`,
      cellBgColor: (row) => {
        if (row.salary < 95000) return '#FFCCCC';
        if (row.salary < 110000) return '#FFE5CC';
        if (row.salary < 130000) return '#E5FFCC';
        return '#A4D5A6';
      },
    },
  ];

  return (
    <Stack p="md">
      <GenericDataTable<DeveloperRow>
        tableName="Engineering Directory"
        rowKey={'id'}
        data={developerData}
        columns={developerCols}
        showSerialNumber={true}
        maxHeight={400}
        isLoading={false}
      />

      <Modal centered onClose="{close}" opened="{opened}" title="Developer Details">
        {selectedDeveloper && (
          <Stack gap="xs">
            <Group>
              <Text fw="{500}">ID:</Text>
              <Text>{selectedDeveloper.id}</Text>
            </Group>
            <Group>
              <Text fw="{500}">Name:</Text>
              <Text>{selectedDeveloper.name}</Text>
            </Group>
            <Group>
              <Text fw="{500}">Role:</Text>
              <Text>{selectedDeveloper.role}</Text>
            </Group>
            <Group>
              <Text fw="{500}">Status:</Text>
              <Text>{selectedDeveloper.status}</Text>
            </Group>
            <Group>
              <Text fw="{500}">Salary:</Text>
              <Text>${selectedDeveloper.salary.toLocaleString()}</Text>
            </Group>
          </Stack>
        )}
      </Modal>
    </Stack>
  );
}
```
</details>

---

## Theming & Customization

`GenericDataTable` features a fully configurable `theme` prop (`DataTableTheme`), allowing you to override default table colors, borders, and headers to match your application's design system.

![Custom Theme GenericDataTable Example](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/custom-theme.png)
*Custom blue theme applied via the `theme` prop.*

<details>
<summary><b>Click here to see example of applying a custom theme</b></summary>

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
</details>

---

## Table Actions

`GenericDataTable` supports a dedicated row-level action column via the `tableActions` prop. By supplying an array of `TableAction<T>` definitions, the component automatically creates a right-most action column populated with icon buttons and optional tooltips for each data row.

| Hover Tooltip Display | Action Execution & Result |
| :---: | :---: |
| ![Table Action View 4](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-4.png) | ![Table Action View 5](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/table-action-5.png) |
| *Hovering over the action icon displays the tooltip explaining the operation.* | *Clicking the action executes the handler, extracting the row's salary data to compute the estimated tax and net income in an alert prompt.* |

<details>
<summary><b>Click here to see an example of implementing TableActions to perform state-driven operations on a selected row</b></summary>

```tsx
import './App.css';

import { Stack } from '@mantine/core';
import { IconMail, IconReceipt2, IconTrash, IconTrendingUp, IconUsers } from '@tabler/icons-react';
import { GenericDataTable } from './components/GenericDataTable';
import type { ColumnDefinition, TableAction } from './types/table';

interface DeveloperRow {
  id: number;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
  salary: number;
}

const developerData: DeveloperRow[] = [
  { id: 1, name: 'Alice Smith', role: 'Frontend Developer', status: 'Active', salary: 95000 },
  { id: 2, name: 'Bob Jones', role: 'UI/UX Designer', status: 'Inactive', salary: 85000 },
  { id: 3, name: 'Charlie Brown', role: 'QA Engineer', status: 'Active', salary: 90000 },
  { id: 4, name: 'Diana Prince', role: 'Backend Developer', status: 'Active', salary: 110000 },
  { id: 5, name: 'Evan Wright', role: 'DevOps Engineer', status: 'Inactive', salary: 115000 },
  { id: 6, name: 'Fiona Gallagher', role: 'Frontend Developer', status: 'Active', salary: 98000 },
  { id: 7, name: 'George Clark', role: 'Backend Developer', status: 'Active', salary: 105000 },
  { id: 8, name: 'Hannah Abbott', role: 'UI/UX Designer', status: 'Active', salary: 88000 },
  { id: 9, name: 'Ian Malcolm', role: 'QA Engineer', status: 'Inactive', salary: 92000 },
  { id: 10, name: 'Julia Roberts', role: 'Frontend Developer', status: 'Active', salary: 102000 },
  { id: 11, name: 'Kevin Hart', role: 'DevOps Engineer', status: 'Active', salary: 120000 },
  { id: 12, name: 'Laura Croft', role: 'Backend Developer', status: 'Inactive', salary: 108000 },
  { id: 13, name: 'Michael Scott', role: 'QA Engineer', status: 'Active', salary: 94000 },
  { id: 14, name: 'Dwight Schrute', role: 'UI/UX Designer', status: 'Active', salary: 86000 },
  { id: 15, name: 'Pam Beesly', role: 'DevOps Engineer', status: 'Active', salary: 112000 },
];

const developerCols: ColumnDefinition<DeveloperRow>[] = [
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
    cellBgColor: (row) => (row.status === 'Active' ? '#A4D5A6' : 'lightgrey'),
  },
  {
    label: 'Salary',
    accessor: (row) => `$${row.salary.toLocaleString()}`,
    cellBgColor: (row) => {
      if (row.salary < 95000) return '#FFCCCC';   // Red (Low)
      if (row.salary < 110000) return '#FFE5CC';  // Orange/Yellow (Medium-Low)
      if (row.salary < 130000) return '#E5FFCC';  // Light Green (Medium-High)
      return '#A4D5A6';                           // Green (High)
    },
  },
];

const developerTableActions: TableAction<DeveloperRow>[] = [
  {
    icon: <IconReceipt2 color="blue"/>,
    tooltip: 'Calculate Net Salary & Estimated Tax',
    onClick: (row) => {
      const estimatedTax = row.salary * 0.22;
      const netSalary = row.salary - estimatedTax;
      alert(`[Tax Breakdown for ${row.name}]\nGross:$${row.salary.toLocaleString()}\nEst. Tax (22%): $${estimatedTax.toLocaleString()}\nNet Income:$${netSalary.toLocaleString()}`);
    }
  },
  {
    icon: <IconUsers color="teal"/>,
    tooltip: 'View Role Group Stats (Count & Avg Salary)',
    onClick: (row) => {
      const peers = developerData.filter((d) => d.role === row.role);
      const avgSalary = peers.reduce((acc, curr) => acc + curr.salary, 0) / peers.length;
      alert(`[Role Analytics: ${row.role}]\nTotal Employees in Role: ${peers.length}\nAverage Role Salary:$${Math.round(avgSalary).toLocaleString()}`);
    }
  },
  {
    icon: <IconTrendingUp color="green"/>,
    tooltip: 'Evaluate Annual Bonus Eligibility',
    onClick: (row) => {
      const bonusMultiplier = row.status === 'Active' ? 0.15 : 0.05;
      const projectedBonus = Math.round(row.salary * bonusMultiplier);
      alert(`[Bonus Projection: ${row.name}]\nStatus:${row.status}\nEligible Bonus (${bonusMultiplier * 100}\%):$${projectedBonus.toLocaleString()}`);
    }
  },
  {
    icon: <IconMail color="purple"/>,
    tooltip: 'Dispatch Performance Review Reminder',
    onClick: (row) => {
      alert(`Success: Automated performance review ping sent to ${row.name} (${row.role}).`);
    }
  },
  {
    icon: <IconTrash color="red"/>,
    tooltip: 'Delete developer record',
    onClick: (row) => {
      console.log('Targeted for deletion:', row.id);
    }
  },
];

export default function App() {
  return (
    <Stack>
      <GenericDataTable<DeveloperRow>
        tableName="Engineering Directory"
        data={developerData}
        columns={developerCols}
        showSerialNumber={true}
        maxHeight={400}
        isLoading={false}
        tableActions={developerTableActions}
      />
    </Stack>
  );
}
```

</details>

---

## Row Selection

`GenericDataTable` supports built-in row selection features via the `onRowSelect` (single row) and `onRowsSelect` (multiple rows) props. Adding either prop automatically injects a selection column filled with checkboxes at the very beginning of the table. For multi-row selection, the header cell includes a master toggle checkbox to select or deselect all visible rows simultaneously.

| Multi-Row Selection Callback | Toggle All Rows |
| :---: | :---: |
| ![On Rows Select Example](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/on-rows-select.png) | ![On Rows Select Toggle All Example](https://raw.githubusercontent.com/ShameenShetty/generic-data-table/refs/heads/main/images/on-rows-select-toggle-all.png) |
| *Selecting multiple rows individually triggers the callback consecutively with updated selected payload values.* | *Toggling the master header checkbox selects all rows at once and passes the complete dataset to the selection callback.* |

<details>
<summary><b>Click here to see an example of implementing row selection and handling multi-row callbacks</b></summary>

```tsx
import { Stack } from '@mantine/core';
import { GenericDataTable } from './components/GenericDataTable';
import type { ColumnDefinition, TableAction } from './types/table';

interface DeveloperRow {
  id: number;
  name: string;
  role: string;
  status: 'Active' | 'Inactive';
  salary: number;
}

const calculateTotalSalary = (rows: DeveloperRow[]) => {
  const result = rows.reduce((acc, curr) => {
    acc.totalSalary += curr.salary;
    return acc;
  }, { totalSalary: 0 });

  return result.totalSalary;
}

export default function App() {
  return (
    <Stack>
      <GenericDataTable<DeveloperRow>
        tableName="Engineering Directory"
        rowKey={'id'}
        data={developerData}
        columns={developerCols}
        showSerialNumber={true}
        maxHeight={400}
        isLoading={false}
        rowBgColor={(row) => (row.status === 'Active' ? 'green.2' : 'red.2')}
        onRowsSelect={(rows) => console.log(`${rows.length} users combined salary - ${calculateTotalSalary(rows)}`)}
        tableActions={developerTableActions}
      />
    </Stack>
  );
}
```
</details>

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
* **Flexible Summary Row:** Built-in column aggregations (`sum`, `count`, `avg`) alongside custom `renderSummary` slot support for composite metrics.

### 🗺️ Future Roadmap
* **Client-Side Sorting:** Ascending and descending sort toggles per column header with support for custom sort comparators.
* **Global Search & Filtering:** Built-in search input for real-time row filtering with support for custom `filterFn` predicates.
* **Native Table Export:** Integrated toolbar menu supporting direct CSV, Excel, and PDF data exports.
* **Column Management:** Interactive dropdown menu for dynamic column visibility toggling (show/hide).