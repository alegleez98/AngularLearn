# Angular
Hola, estos son los apuntes y código sobre el curso de Angular de fernando Herrera Angular: De cero a experto

## ¿Qué es TypeScript?
    - Es un super set de Javascript.
    - Ofrece un tipado estricto y flexible.
    - Mejora enormemente la legibilidad del código.
    - Nos permite usar características modernas.
## ¿Por qué Angular usa TypeScript?
    - Tenemos la ayuda y un intellisense fuerte.
    - Tenemos tipado estricto y errores en momento de escritura.
    - Nos permite la inyección de dependencias.

## Sección 3: Bases de TypeScript
Este es un breve listado de los temas fundamentales:

    - Introducción a TypeScript
    - Tipos básicos
    - Objetos, arreglos e interfaces
    - Funciones y sus argumentos
    - Desestructuración de arreglos y objetos
    - Importaciones y exportaciones
    - Clases, constructores
    - Tipos genéricos
    - Decoradores
    - Encadenamiento opcional

La idea de esta sección no es hacerlos expertos en TypeScript, pero sí irnos acostumbrando a la sintaxis y el tipado estricto de datos.

## Sección 4: Angular
En esta sección aprenderemos sobre:

    - Señales
    - Estado
    - Propiedades
    - Rutas
    - Métodos
    - Eventos
    - Cambios en el DOM
    - Cada archivo y directorio de un proyecto

El objetivo es tener una introducción a conceptos básicos y algunos no tan básicos de Angular, para comenzar a familiarizarnos y aprender esta tecnología.
## Sección 5: Expandir bases
En esta sección veremos:

    - RouterLink
    - RouterLink Active
    - Nuevo control flow
    - @for
    - @if
    - ngClass - ngStyle - Alternativas
    - Comunicación entre componentes
    - Inputs / outputs (Como señales)
    - Servicios en Angular
    - Efectos y LocalStorage
    - LinkedSignal
    - HashRouter
    - Despliegues

Es una sección bastante completa que nos ayudará mucho a comprender el funcionamiento de Angular.

## Sección 6: GifsApp - Pensemos en componentes
Esta sección es muy importante porque nos dará las bases de lo que es trabajar en Angular diariamente.
Puntualmente veremos:

    - LazyLoad
    - Separación de rutas
    - Rutas hijas
    - Variables de entorno de Angular
    - Angular CLI
    - Inputs
    - Comunicación entre componentes
    - RouterOutlets anidados
    - Señales
    - Propiedades de componentes
    - Tailwind

La idea es ir creando un pequeño dashboard administrativo para mostrar Gifs que traeremos desde un API, aunque eso es tema de la siguiente sección, aquí empezaremos a dejar las bases y la estructura del mismo.

## Sección 7: Aplicación de Gifs
Esta sección es muy interesante porque aprenderemos:

    - Manejo de rutas dinámicas
    - Manejo de LocalStorage
    - Observables a Señales
    - Reutilización de componentes
    - Peticiones HTTP
    - Manejo de caché
    - Mapeo de información

Esta sección nos encaminará a prepararnos fuertemente en el manejo de estado de nuestra aplicación.

## Sección 8: Gifs Intermedio/Avanzado
Esta sección es opcional pero recomendada a las personas que quieran profundizar un poco más en Angular.

Puntualmente veremos:

    - Preservar estado del scroll
    - Hacer scroll infinito
    - Diseño masonry
    - Técnicas y herramientas para depurar

## Sección 9: Country SPA
En esta sección aprenderemos y reforzaremos temas como:

    - Rutas hijas
    - Rutas Anidadas
    - Creación y comunicación entre componentes
    - Tailwind y DaisyUI
    - Archivo de rutas por feature / module
    - Carga perezosa de módulos de rutas

El objetivo es armar la aplicación que luego haremos funcionar.

## Sección 10: Country SPA Funcionalidad
En esta sección aprenderemos a trabajar con:

    - Recursos como:
        - Resources
        - rxResources
    - Señales
    - Servicios
    - Reutilización de componentes
    - Peticiones http
    - Operadores de RXJS

La idea es hacer funcionar nuestra aplicación

## Sección 11: Country SPA Intermedio/Avanzado
Esta es una sección recomendada intermedia, aquí aprenderemos a manejar el caché manual de los resultados, hacer filtros y preservar la información basado en query parameters que vienen desde el URL.

Puntualmente veremos:

    - Caché
    - Router
    - QueryParameters
    - Configuraciones
    - Debounce

## Sección 12: Pipes
En esta sección estaremos trabajando con los pipes que ya vienen incluidos en Angular y su configuración, también pasaremos por la internacionalización en caso de requerir cambiar de idiomas.

Puntualmente veremos:

    - DatePipe
    - UpperCasePipe
    - LowerCasePipe
    - TitleCasePipe
    - CurrencyPipe
    - DecimalPipe
    - PercentPipe
    - i18nPluralPipe
    - i18nSelectPipe
    - JsonPipe
    - KeyValuePipe
    - SlicePipe
    - AsyncPipe

Configuraciones de internacionalización de Pipes y Aplicación

## Sección 13: Pipes Personalizados
En esta sección crearemos muchos pipes personalizados para aprender a utilizarlos en diferentes contextos.

Puntualmente crearemos:
    
    - Pipes para transformar strings
    - Pipes dentro de propiedades computadas
    - Pipes para filtrar arreglos
    - Pipes para ordenar arreglos

Al final crearemos una tabla dinámica basada en pipes

## Sección 14: Formularios Reactivos
En esta sección trabajaremos con los formularios reactivos de Angular, los cuales son muy poderosos y nos permiten poder tener el control completo de los mismos sin necesidad de paquetes de terceros.

Puntualmente veremos:

    - Reactive Forms Module en Standalone components
    - Form Builder
    - FormControls
    - FormArrays
    - Controles dinámicos
    - Formularios reactivos
    - Campos reactivos fuera de formularios
    - NgSubmit
    - Clases utilitarias
    - Validaciones básicas pre-fabricadas

## Sección 15: Formularios Reactivos
En esta sección continuaremos los formularios reactivos tocando temas de:

    - Validaciones personalizadas
        - Síncronas
        - Asíncronas
    - Validaciones con
        - Patrones
        - Expresiones regulares
        - Palabras en concreto
    - Selectores
    - Checkboxes
    - Radios
    - Peticiones HTTP en secuencai
    - Suscripciones de cambios de los campos del formulario
    - Limpieza de suscripciones
    - Operadores de RXJS útiles

Es una sección muy completa que les ayudará a poder manejar los formularios de una forma efectiva mientras aprendemos sobre operadores y funciones de RXJS.

## Sección 16: Life Hooks 
En esta sección vamos a trabajar con el ciclo de vida de los componentes de Angular, esto incluye otros hooks o funciones que son disparadas ppr Angular en un momento determinado del tiempo.

Puntualmente veremos:

    - Todos los pasos del ciclo de vida tradicional
    - Nuevos hooks basados en señales
    - Ciclo de vida cuando cambian inputs (comunicación entre componentes)

## Sección 17: Mapas
En esta sección aprenderemos a trabajar con:

    - Mapas
        - A pantalla completa
        - Como componete individual
        - Marcadores y señales
    - Variables de entorno .env
    - Scripts de Node
    - Despliegues

La idea es que puedan en Angular, asimilar un paquete externo y utilizarlo a su voluntad.
## Sección 18: TesloShop Aplicación administrativa
En esta sección estaremos dejando las bases para el ejercicio final en el cual estaremos trabajando, la idea es crear una aplicación real completa en Angular, esta aplicación servirá para utilizar el framework como lo usarán allá afuera en el mundo laboral.

Puntualmente veremos:

    - Separación por feature module
    - TailwindCSS y DaisyUI
    - Assets estáticos como imágenes y fuentes
    - Un poco de Docker
    - Peticiones HTTP
    - Variables de entorno
    - Pipes personalizados en acción
    - Señales y recursos (rxResources)

## Sección 19: Paginación
Esta sección es relativamente pequeña y aprenderemos sobre:

    - Paginación via URL
    - Re-utilización de componentes y servicios
    - Caché de productos y producto
    - Organización de archivos y directorios

## Sección 20: Autenticación y autorización
En esta sección aprenderemos a:

    - Crear un login basado en JWTs
    - Guards
    - Interceptores
    - Autenticar peticiones
    - Controlar quien puede ver una ruta o no
    - Usar el principio DRY

La idea es crear un método de login real para que aprendamos los diferentes conceptos necesarios para validar el control de acceso a los recursos de nuestra aplicación.
<<<<<<< HEAD

## Sección 21: Panel administrativo
En esta sección crearemos un panel administrativo para mostrar y darle mantenimiento a nuestros productos.

Puntualmente veremos temas como:

    - Autorización
    - Formularios reactivos
    - Control del formulario
    - Validaciones
    - Posteos para crear productos
    - Patch para actualizar productos
    - Paginación
    - RxResource con otros argumentos
    - Manejo de caché
=======
>>>>>>> 8b1a841b6a8b182dcd327a72beb30887b19ec5a2
