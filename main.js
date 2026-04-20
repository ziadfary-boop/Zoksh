async function getData(){
    try{
        let resposne = await fetch("https://api.github.com/users/ziad-mohammed/repos");
        let data = await resposne.json();

        console.log(data)
    }catch(error){
        console.log(error)
    }
}
const myProjects = [
    {
        title: "Weather App",
        desc: "موقع بيعرفك حالة الطقس باستخدام الـ API",
        link: "#"
    },
    {
        title: "To-Do List",
        desc: "تطبيق بسيط لتنظيم المهام اليومية",
        link: "#"
    },
    {
        title: "Portfolio",
        desc: "موقعي الشخصي اللي أنا شغال عليه دلوقتي",
        link: "#"
    }
    
];
getData();

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
