// netlify/functions/salvar.js
exports.handler = async (event) => {
  try {
    const dados = JSON.parse(event.body);
    console.log('Dados recebidos:', dados);
    
    // Aqui você pode salvar em um banco de dados depois
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        mensagem: "Respostas salvas com sucesso!",
        dados: dados
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro ao processar respostas' })
    };
  }
};