const app = Vue.createApp({
  // template: `
  //       <h1>Hola mundo</h1>
  //       <p>{{ true ? 'Activo' : 'Inactivo' }}</p>
  //   `,

  // Component State
  data() {
    return {
      quote: 'What time is it?',
      author: 'Peter',
    };
  },

  methods: {
    changeQuote() {
      this.author = 'Alex';
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    },
  },
});

app.mount('#myApp');
