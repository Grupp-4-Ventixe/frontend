import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
<<<<<<< HEAD
<<<<<<< HEAD
    react(), 
    tailwindcss(), 
=======
    react()
    , tailwindcss()
>>>>>>> 2bc2c6c (feat: integrate Tailwind CSS for styling)
=======
    react(), 
    tailwindcss(), 
>>>>>>> 6fd1e03 (feat: add daisyUI for enhanced component styling)
  ],
})
