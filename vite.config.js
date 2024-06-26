import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 server:{
  host:true
 },
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
})
// JZ8R165X8ZWYSGYZ4WAA83Z3;