# Prácticas TypeScript

Este repositorio contiene ejercicios y ejemplos prácticos para aprender y practicar TypeScript en diferentes contextos: desde scripts simples hasta un mini servidor HTTP con Node.js.

## Estructura del repositorio

- **01-primera_parte/**
  - `hello-world.ts` / `hello-world.js`: Primer ejemplo en TypeScript, imprime un mensaje en consola.
  - `index.html`: Archivo HTML que carga el script compilado.

- **02-segunda_parte/**
  - `tipos.ts` / `tipos.js`: Ejercicios sobre tipos de datos, arreglos y enums en TypeScript.

- **03-tercera_parte/**
  - `src/app.ts`: Ejemplo de un servidor HTTP básico usando Node.js y TypeScript.
  - `dist/app.js`: Código JavaScript compilado listo para ejecutarse con Node.js.
  - `package.json`, `tsconfig.json`: Configuración de dependencias y compilación.

## Requisitos

- Node.js (v18+ recomendado)
- npm
- TypeScript (`npm install -g typescript` si lo deseas global)

## Instalación y uso

### 1. Clona el repositorio
```bash
git clone https://github.com/cristianbarreiro/practicas_typescript.git
cd practicas_typescript
```

### 2. Ejecución de ejemplos

#### Primera parte (Hello World)
1. Compila el archivo:
   ```bash
   tsc 01-primera_parte/hello-world.ts
   ```
2. Abre `01-primera_parte/index.html` en tu navegador para ver el resultado en consola.

#### Segunda parte (Tipos y enums)
1. Compila el archivo:
   ```bash
   tsc 02-segunda_parte/tipos.ts
   ```
2. Ejecuta el archivo compilado:
   ```bash
   node 02-segunda_parte/tipos.js
   ```

#### Tercera parte (Servidor HTTP con TypeScript)
1. Instala las dependencias:
   ```bash
   cd 03-tercera_parte
   npm install
   ```
2. Compila el código TypeScript:
   ```bash
   npm run build
   # o
   tsc
   ```
3. Ejecuta el servidor:
   ```bash
   npm start
   # o
   node dist/app.js
   ```
4. Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver el mensaje del servidor.

### Desarrollo con recarga automática
En la carpeta `03-tercera_parte` puedes usar:
```bash
npm run dev
```
Esto recompila y reinicia el servidor automáticamente al guardar cambios.

## Notas
- Cada carpeta es independiente y pensada para practicar conceptos distintos de TypeScript.
- Puedes modificar los ejemplos y experimentar libremente.

## Autor
Cristian Barreiro

---
¡Explora, aprende y diviértete programando con TypeScript!
