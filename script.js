document.addEventListener("DOMContentLoaded", function () {
    const jobList = document.getElementById("job-list");
    const timestamp = document.getElementsByTagName("time")[0];
    console.log(timestamp);

    fetch("https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=engineering")
        .then(response => response.json())
        .then(data => {
            jobList.innerHTML = ""; // Clear loading message
            timestamp.innerHTML = data.lastUpdate;
            data.jobs.forEach(job => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${job.jobTitle}</td>
                    <td>${job.companyName}</td>
                    <td>${job.jobGeo}</td>
                    <td><a href="${job.url}" target="_blank">Apply</a></td>
                `;
                jobList.appendChild(row);
            });
        })
        .catch(error => {
            jobList.innerHTML = "<tr><td colspan='4'>Failed to load jobs.</td></tr>";
            console.error("Error fetching job listings:", error);
        });
});
