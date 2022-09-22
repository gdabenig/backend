const itemsValidate = (title, price, thumbnail) => {
    if (!title || !price || !thumbnail) return { error: 'Por favor ingrese los campos requeridos'};  
    else return { title, price, thumbnail };
  };
  
  module.exports = { itemsValidate };