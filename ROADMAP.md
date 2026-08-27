# GenericDataTable — Planned Features & Technical Roadmap

This document outlines the planned feature set, architectural refactors, and enterprise capabilities scheduled for future releases.

---

## 1. Core Architecture & Type Safety

### 1.1 Optional Property Keys & Explicit Column IDs
* **Status:** Planned
* **Problem Addressed:** Previous implementations relied on magic strings (e.g., `'N/A'`) when defining display-only or computed columns, introducing runtime bugs and type-checker friction.
* **Solution:** Decouple column identification from data accessor keys:
  * `id: string`: Unique identifier for React rendering keys and internal column tracking.
  * `key?: keyof T`: Optional property binding. Omitting `key` explicitly marks a column as display-only or computed without requiring magic string workarounds.

### 1.2 Primary Key Extraction (`getRowId`)
* **Status:** Planned
* **Problem Addressed:** Tracking active, selected, or edited rows via object references (`selectedRow === row`) or array indices (`editingRowIdx`) leads to state corruption when background refetches, sorting, or filtering re-instantiate objects or reorder indices.
* **Solution:** Introduce a mandatory primary key extractor: `getRowId: (row: T) => string | number`. Row selection, active inline editing state, and virtualization keys will track stable unique primary keys.

### 1.3 Unopinionated Theme & Style Injection
* **Status:** Planned
* **Problem Addressed:** Hardcoded project color tokens and rigid border styling limit package reusability across different applications and visual designs.
* **Solution:** Provide comprehensive style props, `classNames`, and theme override tokens (`headerBgColor`, `hoverBgColor`, `borderColor`, `stripedBgColor`), allowing consumers to align GDT with any Mantine theme context or CSS design system.

---

## 2. Dynamic Cell Rendering & UI Capabilities

### 2.1 Rich `ReactNode` Accessor Output
* **Status:** Planned
* **Problem Addressed:** Accessor functions were restricted to primitive outputs (`string | number`), preventing columns from rendering embedded badges, icons, interactive controls, or custom layout cards.
* **Solution:** Expand column accessors to return `React.ReactNode`: `(item: T) => React.ReactNode`. Columns can render status badges, progress bars, and custom action layouts directly while keeping `T` pure.

### 2.2 Declarative Row Actions Engine
* **Status:** Planned
* **Problem Addressed:** Action column icons (e.g., pencil/trash buttons) were hardcoded into table rendering logic.
* **Solution:** Implement an array-driven action configuration (`actions?: RowAction<T>[]`) supporting:
  * Per-row conditional visibility (`hidden?: (row: T) => boolean`).
  * Dynamic disabled states (`disabled?: (row: T) => boolean`).
  * Custom iconography, tooltips, and color variants.
  * Isolated click handlers with automatic `e.stopPropagation()` calls to prevent unwanted row-selection triggers.

---

## 3. Data Querying, Sorting & Filtering

### 3.1 Inline Header Filtering Row
* **Status:** Planned
* **Problem Addressed:** Filtering table rows required consumers to manually construct external search inputs and search engines (e.g., Fuse.js).
* **Solution:** An injectable filter row inside `<Table.Thead>` containing responsive, debounced (200–300ms) input controls per column:
  * **Client-Side Mode:** Automatic in-memory filtering across typed row data.
  * **Server-Side Mode:** Emits a structured filter state `Record<string, string>` via `onFilterChange`.
  * **Custom Controls:** `renderFilter` hook to render specialized inputs (e.g., Mantine `Select`, `DateInput`).

### 3.2 Multi-Column Header Sorting
* **Status:** Planned
* **Problem Addressed:** Lack of standard column-level sorting mechanics.
* **Solution:** Opt-in column sorting via `sortable?: boolean`:
  * Visual header sort indicators (neutral, ascending, descending).
  * Built-in client-side comparator logic for primitive values.
  * `onSortChange` delegate callback for server-side query integration.

---

## 4. Toolbar, Record Metrics & Export Systems

### 4.1 Integrated Header Bar & Summary Badge
* **Status:** Planned
* **Problem Addressed:** Tables lacked unified visual framing for titles, metrics, and global actions.
* **Solution:** A top toolbar bar featuring:
  * Table title (`tableName?: string`).
  * Record count pill (`showRecordCount?: boolean`) displaying real-time metrics (e.g., `Filtered: 25 | Total: 469`).
  * Extension slot (`headerRightSection`) for inserting custom action buttons or modal triggers (`+`).

### 4.2 Built-in Modular Export System (Excel & PDF)
* **Status:** Planned
* **Problem Addressed:** Rendered `ReactNode` elements cannot be cleanly parsed by raw document export tools.
* **Solution:** A top-right 3-dots export menu (`xlsx` and `jspdf-autotable`) paired with an optional `exportValue?: (item: T) => string | number` prop on `ColumnDefinition`. When accessors render JSX, `exportValue` extracts raw values for clean file output.

---

## 5. Performance & Inline State Reliability

### 5.1 Opt-in DOM Virtualization
* **Status:** Planned
* **Problem Addressed:** Rendering thousands of unbounded table DOM nodes causes frame drops and UI latency.
* **Solution:** Integrated windowing engine (`virtualized?: boolean`) powered by DOM virtualization tools (e.g., `@tanstack/react-virtual`). Only viewport-visible rows are rendered, maintaining 60 FPS performance across 10,000+ items.

### 5.2 Key-Based Inline Editing & Event Isolation
* **Status:** Planned
* **Problem Addressed:** Cell modifications were prone to state loss or accidental focus shifts during sorting or refetches.
* **Solution:** Track active edit states via `editingRowId` (derived from `getRowId`). Focus management state machines guarantee isolated single-cell edit behavior (`renderEdit`) without unexpected double-click or focus bugs.