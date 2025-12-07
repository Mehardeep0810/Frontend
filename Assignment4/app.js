(function initDateSelects() {
  const daySel = document.getElementById('day');
  const monthSel = document.getElementById('month');
  const yearSel = document.getElementById('year');

  for (let d = 1; d <= 31; d++) {
    daySel.innerHTML += `<option value="${d}">${d}</option>`;
  }

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  months.forEach((m, i) => {
    monthSel.innerHTML += `<option value="${i+1}">${m}</option>`;
  });

  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= currentYear - 50; y--) {
    yearSel.innerHTML += `<option value="${y}">${y}</option>`;
  }

  const now = new Date();
  daySel.value = now.getDate();
  monthSel.value = now.getMonth() + 1;
  yearSel.value = now.getFullYear();
})();

(function initSalaryListener() {
  const salaryInput = document.getElementById('salary');
  const salaryValue = document.getElementById('salaryValue');

  const updateDisplay = () => {
    salaryValue.textContent = salaryInput.value;
  };

  salaryInput.addEventListener('input', updateDisplay);
  updateDisplay();
})();

function validateName(name) {

  const re = /^[A-Z][a-zA-Z\s]{2,}$/;
  return re.test(name.trim());
}

function parseSelectedDate(day, month, year) {
  return new Date(Number(year), Number(month) - 1, Number(day));
}

function validateStartDate(day, month, year) {
  const selected = parseSelectedDate(day, month, year);
  const today = new Date();

  selected.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (selected.getTime() > today.getTime()) {
    return { valid: false, reason: 'Start date must not be a future date.' };
  }

  const msInDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((today.getTime() - selected.getTime()) / msInDay);
  if (diffDays > 30) {
    return { valid: false, reason: 'Start date should be within the last 30 days.' };
  }

  return { valid: true };
}

(function initActions() {
  const form = document.getElementById('employeeForm');
  const cancelBtn = document.getElementById('cancelBtn');
  const result = document.getElementById('result');

  cancelBtn.addEventListener('click', () => {
    form.reset();
    result.style.display = 'none';
    result.textContent = '';
    document.getElementById('salaryValue').textContent = document.getElementById('salary').value;
    document.getElementById('nameError').textContent = '';
    document.getElementById('dateError').textContent = '';
  });

  form.addEventListener('reset', () => {
    result.style.display = 'none';
    result.textContent = '';
    setTimeout(() => {
      document.getElementById('salaryValue').textContent = document.getElementById('salary').value;
      document.getElementById('nameError').textContent = '';
      document.getElementById('dateError').textContent = '';
    }, 0);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const salary = document.getElementById('salary').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const notes = document.getElementById('notes').value;

    const profilePic = document.querySelector('input[name="profilePic"]:checked')?.value || null;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || null;
    const departments = Array.from(document.querySelectorAll('input[name="department"]:checked'))
      .map(chk => chk.value);

    let valid = true;

    const nameErrorEl = document.getElementById('nameError');
    if (!validateName(name)) {
      nameErrorEl.textContent = 'Name must start with a capital letter and have at least 3 characters.';
      valid = false;
    } else {
      nameErrorEl.textContent = '';
    }

    const dateValidation = validateStartDate(day, month, year);
    const dateErrorEl = document.getElementById('dateError');
    if (!dateValidation.valid) {
      dateErrorEl.textContent = dateValidation.reason;
      valid = false;
    } else {
      dateErrorEl.textContent = '';
    }

    if (!valid) {
      result.style.display = 'none';
      result.textContent = '';
      return;
    }

    const employeePayroll = {
      name,
      profilePic,
      gender,
      departments,
      salary: Number(salary),
      startDate: {
        day,
        month,
        year,
        iso: parseSelectedDate(day, month, year).toISOString().slice(0, 10)
      },
      notes,
      createdAt: new Date().toISOString()
    };

    result.style.display = 'block';
    result.textContent = JSON.stringify(employeePayroll, null, 2);
  });
})();
