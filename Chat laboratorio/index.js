// Función que maneja el envío de mensajes
function sendMessage(user) {
    let inputField, messageClass;
  
    // input y estilo 
    if (user === 'user1') {
      inputField = document.getElementById('user1-input');
      messageClass = 'user1-message';
    } else {
      inputField = document.getElementById('user2-input');
      messageClass = 'user2-message';
    }
  
    // texto del input
    const messageText = inputField.value.trim();
  
    // que no este vacío
    if (messageText === '') {
      return;  // Si esta vacio no hace nada
    }
  
    // nuevo elemento para el mensaje
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageClass);
    messageElement.textContent = messageText;
  
    // mensaje al contenedor de mensajes
    const messageContainer = document.getElementById('message-container');
    messageContainer.appendChild(messageElement);
  
    
    inputField.value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
  