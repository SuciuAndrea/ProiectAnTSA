import { defineConfig } from 'vite'
export default defineConfig({
   base: '',
   build:{
    rollupOptions: {
      input: [ "./index.html", "./about.html", "./book-appointment.html", "./bridal.html", "./coloring.html" , "./contact.html" , "./haircuts.html", "./services.html", "./stylists.html", "./texturizing.html"]
    }
  }
})