const users = [];
let currentIndex = 0;

fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => {
        data.results.forEach(user => {
            users.push({
                photo: user.picture.large,
                name: `${user.name.first} ${user.name.last}`,
                email: user.email
            });
        });


        renderUser();
    });

function renderUser() {
    const user = users[currentIndex];
    document.getElementById("avatar").src = user.photo;
    document.getElementById("name").textContent = user.name;
    document.getElementById("email").textContent = user.email;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= users.length) {
        currentIndex = 0;
    }
    renderUser();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = users.length - 1;
    }
    renderUser();
});
