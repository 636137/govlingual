const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simple translation dictionary
const translations = {
  es: {
    'Hello': 'Hola',
    'Welcome': 'Bienvenido',
    'Apply': 'Aplicar',
    'Submit': 'Enviar',
    'Name': 'Nombre',
    'Address': 'Dirección',
    'Phone': 'Teléfono',
    'Email': 'Correo electrónico',
    'Date': 'Fecha',
    'Thank you': 'Gracias',
    'Please wait': 'Por favor espere',
    'Your application has been submitted': 'Su solicitud ha sido enviada'
  },
  zh: {
    'Hello': '你好',
    'Welcome': '欢迎',
    'Apply': '申请',
    'Submit': '提交',
    'Name': '姓名',
    'Address': '地址',
    'Phone': '电话',
    'Email': '电子邮件'
  },
  ar: {
    'Hello': 'مرحبا',
    'Welcome': 'أهلا بك',
    'Apply': 'تطبيق',
    'Submit': 'إرسال',
    'Name': 'اسم',
    'Address': 'عنوان'
  }
};

app.post('/api/translate', (req, res) => {
  const { text, targetLang } = req.body;
  
  if (!translations[targetLang]) {
    return res.status(400).json({ error: 'Language not supported' });
  }
  
  const translated = translations[targetLang][text] || text;
  
  res.json({
    original: text,
    translated,
    targetLang,
    confidence: 0.95
  });
});

app.post('/api/translate-batch', (req, res) => {
  const { texts, targetLang } = req.body;
  
  if (!translations[targetLang]) {
    return res.status(400).json({ error: 'Language not supported' });
  }
  
  const results = texts.map(text => ({
    original: text,
    translated: translations[targetLang][text] || text
  }));
  
  res.json({ results, targetLang });
});

app.get('/api/languages', (req, res) => {
  res.json({
    supported: [
      { code: 'es', name: 'Spanish', native: 'Español' },
      { code: 'zh', name: 'Chinese', native: '中文' },
      { code: 'ar', name: 'Arabic', native: 'العربية' }
    ]
  });
});

const PORT = 3008;
app.listen(PORT, () => console.log(`GovLingual API on port ${PORT}`));
