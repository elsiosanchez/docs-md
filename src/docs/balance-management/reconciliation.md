---
title: Conciliaciones Automáticas
category: Documentation
star: 9
sticky: 9
article: false
---

El área de tesorería en una empresa organiza y gestiona todas las acciones relacionadas con operaciones de flujo monetario, dentro de esas operaciones se encuentra la gestión bancaria el cual se encarga de garantizar y verificar todos los movimientos de dinero qué entran y salen en la empresa.

Para garantizar dichos movimientos de dinero se aplican operaciones como las conciliaciones bancarias, que no es más qué la verificación y comparación de entradas y salidas de dinero (Pagos/Cobros) en una cuenta bancaria con los registros físicos qué son llevados a ADempiere, la verificación de estos movimientos suele ser un tema importante y tedioso para muchas empresas, por el tiempo y trabajo manual qué en algunos casos suelen aplicar.

ADempiere cuenta con un proceso de conciliaciones automáticas el cual permite de una manera rápida y eficaz comparar los movimientos generados a través de movimientos bancarios con los movimientos registrados en ADempiere.

Una conciliación automática es un proceso que se realiza con la finalidad de garantizar los saldos de las cuentas por cobrar y las cuentas por pagar que posee una empresa, el mismo compara la información del estado de cuenta real del banco con los registros y movimientos bancarios existentes en ADempiere para corroborar que ambos coincidan y no existan errores en los saldos bancarios y en la contabilidad de la empresa.

**ERPyA** pretende ofrecer una explicación eficiente a nuestros clientes del procedimiento de conciliación automática a través de una guía fácil y sencilla para así obtener resultados exitosos al momento de generar una conciliación en la versión 3.9.2 de ADempiere en la localización Venezuela. A continuación se explica el procedimiento que se debe realizar para generar una conciliación bancaria de manera automática en ADempiere.

- Descarga de Extracto Bancario desde Banco
- Registro de Conciliación Automática
  - Importación de Extracto Bancario
  - Conciliación Automática
  - Coincidencia Bancarias
  - Revisión de Conciliaciones
  - Crear Pagos Desde Línea de Estado de Cuenta
- Crear Pagos desde Estado de Cuenta
- Pagos/Cobros sin Registros
  - Pagos o Cobros de Comisiones
  - Otros Tipos de Pagos o Cobros
  - Pagos o Cobros sin Identificar
  - Completar Conciliación Bancaria

## Descarga de Extracto Bancario desde Banco

Para que un extracto bancario pueda ser importado en ADempiere este debe cumplir por Banco un formato en específico para que la importación sea exitosa, el siguiente material explica el procedimiento para descargar los formatos correctos de los estados de cuentas bancarios:

Note

La descarga de cada estado de cuenta bancario va a variar según el banco que este utilizando, la descargas de estos archivos son datos confidenciales el cual el agente autorizado tendrá el acceso a los bancos de la compañía para poder realizar dicho procedimiento.

Extracto Bancario Provincial

Para poder hacer la descarga del extracto bancario del BBVA Provincial debe iniciar sesión en el banco, una vez ingrese al banco siga las siguientes instrucciones indicadas bajo la plataforma Web del banco BBVA Provincial en la opción del NetCash donde se describe el paso a paso de como realizar la descarga de archivos o movimientos bancarios; el estado de cuenta bancario a descargar de este banco debe ser en el formato **.csv**, el cual es el formato que aceptara ADempiere al momento de realizar la importación del extracto bancario.

Note

Haga click al NetCash para poder visualizar el paso a paso para las descargas de archivos, al dar click a la opción anteriormente comentada este lo redireccionará a la plataforma web del banco.

ERPyA ofrece a nuestros clientes el ejemplo de extracto bancario BANCO PROVINCIAL SEPTIEMBRE 2019, con la finalidad de que sea descargado y utilizado para realizar el proceso de conciliación automática en ADempiere.

Extracto Bancario Venezuela

Para poder hacer la descarga del extracto bancario del Banco de Venezuela debe iniciar sesión en el banco, una vez ingrese al banco siga las siguientes instrucciones indicadas bajo la plataforma Web del banco Banco de Venezuela, el estado de cuenta bancario a descargar de este banco debe ser bajo los formatos **fix.txt**, cualquiera de esos dos formatos son válidos para que ADempiere acepte la importación del extracto bancario.

ERPyA ofrece a nuestros clientes el ejemplo de extracto bancario BANCO DE VENEZUELA OCTUBRE 2019, con la finalidad de que sea descargado y utilizado para realizar el proceso de conciliación automática en ADempiere.

Extracto Bancario Tesoro

Para poder hacer la descarga del extracto bancario del Banco del Tesoro debe iniciar sesión en el banco, una vez ingrese al banco siga las instrucciones indicadas bajo la plataforma Web del banco Banco del Tesoro, el estado de cuenta bancario a descargar de este banco debe ser bajo el formato **.xls**, el cual es el formato que aceptara ADempiere al momento de realizar la importación del extracto bancario.

Extracto Bancario Banesco

Para poder hacer la descarga del extracto bancario de Banesco Banco Universal debe iniciar sesión en el banco, una vez ingrese al banco siga las instrucciones indicadas bajo la plataforma Web Banesco Online donde se describe el paso a paso de como realizar la descarga de archivos o movimientos bancarios; el estado de cuenta bancario a descargar de este banco debe ser en el formato **qif.**, el cual es el formato que aceptara ADempiere al momento de realizar la importación del extracto bancario.

Warning

Para la exportación del extracto bancario en formato **qif.**, es necesario ingresar a banesco y seleccionar la opción **Consultas**. Luego se debe seleccionar la opción **Cuentas**, llenar los parámetros y seleccionar la opción **Exportar**. Finalmente, se debe seleccionar la opción **Quicken/Money** para exportar el archivo en formato **qif.**

ERPyA ofrece a nuestros clientes el ejemplo de extracto bancario BANCO BANESCO OCTUBRE 2019, con la finalidad de que sea descargado y utilizado para realizar el proceso de conciliación automática en ADempiere.

Note

Haga click en Banesco Online para poder visualizar el paso a paso para las descargas de archivos, al dar click a la opción anteriormente comentada este lo redireccionará a la plataforma web del banco.

Extracto Bancario Mercantil

Para poder hacer la descarga del extracto bancario de Mercantil Banco debe iniciar sesión en el banco, una vez ingrese al banco siga las instrucciones indicadas bajo la platafoma Web en el apartado de Empresas donde se describe el paso a paso de como realizar la descarga de archivos o movimientos bancarios; el estado de cuenta bancario a descargar de este banco debe ser bajo los formatos **Mt940.txt** cualquiera de esos dos formatos son válidos para que ADempiere acepte la importación del extracto bancario.

ERPyA ofrece a nuestros clientes el ejemplo de extracto bancario BANCO MERCANTIL OCTUBRE 2019, con la finalidad de que sea descargado y utilizado para realizar el proceso de conciliación automática en ADempiere.

Note

Haga click en Empresas para poder visualizar el paso a paso para las descargas de archivos, al dar click a la opción anteriormente comentada este lo redireccionará a la plataforma web del banco.

Extracto Bancario Bancaribe

Para poder hacer la descarga del extracto bancario del Bancaribe debe iniciar sesión en el banco, una vez ingrese al banco siga las instrucciones indicadas bajo la plataforma Web en el apartado Mi Estado de Cuenta Digital donde se describe el paso a paso de como realizar la descarga de archivos o movimientos bancarios; el estado de cuenta bancario a descargar de este banco debe estar bajo el formato **Separados por coma**, el cual es el formato que aceptara ADempiere al momento de realizar la importación del extracto bancario.

Note

Haga click en Mi Estado de Cuenta Digital para poder visualizar el paso a paso para las descargas de archivos, al dar click a la opción anteriormente comentada este lo redireccionará a la plataforma web del banco.

Extracto Bancario BNC

Para poder hacer la descarga del extracto bancario del Banco Nacional de Crédito debe iniciar sesión en el banco, una vez ingrese al banco siga las siguientes instrucciones indicadas bajo la plataforma Web del banco Banco Nacional de Crédito, el estado de cuenta bancario a descargar de este banco debe ser bajo el formato **.tsv**, el cual es el formato que aceptara ADempiere al momento de realizar la importación del extracto bancario.

ERPyA ofrece a nuestros clientes el ejemplo de extracto bancario BNC 2017, con la finalidad de que sea descargado y utilizado para realizar el proceso de conciliación automática en ADempiere.

Extracto Bancario Banplus

Para poder hacer la descarga del extracto bancario del Banplus debe iniciar sesión en el banco, una vez ingrese al banco siga las siguientes instrucciones indicadas bajo la plataforma Web del banco Banplus, el estado de cuenta bancario a descargar de este banco debe ser bajo el formato **.txt**, el cual es el formato que aceptara ADempiere al momento de realizar la importación del extracto bancario.

ERPyA ofrece a nuestros clientes el ejemplo de extracto bancario Banplus 2017, con la finalidad de que sea descargado y utilizado para realizar el proceso de conciliación automática en ADempiere.

De la misma manera, los bancos que no han sido mencionados bajo este material pueden ser descargados e importados en ADempiere bajo los formatos **QIF**, **MT940** y **OFX / OFC**.

Note

Ningún estado de cuenta bancario puede ser modificado o convertido manualmente a cualquiera de los formatos nombrados anteriormente, el usuario solo debe descargar el estado de cuenta bancario en los formatos indicados e importarlos a ADempiere.

Para realizar la importación del extracto bancario este proceso se explica en el documento Conciliaciones Automáticas elaborado por ERPyA.

## Registro de Conciliación Automática

Para poder crear una conciliación automática en ADempiere debe seguir los siguientes pasos:

Ubique en el menú de ADempiere la carpeta **Gestión de Saldos Pendientes** y luego seleccione la ventana **Estado de Cuenta Bancario**.

![Campo](/assets/img/docs/balance-management/bam-balance-image139.png)

Imagen 1. Menú de ADempiere

Seleccione el icono **Registro Nuevo** en la barra de herramientas de ADempiere y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/balance-management/bam-balance-image140.png)

Imagen 2. Icono de Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual se está realizando el documento de estado de cuenta bancario, el valor en el mismo debe ser diferente del símbolo (\*).

![Campo](/assets/img/docs/balance-management/bam-balance-image141.png)

Imagen 3. Campo Organización

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image142.png)

Imagen 4. Campo Tipo de Documento

Seleccione en el campo **Cuenta Bancaria**, el banco con el que va a trabajar la conciliación.

![Campo](/assets/img/docs/balance-management/bam-balance-image143.png)

Imagen 5. Campo Cuenta Bancaria

Seleccione el icono **Guardar** en la barra de herramientas de ADempiere para guardar los cambios realizados en el documento.

![Campo](/assets/img/docs/balance-management/bam-balance-image144.png)

Imagen 6. Icono Guardar

Note

Hasta este paso es el llenado del encabezado de la conciliación, donde se define el banco en el cual se va a realizar la conciliación de los pagos/cobros que ha tenido la empresa en un rango determinado. En adelante se procederá a realizar la conciliación.

### Importación de Extracto Bancario

Para que ADempiere pueda conciliar y verificar los pagos/cobros en una cuenta bancaria y los registrados pagos/cobros en ADempiere, se debe importar el extracto bancario generado del banco para ello se deben seguir los siguientes pasos.

Ya estando posicionados en la ventana **Estado de Cuenta Bancario** seleccione el icono **Proceso** en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image145.png)

Imagen 7. Icono Proceso

Seleccione la opción **Carga de Estado de Cuentas** en el menú desplegado por el icono **Proceso**.

![Campo](/assets/img/docs/balance-management/bam-balance-image146.png)

Imagen 8. Opción Proceso

Podrá apreciar la siguiente ventana y proceder al llenado de los campos correspondientes para cargar el extracto bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image147.png)

Imagen 9. Ventana Extracto Bancario

Seleccione en el campo **Cargador de Estado de Cuenta**, el banco seleccionado en el campo **Cuenta Bancaria** de la ventana principal **Estado de Cuentas Bancario**.

![Campo](/assets/img/docs/balance-management/bam-balance-image148.png)

Imagen 10. Campo Cargador de Estado de Cuenta

Seleccione en el campo **Nombre del Archivo** el estado de cuenta bancario a importar, correspondiente al banco seleccionado.

![Campo](/assets/img/docs/balance-management/bam-balance-image149.png)

Imagen 11. Campo Nombre del Archivo

Seleccione la opción **Seleccionar Archivo**, para buscar el archivo a importar.

![Campo](/assets/img/docs/balance-management/bam-balance-image150.png)

Imagen 12. Opción Seleccionar Archivo

Seleccione la opción **Cargar Archivo (Upload)**, para cargar el archivo seleccionado.

![Campo](/assets/img/docs/balance-management/bam-balance-image151.png)

Imagen 13. Opción Cargar Archivo

Seleccione la opción **OK**, para importar el archivo a ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image152.png)

Imagen 14. Opción OK

Podrá visualizar en la ventana un mensaje el cual indica la importación exitosa en ADempiere del extracto bancario y la cantidad de movimientos que posee el extracto bancario, para este caso como ejemplo está indicando que tiene 598 movimientos el extracto bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image153.png)

Imagen 15. Estado de Cuenta

Note

Una vez cargado el extracto de cuenta bancario se puede proceder a realizar la conciliación automática, si el extracto de cuenta bancario no es importado ADempiere no podrá realizar el proceso.

### Conciliación Automática

Una vez seleccionado el banco con el que se realizará la conciliación bancaria e importado el extracto bancario se procede a realizar la conciliación automática:

Estando posicionados en la ventana **Estado de Cuenta bancario** Seleccione el icono **Proceso** en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image154.png)

Imagen 16. Icono Proceso

Seleccione la opción **Conciliación de Estado de Cuenta** en el menú que es desplegado por el icono **Proceso**.

![Campo](/assets/img/docs/balance-management/bam-balance-image155.png)

Imagen 17. Menú Proceso

Se le desplegará una ventana de búsqueda inteligente con campos por los cuales se filtrará la búsqueda para realizar la conciliación.

![Campo](/assets/img/docs/balance-management/bam-balance-image156.png)

Imagen 18. Filtrar Búsqueda

Note

Puede observar que la ventana de búsqueda inteligente trae precargado el campo **Cuenta Bancaria** con la información del banco seleccionado en la ventana principal **Estado de Cuentas Bancario**. Los otros campos reflejados en esta ventana serán utilizados acorde al criterio de búsqueda que se requiera.

Una vez definido el criterio de búsqueda, seleccione la opción **Refrescar** para que se muestre la información del estado de cuenta bancario importado y los pagos/cobros realizados en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image157.png)

Imagen 19. Opción Refrescar

Podrá apreciar los movimientos del estado de cuenta del lado izquierdo de la venta de busqueda inteligente.

![Campo](/assets/img/docs/balance-management/bam-balance-image158.png)

Imagen 20. Movimientos Importados

Podrá apreciar del lado derecho de la ventana de búsqueda inteligente los movimientos registrados en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image159.png)

Imagen 21. Movimientos de ADempiere

Seleccione la opción **Simular Conciliación** para buscar coincidencia entre la información reflejada en ambos lados de la ventana de búsqueda inteligente.

![Campo](/assets/img/docs/balance-management/bam-balance-image160.png)

Imagen 22. Opción Simular Conciliación

Note

La simulación de conciliación consiste en verificar las coincidencias que tenga los pagos/cobros del extracto bancario con los registrados en ADempiere, está verificación parte en identificar qué los números de referencia de la transacciones bancarias coinciden con el número de documento del registro en ADempiere, qué ambos montos sean iguales y qué estén trabajando con la misma moneda , sí ambos movimientos (los del extracto bancario y los de ADempiere) coinciden en su totalidad con estas tres características **N° referencias / N° Documento , monto /monto, moneda/moneda** ADempiere identificara y lo marcará como una coincidencia.

Podrá apreciar los movimientos con coincidencia en la parte inferior de la ventana de búsqueda inteligente.

![Campo](/assets/img/docs/balance-management/bam-balance-image161.png)

Imagen 23. Pagos con Coincidencia

Note

Si existe coincidencia entre los pagos/cobros y el extracto bancario se le mostrarán los movimientos con coincidencias, de lo contrario no se le mostrará ningún movimiento con coincidencia.

Seleccione la opción **OK** para guardar el registro de coincidencia entre los movimientos reflejados en la ventana de búsqueda inteligente. Automáticamente se importan en la pestaña **Línea Estado Cuentas**, todos movimientos del extracto bancario que han sido identificados y los que no tengan registro en ADempiere.

Note

Para los casos en los que el extracto bancario corresponda al **Banco del Tesoro** y al momento de realizar la simulación no se refleje ningún tipo de movimientos con coincidencia, se debe seleccionar de igual manera la opción **OK**, para que sean importados a la pestaña **Línea Estado Cuentas**, todos los registros del extracto bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image162.png)

Imagen 24. Opción OK

Note

El extracto bancario puede poseer algunos registros que no han sido cargados en ADempiere, estos pueden ser cobros no identificados, comisiones bancarias entre otros, los cuales no van a ser identificados al momento de hacer la simulación, sin embargo para estos pagos/cobros no conciliados se aplicará un proceso que se detalla en el documento Crear Pagos desde Estado de Cuenta.

Al seleccionar **Ok** ADempiere lo llevará nuevamente a la ventana principal **Estado de Cuenta Bancario**.

### Coincidencia Bancarias

Al momento de realizar la conciliación bancaria ADempiere maneja una serie verificaciones para poder encontrar las coincidencias bancarias, los datos que toma ADempiere tanto en los movimientos del extracto bancario como los movimientos registrados en ADempiere son los siguientes por banco:

Banco Banesco

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

N° Documento en ADempiere

Monto

Monto

Moneda

Moneda

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

Banco Mercantil

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

N° Documento en ADempiere

Monto

Monto

Moneda

Moneda

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

Banco Bancaribe

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

Memo

N° Cheque

N° Documento en ADempiere

Descripción

N° Cheque

Monto

Monto

Moneda

Moneda

Para las conciliaciones del banco Bancaribe este puede tomar tanto el N° de referencia bancaria con el número de documento en ADempiere, el memo con la descripción del registro en ADempiere, ó el número de cheque con el número de cheque en ADempiere.

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Memo / Descripción: ADempiere se encarga de buscar y verificar que tanto en el memo que se encuentra en el movimiento del extracto bancario coincida con la descripción del registro en ADempiere.

N° Cheque / N° Cheque: ADempiere se encarga de buscar y verificar que tanto en el n° de cheque del movimiento del extracto bancario coincida con el n° de cheque de ADempiere.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

Banco Provincial

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

N° Documento en ADempiere

Monto

Monto

Moneda

Moneda

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

Banco de Venezuela

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

N° Documento en ADempiere

Monto

Monto

Moneda

Moneda

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

Banco Banplus

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

N° Documento en ADempiere

Monto

Monto

Moneda

Moneda

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

Banco del Tesoro

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

N° Documento en ADempiere

Monto

Monto

Moneda

Moneda

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

Banco Nacional del Crédito

Movimientos Bancarios

Movimientos ADempiere

N° Referencia Bancaria

N° Documento en ADempiere

Monto

Monto

Moneda

Moneda

N° de referencia bancaria / N° de documento en ADempiere: ADempiere se encarga de buscar y verificar que tanto en el número de referencia bancaria como el número de documentos en ADempiere ambos coincidan ya sea los primeros números hacia la derecha, los números que se encuentran centrados, los últimos números hacia la izquierda o el total de los números.

Monto: ADempiere se encarga de buscar y verificar que los montos del movimiento bancario como el monto del registro en ADempiere coincidan.

Moneda: ADempiere se encarga de buscar y verificar que la moneda del movimiento bancario con la moneda del registro en ADempiere coincidan, ejemplo : VES / VES, USD / USD

Note

Para que ADempiere tome una coincidencia tanto del extracto bancario como el de los registros en ADempiere, ambos deben coincidir con los tres pasos anteriormente mencionados de no ser sí ADempiere no encontrará ninguna coincidencia.

### Revisión de Conciliaciones

Una vez aplicado el proceso de conciliación automática, se debe verificar que tanto los pagos/cobros que coincidieron como los que no coincidieron se carguen correctamente dentro del registro de la conciliación bancaria en la que se este trabajando, para ello debe seguir los siguientes paso:

Seleccione la pestaña **Línea Estado Cuentas** para verificar que se encuentren los registros de todos los movimientos del estado de cuenta bancario cargado desde la ventana de búsqueda inteligente.

![Campo](/assets/img/docs/balance-management/bam-balance-image163.png)

Imagen 25. Pestaña Línea Estado Cuentas

Podrá apreciar en la parte inferior derecha del documento, la cantidad de movimientos cargados a la pestaña **Línea Estado Cuentas**, estos deben coincidir con la cantidad de movimientos que se refleja al momento de hacer la \_importación del extracto bancario

![Campo](/assets/img/docs/balance-management/bam-balance-image164.png)

Imagen 26. Cantidad de Movimientos Cargados a la Pestaña Línea Estado Cuentas

Note

Por cada movimiento del estado de cuenta bancario es un registro en la pestaña **Línea Estado Cuentas** es decir, si el estado de cuenta bancario tiene 26 movimientos, la pestaña tendrá 26 líneas de registro el cual verá identificado como N° de líneas de 10 en 10 (10,20,30,40); de click en la palabra **importación** si desea visualizar nuevamente el paso a paso de la importación del extracto bancario.

### Crear Pagos Desde Línea de Estado de Cuenta

Si al realizar la conciliación existen movimientos sin registros en ADempiere, se debe realizar el proceso **Crear pagos desde Estado de Cuenta** para generar los pagos/cobros correspondientes a cada uno de los movimientos,ya que es muy importante que todos los movimientos bancarios coincidan en su totalidad con los registros en ADempiere o que los mismos logren ser identificados, ya que de lo contrario la conciliación no podrá ser completada en ADempiere, del mismo modo este proceso también es explicado en el documento Crear Pagos desde Estado de Cuenta.

En el caso de que existan movimientos con registros en ADempiere pero sin documentos de pagos/cobros asociados en la línea, se debe seleccionar de la siguiente manera el documento **Pago/Cobro**.

Ubique el registro de la línea sin documento **Pagos/Cobros** asociado y seleccione el documento con ayuda del identificador del campo **Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image165.png)

Imagen 27. Registro del Movimiento en la Pestaña Línea Estado Cuentas

Note

Este proceso es realizado cuando no coinciden los números de referencia del movimiento y del documento **Pago/Cobro**. Sin embargo, existe el conocimiento de que dicho movimiento pertenece un documento determinado ya que existe una coincidencia en el monto, el socio del negocio y el banco.

Seleccione el icono **Guardar Cambios** en la barra de herramientas de ADempiere, para guardar los cambios realizados.

![Campo](/assets/img/docs/balance-management/bam-balance-image166.png)

Imagen 28. Icono Guardar Cambios del Movimiento en la Pestaña Línea Estado Cuentas

Regrese a la ventana principal **Estado Cuentas Bancario** y seleccione la opción **Completar**.

![Campo](/assets/img/docs/balance-management/bam-balance-image167.png)

Imagen 29. Pestaña Principal Estado Cuentas Bancario y Opción Completar

Seleccione la acción **Completar** y la opción **OK** para completar el documento.

![Campo](/assets/img/docs/balance-management/bam-balance-image168.png)

Imagen 30. Acción Completar Documento

## Crear Pagos desde Estado de Cuenta

El proceso **Crear Pagos desde Estado de Cuenta** es realizado por consecuencia de la existencia de **Pagos/Cobros** que se encuentran en el extracto bancario y al momento de la conciliación no se encuentra ninguna coincidencia con los movimientos registrados en ADempiere; el mismo parte del proceso de conciliación automática donde al importar el extracto bancario verifica los movimientos registrado en ADempiere, este realiza una verificación de coincidencias de **Pagos/Cobros** en ambos lados (Movimientos del extracto / Movimientos en ADempiere), mayormente se encuentran muchos movimientos en el extracto bancario que no han sido registrados en ADempiere y no solo es por que no se lleve un buen control de los registros si no que los extractos bancarios poseen detalladamente otros tipo de transacciones como comisiones bancarias que en algunos casos no son registrados en ADempiere o poseen movimientos bancarios que se desconoce su procedencia, pero para este tipo de casos se encuentra el proceso **Crear Pagos desde Estado de Cuenta**, ya que es muy importante que todos los movimientos bancarios coincidan en su totalidad con los registros en ADempiere o que los mismos logren ser identificados, ya que de lo contrario la conciliación no podrá ser completada en ADempiere.

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para la creación de pagos y cobros sin registros en ADempiere, partiendo desde el proceso de Conciliación Automática registro de pagos / cobros existentes en el extracto bancario importado, obteniendo un resultado exitoso al momento de conciliación de cuentas en la versión 3.9.2 de ADempiere en la localización Venezuela.

## Pagos/Cobros sin Registros

Los pagos o cobros sin registro en ADempiere pueden presentarse en las empresas por diferentes motivos los cuales pueden ser que no fueron registrados a tiempo o correctamente, o la cuenta bancaria a recibido un cobro por adelantado y este no ha sido notificado al personal que lleva los registros de los pagos/cobros en ADempiere, el registro de los mismos puede realizarse de tres formas explicadas a continuación.

Luego de realizar el proceso de conciliación, ubique la pestaña **Línea Estado Cuentas**.

![Campo](/assets/img/docs/balance-management/bam-balance-image169.png)

Imagen 1. Pestaña Estado Cuentas para Pagos Cobros sin Registros

Seleccione el icono **Proceso**, en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image170.png)

Imagen 2. Icono Proceso para Pagos Cobros sin Registros

Seleccione la opción **Crear Pago desde Estado de Cuenta**.

![Campo](/assets/img/docs/balance-management/bam-balance-image171.png)

Imagen 3. Opción Crear Pago desde Estado de Cuenta

Podrá visualizar la siguiente ventana de búsqueda inteligente con los **Pagos/Cobros** que no tuvieron coincidencias al momento de conciliar.

![Campo](/assets/img/docs/balance-management/bam-balance-image172.png)

Imagen 4. Ventana de Búsqueda Inteligente

Note

**Hasta este punto solo se puede visualizar los movimientos bancarios sin conciliar, pero la mayoría de estos movimientos bancarios pertenecen a otros tipos de transacciones como lo son los **Cargos Bancarios**, **Otro Tipo de Pagos** y los **Pagos sin Identificar**, estas transacciones bancarias deben ser identificadas para poder completar la conciliación bancaria**.

### Pagos o Cobros de Comisiones

Para aquellos movimientos que pertenezcan a comisiones bancarias estos deben ser asociados al tipo de transacción **Cargos Bancarios**, ya estando dentro de la opción **Crear Pago desde Estado de Cuenta** se debe realizar los siguientes pasos.

En la ventana de búsqueda inteligente de **Crear Pago desde Estado de Cuenta** seleccione el o los pagos/cobros correspondientes a las comisiones.

![Campo](/assets/img/docs/balance-management/bam-balance-image173.png)

Imagen 5. Selección de Pagos/Cobros

Seleccione en el campo **Tipo de Transacción** la opción **Cargo Bancario**.

![Campo](/assets/img/docs/balance-management/bam-balance-image174.png)

Imagen 6. Opción Cargo Bancario del Campo Tipo de Transacción

Seleccione en el campo **Cargo** el cargo de comisión correspondiente, para este ejemplo es **Comisión FLAT**.

![Campo](/assets/img/docs/balance-management/bam-balance-image175.png)

Imagen 7. Campo Cargo

Seleccione la opción **OK** para generar automáticamente el documento de pago/cobro en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image176.png)

Imagen 8. Opción OK para Crear Pagos Cobros de Comisiones

Warning

Si ADempiere refleja el error **No encontrado Factura / Socio del Negocio**, es porque está buscando una factura asignada al pago/cobro o un socio del negocio asociado al banco y no existe registro de ello. En este caso, es necesario abrir registro del banco y seleccionar un socio del negocio.

Podrá visualizar el **Pago/Cobro** de cargos bancarios en la pestaña **Línea Estado de Cuentas**, como la pestaña cuenta con varios registros, esté puede ser ubicado por el monto del movimiento bancario. Al ubicar el registro esté debe contar con las siguientes características:

En el campo **Pago** debe tener asociado el número del documento del **Pago/Cobro** que se seleccionó al momento de aplicar el proceso **Cargo Bancario**.

![Campo](/assets/img/docs/balance-management/bam-balance-image177.png)

Imagen 9. Campo Pago Comisiones

Note

El número de documento a mostrar en el campo **Pago** debe coincidir con el número que se muestra el campo **N° de Referencia** el cual es el número de la referencia bancaria de ese movimiento.

En el grupo de campos **Referencia** podrá visualizar lo siguiente:

En el campo **Socio de Negocio** debe aparecer el banco con el que se está trabajando la conciliación.

![Campo](/assets/img/docs/balance-management/bam-balance-image178.png)

Imagen 10. Campo Socio Negocio Comisiones

Note

Para este caso el socio del negocio a mostrar es el banco **Banesco** por que es el banco con el que se está trabajando la conciliación, pero ese socio de negocio va a variar según el banco con el que esté trabajando la conciliación, sí está trabajando con el banco **Mercantil** tomará ese banco, si está trabajando la conciliación con el banco **Banesco** tomará **Banesco** y así sucesivamente.

En el campo **Cuenta Beneficiario TEF** debe aparecer **COMISIÓN TRF OTROS BCOS**.

![Campo](/assets/img/docs/balance-management/bam-balance-image179.png)

Imagen 11. Campo Cuenta Beneficiario TEF

En el campo **Cantidad TEF** debe aparecer el mismo monto del movimiento bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image180.png)

Imagen 12. Campo Cantidad TEF

Note

El monto que aparece en el campo **Cantidad TEF** debe ser el mismo monto que aparece en el campo **Total de la Transacción**.

Si desea verificar el registro del pago/cobro generado en ADempiere puede realizarlo tildando el campo **Pago** y lo llevará a la ventana **Pago/Cobro** de ADempiere.

Puede presionar click derecho y seleccionar la opción **Acercar** y lo llevará a la ventana **Pago/Cobro** de ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image181.png)

Imagen 13. Pago Acercar

Al encontrarse en la ventana **Pago/Cobro** puede observar que el registro contará con los mismos datos anteriormente mencionados que se encuentran en grupo de campos **Referencia**.

![Campo](/assets/img/docs/balance-management/bam-balance-image182.png)

Imagen 14. Ventana Pago/Cobro

### Otros Tipos de Pagos o Cobros

Para aquellos movimientos que se encuentran en el extracto bancario que al momento de realizar la conciliación no se asoció a ningún pago/cobro en ADempiere por qué no se encontraban registrados pero sí se conoce su procedencia se deben asociar al tipo de transacción **Otro tipo de Pago** ya estando dentro de la opción **Crear Pago desde Estado de Cuenta** se debe realizar los siguientes pasos.

Note

Para este caso se tomará como ejemplo un préstamo bancario, el cual el socio de negocio al que se le realizó el préstamo hizo un abono, en su momento esta transferencia no había sido notificada por ello no se realizó el registro del pago/cobro en ADempiere, pero como se sabe de dónde proviene ese movimiento bancario este entraría dentro de la tipo de transacción **Otro tipo de Pago**.

En la ventana de búsqueda inteligente **Crear Pago desde Estado de Cuenta** seleccione el o los pagos/cobros correspondientes a otros tipos de pagos.

![Campo](/assets/img/docs/balance-management/bam-balance-image183.png)

Imagen 15. Selección de Pagos/Cobros

Seleccione en el campo **Tipo de Transacción** la opción **Otro Tipo de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image184.png)

Imagen 16. Otro tipo de Pago

Seleccione el socio del negocio en el campo **Socio del Negocio**, para este ejemplo el socio a utilizar es **Estándar**.

![Campo](/assets/img/docs/balance-management/bam-balance-image185.png)

Imagen 17. Socio de Negocio Otro Tipo de Pago

Note

Para este caso el socio de negocio es la persona que realizó la transferencia bancaria.

Seleccione en el campo **Cargo** el cargo correspondiente al pago/cobro,siguiendo el ejemplo anteriormente comentado el cargo a utilizar es **Préstamo Bancario**.

![Campo](/assets/img/docs/balance-management/bam-balance-image186.png)

Imagen 18. Cargo Otro Tipo de Pago

Note

El cargo a utilizar dependerá del tipo de transacción que se esté registrando.

Seleccione la opción **OK** para generar automáticamente el documento de pago/cobro en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image187.png)

Imagen 19. OK Otro Tipo de Pago

Podrá visualizar el **Pago/Cobro** creado de **Otro Tipo de Pago** en la pestaña **Línea Estado de Cuentas**, como la pestaña cuenta con varios registros, esté puede ser ubicado por el monto del movimiento bancario. Al ubicar el registro esté debe contar con las siguientes características:

En el campo **Pago** debe tener asociado el número del documento del **Pago/Cobro** que se seleccionó al momento de aplicar el tipo de transacción **Otro Tipo de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image188.png)

Imagen 20. Campo Pago Otro tipo de Pago

Note

El número de documento a mostrar en el campo **Pago** debe coincidir con el número que se muestra el campo **N° de Referencia** el cual es el número de la referencia bancaria de ese movimiento.

En el grupo de campos **Referencia** podrá visualizar lo siguiente:

En el campo **Socio de Negocio** debe aparecer el socio de negocio asociado al momento de aplicar el tipo de transacción **Otro Tipo de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image189.png)

Imagen 21. Campo Socio Negocio Otro tipo de Pagos

En el campo **Referencia TEF** debe aparecer el número de referencia del movimiento bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image190.png)

Imagen 22. Campo Referencia TEF

En el campo **Cantidad TEF** debe aparecer el mismo monto del movimiento bancario.

![Campo](/assets/img/docs/balance-management/bam-balance-image191.png)

Imagen 23. Campo Cantidad TEF Otro tipo de Pagos

Note

El monto que aparece en el campo **Cantidad TEF** debe ser el mismo monto que aparece en el campo **Total de la Transacción**.

Si desea verificar el registro del pago/cobro generado en ADempiere puede realizarlo tildando el campo **Pago** y lo llevará a la ventana **Pago/Cobro** de ADempiere.

Puede presionar click derecho y seleccionar la opción **Acercar** y lo llevará a la ventana **Pago/Cobro** de ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image192.png)

Imagen 24. Acercar Otro tipo de Pagos

Al encontrarse en la ventana **Pago/Cobro** puede observar que el registro contará con los mismos datos anteriormente mencionados que se encuentran en grupo de campos **Referencia**.

![Campo](/assets/img/docs/balance-management/bam-balance-image193.png)

Imagen 25. Pago/Cobro Otro tipo de Pagos

### Pagos o Cobros sin Identificar

Al momento de hacer la conciliaciòn bancaria la mayorìa de las veces suelen haber movimientos en el extracto bancario que se desconocen de donde provienen, y para ADempiere todos los movimiento que tiene el extracto bancario deben ser identificados o asociados a un **Pago/Cobro** ya que de no ser identificados ADempiere no permitirá completar la conciliación bancaria, el cual implica que dentro de ADempiere no se ha realizado ninguna conciliación.

Para los movimientos bancarios que se desconocen de dónde proviene, en ADempiere se llevan a pagos/cobros no identificados, para poder completar e identificar todos esos movimientos que posee el extracto bancario.

Note

Los **Pago/Cobro** que se pasen a ser no identificados, luego podrán ser identificados una vez se verifique su procedencia.

Para poder llevar estas transacciones bancarias a **Pagos o Cobros sin Identificar** ya estando dentro de la opción **Crear Pago desde Estado de Cuenta** se debe realizar los siguientes pasos.

Podrá observar la ventana de búsqueda inteligente donde se muestran todos los movimientos bancarios que no se les encontró una coincidencia al momento de hacer la conciliación automática.

![Campo](/assets/img/docs/balance-management/bam-balance-image194.png)

Imagen 26. Movimientos Bancarios Pagos sin Identificar

Seleccione el o los **Pago/Cobro** con procedencia desconocida.

![Campo](/assets/img/docs/balance-management/bam-balance-image195.png)

Imagen 27. Selección Pago sin Identificar

Seleccione en el campo **Tipo de Transacción** la opción **Pago Sin Identificar**.

![Campo](/assets/img/docs/balance-management/bam-balance-image196.png)

Imagen 28. Pago Cobro sin Identificar

Seleccione la opción **OK** para generar automáticamente el documento de **Pago/Cobro** en ADempiere y esté pueda ser asociado con el movimiento bancario desconocido.

![Campo](/assets/img/docs/balance-management/bam-balance-image197.png)

Imagen 29. Ok Pago Cobro sin Identificar

Note

Al seleccionar la opción **OK** ADempiere creará un **Pago/Cobro** con las mismas características del movimiento bancario desconocido en cuanto monto, fecha, y moneda.

Podrá visualizar el **Pago/Cobro creado de **Pago sin Identificar** en la pestaña **Línea Estado de Cuentas\*\*, como la pestaña cuenta con varios registros, esté puede ser ubicado por el monto del movimiento bancario. Al ubicar el registro esté debe contar con las siguientes características:

La descripción de la **Línea Estado de Cuenta** debe tener como descripción **Pago no identificado**

![Campo](/assets/img/docs/balance-management/bam-balance-image198.png)

Imagen 30. Descripción Pago Cobro sin Identificar

En el campo **Pago** debe tener asociado el número del documento del **Pago/Cobro** que se creó al momento de aplicar el proceso **Pago Sin Identificar**

![Campo](/assets/img/docs/balance-management/bam-balance-image199.png)

Imagen 31. Campo Pago sin Identificar

Note

El n° de documento a mostrar debe coincidir con el n° que se muestra el campo **N° de Referencia** el cual es el número de la referencia bancaria de ese movimiento.

En el grupo de campos **Referencia** debe aparecer como **Socio de Negocio** **Pagos/Cobros Sin Identificar**, este es un socio de negocio que tomará temporalmente el **Pago/Cobro** sin identificar.

![Campo](/assets/img/docs/balance-management/bam-balance-image200.png)

Imagen 32. Referencia Pago Cobro sin Identificar

Note

El socio de negocio **Pagos/Cobros Sin Identificar** es un socio de negocio que toma temporalmente el **Pago/Cobro** sin identificar, el cual más adelante será modificado una vez se desee identificar ese **Pago/Cobro**.

Si desea verificar el registro del pago/cobro generado en ADempiere puede realizarlo tildado el campo **Pago** y lo llevará a la ventana **Pago/Cobro** de ADempiere.

Puede presionar click derecho y seleccionar la opción **Acercar** y lo llevará a la ventana **Pago/Cobro** de ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image201.png)

Imagen 34. Acercar Pago Cobro sin Identificar

Al encontrarse en la ventana **Pago/Cobro** puede observar que el registro contará con los mismos datos anteriormente mencionados que se encuentran en grupo de campos **Referencia**.

![Campo](/assets/img/docs/balance-management/bam-balance-image202.png)

Imagen 35. Pago/Cobro Sin identificar

### Completar Conciliación Bancaria

Una vez identificado todos los movimientos bancarios y conciliado correctamente se puede completar la conciliación Bancaria, para ello debe seguir los siguientes pasos:

Debe posicionarse en la ventana padre **Estado de Cuenta Bancario**.

![Campo](/assets/img/docs/balance-management/bam-balance-image203.png)

Imagen 36. Estado de Cuenta

Ubicar al finalizar la ventana en el grupo de campo **Estado** y el botón que debe tener por nombre **Completar**

Grupo de Estado

![Campo](/assets/img/docs/balance-management/bam-balance-image204.png)

Note

El nombre del botón cambiará dependiendo del estado en el que se encuentre el documento si el documento se encuentra en estado **Borrador** la acción a mostrar en el botón es **Completar** caso que se está aplicando para este documento, si el estado del documento está en estado **Completo** el botón cambiará su nombre a la posible siguiente acción que se pueda aplicar en el documento.

Dar click a botón **Completar** y tildar **Ok** para la acción de documento seleccionada.

![Campo](/assets/img/docs/balance-management/bam-balance-image205.png)

Imagen 38. Botón Completar

Al aplicar esta acción **Completar** el documento pasará a esta completo y este no podrá ser modificado.

Note

Es muy importante tener en cuenta que todo documento transaccional una vez se culmine con el llenado de los datos debe ser completado, para que ADempiere tome como válido los datos cargados en el documento.
