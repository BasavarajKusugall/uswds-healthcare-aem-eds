/**
 * Form block - HTML form with styled inputs
 * @param {Element} block The form block element
 */
export default async function decorate(block) {
  const form = document.createElement('form');
  form.className = 'form-wrapper';
  
  // Convert table rows to form fields
  const rows = block.querySelectorAll(':scope > div');
  
  rows.forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');
    if (cells.length >= 2) {
      const label = cells[0].textContent.trim();
      const fieldType = cells[1].textContent.toLowerCase();
      
      const formGroup = document.createElement('div');
      formGroup.className = 'form-group';
      
      const labelEl = document.createElement('label');
      labelEl.textContent = label;
      labelEl.className = 'form-label';
      
      let field;
      
      if (fieldType.includes('text')) {
        field = document.createElement('input');
        field.type = 'text';
        field.className = 'form-input';
      } else if (fieldType.includes('email')) {
        field = document.createElement('input');
        field.type = 'email';
        field.className = 'form-input';
      } else if (fieldType.includes('textarea')) {
        field = document.createElement('textarea');
        field.className = 'form-textarea';
        field.rows = 4;
      } else if (fieldType.includes('select')) {
        field = document.createElement('select');
        field.className = 'form-select';
      } else if (fieldType.includes('checkbox')) {
        field = document.createElement('input');
        field.type = 'checkbox';
        field.className = 'form-checkbox';
        labelEl.className = 'form-checkbox-label';
      } else if (fieldType.includes('radio')) {
        field = document.createElement('input');
        field.type = 'radio';
        field.className = 'form-radio';
        labelEl.className = 'form-radio-label';
      } else {
        field = document.createElement('input');
        field.type = 'text';
        field.className = 'form-input';
      }
      
      field.id = label.toLowerCase().replace(/\s+/g, '-');
      labelEl.htmlFor = field.id;
      
      formGroup.appendChild(labelEl);
      formGroup.appendChild(field);
      form.appendChild(formGroup);
    }
  });
  
  // Add submit button
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'form-actions';
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'button primary';
  submitBtn.textContent = 'Submit';
  buttonGroup.appendChild(submitBtn);
  form.appendChild(buttonGroup);
  
  block.textContent = '';
  block.appendChild(form);
}
