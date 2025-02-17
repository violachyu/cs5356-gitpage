document.addEventListener("DOMContentLoaded", function () {
    fetchData()
});

// Job Type Filter Behavior
document.getElementsByName('checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function() { // mouse event
        document.getElementsByName('checkbox').forEach(item => {
            if (item !== this){
                item.checked = false; // uncheck all other boxes
            } else {
                query = item.id;
                console.log(query)
                fetchData(query);
            }
        });
    });
});



/* Util */
function fetchData(query='') {
    const jobList = document.getElementById("job-list");
    const timestamp = document.getElementsByTagName("time")[0];

    fetch(`https://jobicy.com/api/v2/remote-jobs?geo=usa&industry=engineering`)
        .then(response => response.json())
        .then(data => {
            jobList.innerHTML = ""; // Clear loading message
            timestamp.innerHTML = data.lastUpdate;

            let filterResults = data.jobs.filter(job =>{ 
                return job.jobTitle.toLowerCase().includes(query.toLowerCase())
            });

            filterResults.forEach(job => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${job.jobTitle}</td>
                    <td>${job.companyName}</td>
                    <td>${job.jobType}</td>
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
}
