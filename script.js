
function sendEmail(){
 let params={
     Name: document.getElementById("name").value,
     Email:document.getElementById("email").value,
     Subject:document.getElementById("subject").value,
     Message:document.getElementById("message").value,
 }

 emailjs.send("service_r0gyc99","template_db4wb7e",params).then(alert("Email sent"));
}
