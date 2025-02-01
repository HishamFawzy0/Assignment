# 📌 Assignment - Angular Table Component

## 📖 Overview

This project is an **Angular-based dynamic table component** designed to efficiently display and interact with tabular data. It includes features such as:

✅ **Dynamic Data Binding** using `@Input`  
✅ **Event Handling** using `@Output`, `EventEmitter` and `Services`
✅ **Customizable Column Headers**  
✅ **Row Selection Feature**  
✅ **Responsive Design**  

The table component is fully reusable and can be easily integrated into any Angular application by dynamically passing data.

---

## 🛠️ Technologies Used

- **Angular** - Frontend framework  
- **TypeScript** - Strongly typed JavaScript  
- **Bootstrap** *(if used for styling)*  

---

## ⚙️ Features & Functionality

### 1️⃣ Passing Data to the Table (`@Input`)

The table component receives data dynamically from the parent component using `@Input` properties.

```typescript
@Input() tableData: any[] = []; // Holds the data to be displayed
@Input() tableHeaders: string[] = []; // Defines the column headers
```

#### Example Usage in Parent Component:

```html
<app-table [tableData]="users" [tableHeaders]="['Name', 'Email']"></app-table>
```

```typescript
users = [
  { name: 'Hisham', email: 'hisham@example.com' },
  { name: 'Momo', email: 'momo@example.com' }
];
```

---

### 2️⃣ Emitting Events (`@Output` & `EventEmitter`)

The component uses `@Output` and `EventEmitter` to send data back to the parent component when a row is selected.

```typescript
@Output() rowSelected = new EventEmitter<any>();

selectRow(row: any) {
  this.rowSelected.emit(row);
}
```

#### Handling Row Selection in Parent Component:

```html
<app-table [tableData]="users" [tableHeaders]="['Name', 'Email']" (rowSelected)="onRowSelect($event)"></app-table>
```

```typescript
onRowSelect(row: any) {
  console.log('Selected Row:', row);
}
```

---

## 🏗️ Component Structure

```
📂 src/app
 ┣ 📂 components
 ┃ ┗ 📂 table
 ┃ ┃ ┣ 📜 table.component.ts  → Main logic
 ┃ ┃ ┣ 📜 table.component.html → Template (UI)
 ┃ ┃ ┣ 📜 table.component.scss → Styling
 ┃ ┃ ┗ 📜 table.component.spec.ts → Unit tests
```

---

## 📸 Screenshot (Example UI)

🚀 *(Add a screenshot of your table UI here if possible)* 🚀

---

## 🛠️ How to Use

### 1️⃣ Install Dependencies

Run the following command to install the required dependencies:

```sh
npm install
```

### 2️⃣ Run the Project

```sh
ng serve
```

### 3️⃣ Open in Browser

Navigate to `http://localhost:4200/` to see the app in action.

---

## 🛡️ Future Enhancements

- ✅ Add Sorting Functionality  
- ✅ Implement Pagination  
- ✅ Add Filtering & Search  

---

## 🤝 Contributing

Feel free to contribute by submitting issues or pull requests.

---

## 📜 License

This project is **MIT licensed**.

---

🚀 **Happy Coding!** 😎

