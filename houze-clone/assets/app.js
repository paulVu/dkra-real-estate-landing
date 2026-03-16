const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const body = encodeURIComponent([
      'Lead The Emerald Golf View',
      `Họ tên: ${data.name || ''}`,
      `SĐT: ${data.phone || ''}`,
      `Nhu cầu: ${data.need || ''}`,
    ].join('\n'));
    window.location.href = `mailto:Salesadmin@houze.vn?subject=Lead%20Emerald%20Golf%20View&body=${body}`;
    alert('Cảm ơn bạn! Đội ngũ tư vấn sẽ liên hệ sớm.');
    form.reset();
  });
}
