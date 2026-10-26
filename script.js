
function getUsers(){return JSON.parse(localStorage.getItem("beautyUsers")||"[]")}
function registerUser(e){
 e.preventDefault(); let users=getUsers(), email=regEmail.value.trim();
 if(users.some(u=>u.email===email)){regMsg.textContent="Email already registered.";return}
 users.push({name:regName.value,email,mobile:regMobile.value,password:regPass.value});
 localStorage.setItem("beautyUsers",JSON.stringify(users)); regMsg.textContent="Registration successful! You can now login.";
 e.target.reset();
}
function loginUser(e){
 e.preventDefault(); let u=getUsers().find(x=>x.email===loginEmail.value.trim()&&x.password===loginPass.value);
 if(!u){loginMsg.textContent="Invalid email or password.";return}
 localStorage.setItem("beautyCurrentUser",JSON.stringify(u)); location.href="dashboard.html";
}
function bookAppointment(e){
 e.preventDefault(); let a=JSON.parse(localStorage.getItem("beautyAppointments")||"[]");
 a.push({name:appName.value,mobile:appMobile.value,service:appService.value,date:appDate.value,time:appTime.value,status:"Booked"});
 localStorage.setItem("beautyAppointments",JSON.stringify(a)); appMsg.textContent="Appointment booked successfully!"; e.target.reset();
}
function contactForm(e){e.preventDefault();contactMsg.textContent="Thank you! Your message has been received.";e.target.reset()}
if(location.pathname.endsWith("dashboard.html")){
 let u=JSON.parse(localStorage.getItem("beautyCurrentUser")||"null"); welcome.textContent=u?`Welcome, ${u.name}!`:"Welcome, Guest";
 let a=JSON.parse(localStorage.getItem("beautyAppointments")||"[]");
 appointments.innerHTML=a.length?`<table><tr><th>Name</th><th>Service</th><th>Date</th><th>Time</th><th>Status</th></tr>${a.map(x=>`<tr><td>${x.name}</td><td>${x.service}</td><td>${x.date}</td><td>${x.time}</td><td>${x.status}</td></tr>`).join("")}</table>`:"<p>No appointments found.</p>";
}
