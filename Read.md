# Instalaciones recomendadas - Curso de JavaScript

1. Instalar Node
[Sitio oficial de node](https://nodejs.org/es/)

2. Instalar VSCode
[Editor Visual Studio Code](https://code.visualstudio.com/)

3. Instalar Google Chrome [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)

4. Descargar e instalar [Postman](https://www.postman.com/downloads/)

## Extensiones de VSCode

[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

## Extensiones de Chrome

[Json Viewer Pro](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc)

## Extensiones útiles de VSCode

* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

* [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### Configuración del Bracket Pair Colorizer 2
#### Obsoleto, pero aún lo pueden usar

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
```
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#C497D4"
],
```
### Tema que estoy usando en VSCode:

* [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

$ node app.js -> ejecutar

Principal problema con la inicialización de variables con Var
Las variables definidas como 'let' o 'const' no sobreescriben las variables que se encuentran en 
el objeto global window a diferencia del var, por eso no es recomendable usarlo en la actualidad

En cambio con var la declaración es global, sin importar el contexto. La variable es leida y Javascript ya sabe que existe la variable.(Hoisting)

e.g.
window.outerWidth
1366
window.outerHeight
728

ahora, definir dos variables como 'var' con esos mismos nombres(outerWidth,outerHeight) asignando 
valores diferentes a (1366, 728)

Tipos de datos primitivos: Es una información que NO es un objeto y son inmutables

Diferencia entre null y undefined 
NULL: Sin valor en lo absoluto
UNDEFINED: Una variable declarada que aún no se le asigna un valor

Objetos, arreglos y funciones son mutables

Tipo de dato Symbol: es un valor único que no es igual a ningún otro valor

Upper camelCase -> nombrar Clases, ...
Low camelCase -> nombrar variables, propiedades, ...

Arreglos: Son un objeto muy parecido a una lista de información, que contiene un grupo de elementos.
