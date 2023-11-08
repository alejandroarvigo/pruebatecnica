En este desarrollo para afrontar la prueba tecnica se utilizo el siguiente stack tecnologico:

* Node v20.9
* Tailwind para dar estilos basicos
* Zustand para poder tener un estado global de la app que permita almacenar en localstorage para no perder data
* FramerMotion para darle animacion a las cards al momento de aparecer y desaparecer
* Vitest y ReactTestingLibrary: para poder ejecutar la bateria de test que se hicieron


El requerimiento funcional es: 

Realizar una aplicación que permita agregar frases y que esas frases las vaya poniendo en cards en una matriz. También que permita buscar dentro de las frases un contenido y que filtre las cards que contengan ese texto. Usar TypeScript. Hacer un unit test.


Features de la SPA:
* Que la app se vea de manera correcta en cualquiera sea su tamanio (Responsive)
* Poder agregar card con el contenido del textArea
* Poder filtrar las cards que estan agregadas al store (el filtro puede detectar que una card tiene mas de una palabra, sin importar el orden
Ej: Una card con el siguiente texto "una linda frase ", debe aparecer si en el filtro se busca "una frase linda")


Notas a tener en cuenta : 
* Si se desea resetear las cards, se puede borrar el storage(localStorage).
* El filtro aparece solamente cuando hay cards para filtrar
