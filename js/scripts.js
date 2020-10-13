var socket = io();

let text_field = document.getElementById("text-field");
let chatbox_content = document.getElementById("cb-content");
let send_button = document.getElementById("send-message");

function sendMessage()
{
  console.log("Message sent");
  socket.emit('send message', text_field.value, new Date());
}

function getDate(date)
{
  date = new Date(date);
  let day = date.getDate();
  if(day < 10) {day = "0" + day};
  let month = date.getMonth() + 1;
  if(month < 10) {month = "0" + month};
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

socket.emit('connection', "aa");

socket.on('message', function(msg, date){
  let the_date = getDate(date);
  let el = document.createElement("span");
  // el.style.color = color;
  el.innerHTML += the_date;
  el.innerHTML += msg;
  chatbox_content.appendChild(el);
});

send_button.addEventListener("click", sendMessage);
