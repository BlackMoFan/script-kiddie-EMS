const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-button");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
});

// fill recently added in table
const statusClass = status => {
    if(status === 'Employed') return 'success';
    else if(status === 'On leave') return 'warning';
    else if(status === 'Resigned' || status === 'Fired' || status === 'Retired') return 'danger';
    else return null;
};

recentlyAdded.forEach(add => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${add.employeeID}</td>
                        <td>${add.employeeName}</td>
                        <td>${add.employeeRole}</td>
                        <td>${add.doe}</td>
                        <td class="${statusClass(add.employmentStatus)}">${add.employmentStatus}</td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});