function calculateAge() {
    const birthInput = document.getElementById("birthdate").value;
    const message = document.getElementById("message");
    message.textContent = ""; // Clear previous messages
  
    if (!birthInput) {
      message.textContent = "Please select your birthdate!";
      
      setTimeout(() => {
        message.textContent = ""; // Clear message after 3 seconds
      }, 3000);
      
      return;
    }
  
    const birthDate = new Date(birthInput);
    const today = new Date();
  
    if (birthDate > today) {
      message.textContent = "You are not born yet!";
      setTimeout(() => {
        message.textContent = ""; // Clear message after 3 seconds
      }, 3000);
           
      
      document.getElementById("years").textContent = "0";
      document.getElementById("months").textContent = "0";
      document.getElementById("days").textContent = "0";
      return;
    }
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += lastMonth;
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  }
  