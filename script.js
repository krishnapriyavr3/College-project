// Show and Hide Forms
function showForm(formId) {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.style.display = 'none');
    document.getElementById(`${formId}Form`).style.display = 'block';
  }
  
  // Handle Form Submission and Display Data
  function handleFormSubmit(formId, tableId, fields) {
    const form = document.getElementById(formId);
    const table = document.getElementById(tableId).querySelector('tbody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const row = document.createElement('tr');
  
      fields.forEach(field => {
        const cell = document.createElement('td');
        cell.textContent = document.getElementById(field).value;
        row.appendChild(cell);
      });
  
      // Add Actions
      const actionsCell = document.createElement('td');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => row.remove();
      actionsCell.appendChild(deleteBtn);
      row.appendChild(actionsCell);
  
      table.appendChild(row);
      form.reset();
    });
  }
  
  // Initialize Form Handlers
  handleFormSubmit('facultyFormInner', 'facultyTable', ['fid', 'name', 'email', 'salary', 'gender', 'dob', 'address', 'contact']);
  handleFormSubmit('studentFormInner', 'studentTable', ['studentId', 'studentName', 'studentEmail', 'studentAge']);
  handleFormSubmit('courseFormInner', 'courseTable', ['courseId', 'courseName', 'courseCode']);
  handleFormSubmit('departmentFormInner', 'departmentTable', ['deptId', 'deptName']);
  handleFormSubmit('staffFormInner', 'staffTable', ['staffId', 'staffName', 'staffRole']);
  
  // Default to showing the Faculty form
  showForm('faculty');
  