// assets/script.js
document.getElementById('surveyForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Coletar respostas
  const formData = new FormData(e.target);
  const respostas = Object.fromEntries(formData);
  
  try {
    // Enviar para o Netlify Function
    const response = await fetch('/.netlify/functions/salvar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(respostas)
    });
    
    const result = await response.json();
    alert(result.mensagem);
  } catch (error) {
    console.error('Erro:', error);
  }
});