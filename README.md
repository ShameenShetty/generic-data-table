# GenericDataTable

`GenericDataTable` is a highly customizable, type-safe data table component built on top of Mantine UI. Designed specifically for complex enterprise workflows, it bridges the gap between structured tabular display and dynamic inline cell editing.

---

## Core Purpose

In applications managing transactional records—such as purchasing, invoicing, and inventory settlements—users frequently need to alternate between reviewing structured data and quickly modifying cell values. 

`GenericDataTable` standardizes table behavior across your application by providing:
* **Strict Type Safety:** Fully typed column definitions and data models preventing runtime field reference bugs.
* **Inline Editable Fields:** Seamless toggling between static read-only presentation and interactive input components per column.
* **Keyboard-Driven Workflows:** Excel-like keyboard navigation (such as pressing `Enter` to commit shifts or trigger actions).
* **Row-Level Transformations:** Centralized hooks to normalize, recalculate, or transform row state upon cell edits before committing changes.

---

## Features Breakdown

### 1. Flexible Column Definitions (`ColumnDefinition`)
Extends standard table column properties to support dynamic rendering and custom edit states.

* **`key` / `accessorKey`:** Strongly-typed property path pointing to the data field in your row object.
* **`render`:** Custom render function for standard read-only view.
* **`renderEdit`:** Specialized render function for edit mode. Allows embedding input components like Mantine's `TextInput`, `NumberInput`, `Select`, or `DatePickerInput` directly inside cells.
* **`header`:** Label or custom JSX element rendered in the table header.
* **`width` / `minWidth` / `maxWidth`:** Fine-grained sizing controls for responsive table layouts.

### 2. Custom Edit Controls (`renderEdit`)
Allows turning any cell into an inline input control. When a row enters edit mode, `renderEdit` provides access to the current row instance, field value, and update handlers:

```tsx
renderEdit: ({ value, onChange, row }) => (
  <NumberInput autoFocus min="{0}" onChange="{onChange}" precision="{2}" value="{value}"/>
)