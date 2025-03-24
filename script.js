// Show and Hide Forms
function showForm(formId) {
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(`${formId}Form`).style.display = 'block';
}

// Handle Form Submission and Display Data
function handleFormSubmit(formId, tableId, fields) {
    const form = document.getElementById(formId);
    const table = document.getElementById(tableId).querySelector('tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const row = document.createElement('tr');

        fields.forEach(field => {
            const inputElement = form.querySelector(`#${field}`);
            const cell = document.createElement('td');

            if (inputElement) {
                if (inputElement.tagName === "SELECT") {
                    // Get selected text from dropdowns
                    cell.textContent = inputElement.options[inputElement.selectedIndex].text;
                } else {
                    cell.textContent = inputElement.value;
                }
                row.appendChild(cell);
            } else {
                console.error(`Field '${field}' not found in form ${formId}!`);
            }
        });

        // Add Actions (Delete Button)
        const actionsCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => row.remove();
        actionsCell.appendChild(deleteBtn);
        row.appendChild(actionsCell);

        table.appendChild(row);
        form.reset();
    });
}

// Initialize Form Handlers
handleFormSubmit('facultyFormInner', 'facultyTable', [
    'fid', 'name', 'email', 'salary', 'gender', 'dob', 'address', 'contact'
]);

handleFormSubmit('studentFormInner', 'studentTable', [
    'studentId', 'studentName', 'studentEmail', 'studentAge', 'studenyContact',
    'studentAdmission', 'gender', 'dob', 'address', 'semester', 'Rollno'
]);

handleFormSubmit('courseFormInner', 'courseTable', [
    'courseId', 'courseName', 'courseCode'
]);

handleFormSubmit('departmentFormInner', 'departmentTable', [
    'deptId', 'deptName'
]);

handleFormSubmit('staffFormInner', 'staffTable', [
    'staffId', 'staffName', 'staffRole', 'gender', 'email', 
    'salary', 'dob', 'address', 'contact'
]);

// Default to showing the Faculty form
showForm('faculty');
