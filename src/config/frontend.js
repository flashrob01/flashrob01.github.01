const FrontEnd_Dev_Url = ['http://127.0.0.1:3001']

const FrontEnd_Production_Url = ['https://sunshine-store.netlify.app', 'https://www.sunshine-store.netlify.app'];

module.exports = process.env.NODE_ENV === 'production' ? FrontEnd_Production_Url : FrontEnd_Dev_Url;
