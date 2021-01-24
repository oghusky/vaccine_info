d3
  .json("/vacs")
  .then(data => {
    const dataset = data.data;
    const high_vacs = dataset.filter(item => item.daily_vacs > 50000 && item.made_by.includes("Pfizer/BioNTech"))
    const tbody = document.querySelector("tbody");
    high_vacs.map(item => {
      tbody.innerHTML += `
      <tr>
        <td>${item.country}</td>
        <td>${item.date}</td>
        <td>${item.daily_vacs}</td>
        <td>${item.total_vacs}</td>
        <td>${item.made_by}</td>
        <td>${item.vacs_cap}</td>
        <td>${item.source}</td>

      </tr>
      `
    })
  })