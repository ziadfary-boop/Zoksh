let project = document.getElementById("projects-list");

myProjects.forEach(pro =>{
    const cardHTML = `
    <div class ="cardd">
        <i class="fa-solid fa-code" style="color: var(--accent-color); font-size: 30px; margin-bottom: 15px;"></i>
        <h3>${pro.title}</h3>
        <p style="color: var(--secondary)">${pro.desc}</p>
        <a href = "${pro.link}">View Project</a>
    </div>`
    project.innerHTML += cardHTML;
});

let copyRight = document.getElementById("year");

let fullYear = new Date().getFullYear();

copyRight.innerHTML = fullYear;


let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.toggle("ligt-mode")){
        btn.innerHTML = 'Light Mode'
    }else{
        btn.innerHTML = 'Dark Mode'
    }
})
