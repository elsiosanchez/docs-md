---
title: Banco Occidental de Descuento
icon: app
category: Localización Venezuela
star: 9
sticky: 9
tag:

  - Procedimientos
  - Gestión de Tesorería
article: false
---

**Banco Occidental de Descuento**
=================================

Para la exportación de los archivos desde ADempiere al banco occidental de descuento, [ERPyA](http://erpya.com) soporta el siguiente formato facilitado por el banco, que puede ser descargado. El documento [Formato Archivo Ordenes de Pago](/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/bod/EN-CP-E-0036_SOLICITUD_MASIVA_DE_ORDENES_DE_PAGOS__TXT_.xlsm), explica el formato que sirve de ayuda para la construcción de los archivos a cargar.

Adicional a ello, se puede visualizar dicho documento de la siguiente manera, luego de descargarlo.

**BOD PROVEEDORES**
-------------------

**Formato Archivo Ordenes de Pago (Del Cliente al Banco)**

**Registro de encabezado o header TIPO = 01. Longitud 250**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|---|---|---|---|---|---|---|---|
|1|TIPO DE REGISTRO|2|N|N/A|Sí|Identificación el encabezado del lote|01|
|2|DESCRIPCION LOTE|20|A|N/A|Sí|Debe decir: "Proveedores" o "Nomina"|PROVEEDORES|
|3|TIPO PERSONA (Ordenante)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|4|NUMERO RIF/CI (Ordenante)|9|N|N/A|Sí|Número RIF/CI||
|5|NÚMERO DE CONTRATO|17|N|N/A|Sí|Número de la negociación|90045678901234567|
|6|NÚMERO DE LOTE / REFERENCIA DEBITO|9|N|N/A|Sí|Número del Lote. Referencia del débito. Será utilizada en el estado de cuenta (modaldiad 1:n)|123456789|
|7|FECHA DE ENVÍO|8|N|N/A|Sí|Fecha de envío del lote. Debe estar en formato yyyymmdd|20100530|
|8|CANTIDAD DE OPERACIONES|6|N|N/A|Sí|Cantidad de pagos en el lote (registros de detalle)|138|
|9|MONTO TOTAL|17|N|2|Sí|Monto total del lote de pagos (Incluye los decimales sin separador). Monto expresado en el ejemplo: 100.563,51|10056351|
|10|MONEDA|3|N|N/A|Sí|Moneda actual disponible Bs.|VEB|
| |FILLER|158| | |Sí|Uso futuro||
**Registro de Detalle por cada pago en lote TIPO=02. Longitud 250**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|1|TIPO REGISTRO|2|A|N/A|Sí|Identificación de detalle. Pueden haber tantos registros de detalle como pagos se requieran en el lote.|02|
|2|TIPO PERSONA (Beneficiario)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|3|NUMERO RIF/CI (Beneficiario)|9|N|N/A|Sí|Número RIF/CI||
|4|NOMBRE DEL BENEFICIARIO|60|A|N/A|Sí|Nombre del Beneficiario del crédito. Obligatorio cuando el beneficiario no está registrado o si la modalidad de pago es CHQ o EFE|Jose Herrera Cortez|
|5|REFERENCIA DE LA OPERACIÓN|9|N|N/A|No|Numero de Referencia del Crédito a ser utilizada en el estado de cuenta (modalidad 1:1)|123456789|
|6|DESCRIPCION OPERACIÓN|30|A|N/A|No|Descripción de la Operación|texto libre|
|7|MODALIDAD DE PAGO|3|A|N/A|Sí|Valores: CTA Cuenta mismo bancos - BAN cuenta otro bancos - CHQ Cheque de Gerencia - EFE Efectivo - TAR  TC Visa/ Master Otros bancos - AME TC American Express-  V/M TC Visa / Master mismo Banco,  si el beneficiario no está registrado|CTA|
|8|NUMERO DE CUENTA ó TARJETA DE CRÉDITO|20|N|N/A|Sí|Numero de la cuenta a acreditar. Obligatorio para Abono en cuenta mismo banco, otros bancos y tarjetas de crédito, si el beneficiario no está registrado|01080265007712345678|
|9|CODIGO DE BANCO|4|N|N/A|Sí|Código del Banco.|0108|
|10|FECHA VALOR|8|N|N/A|Sí|Fecha de pago. Debe estar en formato yyyymmdd|20100530|
|11|MONTO|15|N|2|Sí|Monto del pago. Incluye los decimales. Monto expresado en ejemplo: Bs. 14.000,75|1400075|
|12|MONEDA|3|N|N/A|Sí|Moneda actual disponible Bs.|VEB|
|13|IMPUESTO RETENIDO|15|N|2|No|Monto del impuesto retenido en el documento asociado al pago Bs. 1.680,09|168009|
|14|EMAIL|40|A|N/A|No|Dirección email del beneficiario|<joseh.cortez@gmail.com>|
|15|CELULAR|11|N|N/A|No|Teléfono celular para envío de SMS|04141234567|
| |FILLER|20| | |Sí|Uso futuro||
**Documentos asociados al pago TIPO=03 (Opcional)**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|1|IDENTIFICADOR REGISTRO|2|A|N/A|No|Identificación de documentos. Puede haber mas de un (1) documento por cada pago|03|
|2|NÚMERO DE FACTURA O DOCUMENTO|20|A|N/A|No|Número o referencia del documento|A-12348-PEDIDO|
|3|MONTO FACTURA|15|A|2|No|Monto original del documento|1400075|
|4|MONEDA|3|N|N/A|No|Moneda actual disponible Bs.|VEB|
|5|FECHA FACTURA|8|N|N/A|No|Fecha del documento / factura.   yyyy/mm/dd|2010/04/27|
|6|IMPUESTO RETENIDO|15|N|2|No|Monto del impuesto retebido en la factura|168009|
| |FILLER|187| | |Sí|Uso futuro||

**Formato Archivo Ordenes de Pago (Del Banco al Cliente)**

**Registro de encabezado o header TIPO = 01. Longitud 1000**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|---|---|---|---|---|---|---|---|
|1|TIPO DE REGISTRO|2|N|N/A|Sí|Identificación el encabezado del lote|01|
|2|DESCRIPCION LOTE|20|A|N/A|Sí|Debe decir: "Proveedores" o "Nomina"|PROVEEDORES|
|3|TIPO PERSONA (Ordenante)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|4|NUMERO RIF/CI (Ordenante)|9|N|N/A|Sí|Número RIF/CI||
|5|NÚMERO DE CONTRATO|17|N|N/A|Sí|Número de la negociación|90045678901234567|
|6|NÚMERO DE LOTE / REFERENCIA DEBITO|9|N|N/A|Sí|Número del Lote. Referencia del débito. Será utilizada en el estado de cuenta (modalidad 1:n)|123456789|
|7|FECHA DE ENVÍO|8|N|N/A|Sí|Fecha de envío del lote. Debe estar en formato yyyymmdd|20100530|
|8|CANTIDAD DE OPERACIONES|6|N|N/A|Sí|Cantidad de pagos en el lote (registros de detalle)|138|
|9|MONTO TOTAL|17|N|2|Sí|Monto total del lote de pagos (Incluye los decimales sin separador). Monto expresado en el ejemplo: 100.563,51|10056351|
|10|MONEDA|3|N|N/A|Sí|Moneda actual disponible Bs.|VEB|
|11|COD RESPUESTA|2|N|N/A|Sí|Será aportado por el Banco||
|12|DESCRIPCION|20|A|N/A|Sí|Será aportado por el Banco||
|13|Nro. Lote interno Banco|9|N|N/A|Sí|Será aportado por el Banco||
| |FILLER|877| | |Sí|Uso futuro||
**Registro de Detalle por cada pago en lote TIPO=02. Longitud 1000**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|1|TIPO REGISTRO|2|A|N/A|Sí|Identificación de detalle. Pueden haber tantos registros de detalle como pagos se requieran en el lote.|02|
|2|TIPO PERSONA (Beneficiario)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|3|NUMERO RIF/CI (Beneficiario)|9|N|N/A|Sí|Número RIF/CI||
|4|NOMBRE DEL BENEFICIARIO|60|A|N/A|Sí|Nombre del Beneficiario del crédito. Obligatorio cuando el beneficiario no está registrado o si la modalidad de pago es CHQ o EFE|Jose Herrera Cortez|
|5|REFERENCIA DE LA OPERACIÓN|9|N|N/A|Sí|Número de Referencia del Crédito a ser utilizada en el estado de cuenta (modalidad 1:1)|123456789|
|6|DESCRIPCION OPERACIÓN|30|A|N/A|Sí|Descripción de la Operación|texto libre|
|7|MODALIDAD DE PAGO|3|A|N/A|Sí|Valores: CTA Cuenta mismo bancos - BAN cuenta otro bancos - CHQ Cheque de Gerencia - EFE Efectivo - TAR  TC Visa/ Master Otros bancos - AME TC American Express-  V/M TC Visa / Master mismo Banco,  si el beneficiario no está registrado|CTA|
|8|NUMERO DE CUENTA ó TARJETA DE CRÉDITO|20|N|N/A|Sí|Número de la cuenta a acreditar. Obligatorio para Abono en cuenta mismo banco, otros bancos y tarjetas de crédito, si el beneficiario no está registrado|01080265007712345678|
|9|CODIGO DE BANCO|4|N|N/A|Sí|Código del Banco.|0108|
|10|FECHA VALOR|8|N|N/A|Sí|Fecha de pago. Debe estar en formato yyyymmdd|20100530|
|11|MONTO|15|N|2|Sí|Monto del pago. Incluye los decimales. Monto expresado en ejemplo: Bs. 14.000,75|1400075|
|12|MONEDA|3|N|N/A|Sí|Moneda actual disponible Bs.|VEB|
|13|IMPUESTO RETENIDO|15|N|2|No|Monto del impuesto retenido en el documento asociado al pago|168009|
|14|EMAIL|40|A|N/A|No|Dirección email del beneficiario|<joseh.cortez@gmail.com>|
|15|CELULAR|11|N|N/A|No|Teléfono celular para envío de SMS|04141234567|
|16|NRO. VOLANTE|8|N|N/A|Sí|Identificación del pago en taquilla mediante cheque||
|17|COD RESPUESTA|2|N|N/A|Sí|Será aportado por el Banco||
|18|DESCRIPCION|30|A|N/A|Sí|Será aportado por el Banco||
|19|COD ERROR|2|N|N/A|No|Será aportado por el Banco||
|20|DESCRIPCION ERROR|30|A|N/A|No|Será aportado por el Banco||
| |FILLER|698| | |Sí|Uso futuro||
**Documentos asociados al pago TIPO=03 (Opcional). Longitud 1000**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|1|IDENTIFICADOR REGISTRO|2|A|N/A|Sí|Identificación de documentos. Puede haber mas de un (1) documento por cada pago|03|
|2|NÚMERO DE FACTURA O DOCUMENTO|20|A|N/A|Sí|Número o referencia del documento|A-12348-PEDIDO|
|3|MONTO FACTURA|15|A|2|Sí|Monto original del documento|1400075|
|4|MONEDA|3|N|N/A|Sí|Moneda actual disponible Bs.|VEB|
|5|FECHA FACTURA|8|N|N/A|Sí|Fecha del documento / factura. Formato: yyyy/mm/dd|2010/04/27|
|6|IMPUESTO RETENIDO|15|N|2|No|Monto del impuesto retenido en la factura|168009|
| |FILLER|937| | |Sí|Uso futuro||

::: info Nota

- Debe ser un archivo de texto.
  - Los campos numéricos(N), deben ir alineados a la derecha y completados con ceros a la izquierda.
  - Los campos alfanuméricos(A), deben ir alineados a la izquierda.
  - Caracteres y dígitos permitidos:
    - Alfanuméricos(A):  /abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ.
    - Numéricos(N):  0123456789.
  - Cada registro debe terminar con CR(Carrige Return), LF(Line Feed).

:::

**Archivo para Pagos**
**********************

Al ejecutar el proceso de selección de pago de las siguientes facturas en ADempiere:

- Factura "**1000243**" al socio del negocio "**E.R.P. Consultores y Asociados, C.A.**" por monto total de "**15.000.000,00**".
- Factura "**1000244**" al socio del negocio "**Dhl Express Aduanas Venezuela C.A.**" por monto total de "**1.845.895,87**".
- Factura "**1000245**" al socio del negocio "**Proveedor Estándar**" por monto total de "**225.000,00**".
- Factura "**1000246**" al socio del negocio "**Bolivariana de Puertos  ( Bolipuertos)  S A**" por monto total de "**876.952.045,00**".
- Factura "**1000247**" al socio del negocio "**E.R.P. Consultores y Asociados, C.A.**" por monto total de "**18.000.000,00**".

Se obtiene como resultado del proceso "**Imprimir /Exportar**", un documento en formato "**.txt**" con los detalles de los pagos a ser realizados desde el banco bod a terceros en el mismo banco, así como también a terceros en otros bancos, el mismo se puede descargar en el enlace [Archivo de Pago de Proveedores del Banco Occidental de Descuento](/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/bod/Banco_Occidental_de_Descuento_BU_CA_1000040.txt) y visualizar de la siguiente manera:

~~~

    01PROVEEDORES         J400788315000000000000008760010000402021072900000400000091202294087VES                                                                                                                                                              
    02J400788315ERP Consultores y Asociados CA                              00000000010002431000247                CTA01160058752984563012011620210729000003300000000VES000000000000000erpya@ejemplo.com                                                      
    031000243             000001500000000VES2021/07/29000000000000000                                                                                                                                                                                           
    031000247             000001800000000VES2021/07/29000000000000000                                                                                                                                                                                           
    02J297599070Bolivariana de Puertos  ( Bolipuertos)  S A                 0000000011000246                       BAN01560000000085000096015620210729000087695204500VES000000000000000                                        02550000000                    
    031000246             000087695204500VES2021/07/29000000000000000                                                                                                                                                                                           
    02J002443731Dhl Express Aduanas Venezuela CA                            0000000021000244                       BAN01050000002000000015010520210729000000184589587VES000000000000000                                        02550002000                    
    031000244             000000184589587VES2021/07/29000000000000000                                                                                                                                                                                           
    02V000000001Proveedor Estndar                                           0000000031000245                       BAN01020000000000000012010220210729000000022500000VES000000000000000proveedor@ejemplo.com                   02550000000                    
    031000245             000000022500000VES2021/07/29000000000000000
~~~

La descripción del archivo anteriormente generado por el pago, se encuentra explicada en el documento [Formato Archivo Ordenes de Pago](/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/bod/EN-CP-E-0036_SOLICITUD_MASIVA_DE_ORDENES_DE_PAGOS__TXT_.xlsm). De igual manera, se encuentra explicada en la tabla que contiene el presente documento, al inicio del mismo.

**BOD NÓNIMA**

[ERPyA]((http://erpya.com)) agrega soporte al siguiente formato de nómina facilitado por el banco, dicha actualización fue liberada en la versión [23.7](https://docs.erpya.com/downloads/updates/rs-2.x/rs-23.x/rs-23.7.html) de ADempiere. Para mayor información de la misma, puede consultar la nota de liberación indicada anteriormente.

**Formato Archivo Beneficiarios de Pago (Del Cliente al Banco)**

**Registro de Detalle por cada Beneficiario TIPO=01. Longitud 250**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|---|---|---|---|---|---|---|---|
|1|TIPO REGISTRO|2|N|N/A|Sí|Identificación de detalle. Pueden haber tantos registros de detalle como beneficiarios se requieran en el lote.|01|
|2|NUMERO DE CONTRATO|17|N|0|Sí|Numero de Contrato al cual el beneficiario se encontrará relacionado en el sistema|900012345678911001|
|3|TIPO PERSONA (Beneficiario)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|4|NUMERO RIF/CI  (Beneficiario)|9|N|N/A|Sí|Número RIF/CI||
|5|NOMBRE DEL BENEFICIARIO|60|A|N/A|Sí|Nombre del Beneficiario del crédito. Obligatorio cuando el beneficiario no está registrado o si la modalidad de pago es CHQ o EFE|Jose Herrera Cortez|
|6|FORMA DE PAGO|3|A|N/A|Sí|Valores: CTA Cuenta mismo bancos - BAN cuenta otro bancos - CHQ Cheque de Geencia - EFE Efectivo - TAR  TC Visa / Master Otros bancos - AME TC American Express-  V/M TC Visa / Master mismo Banco|CTA|
|7|NUMERO DE CUENTA ó TARJETA DE CRÉDITO|20|N|N/A|Sí|Numero de la cuenta a acreditar. Obligatorio para Abono en cuenta mismo banco, otros bancos y tarjetas de crédito|01080265007712345678|
|8|CODIGO DE BANCO|4|N|N/A|Sí|Código del Banco|0108|
|9|STATUS BENEFICIARIO|2|A|N/A|Sí|Indica el estado del beneficiario "AC" Activo "IN" inactivo|AC|
|10|MONTO MÁXIMO|15|N|2|Sí|Monto máximo en una operación de pago|1400000|
|11|MONEDA|3|N|N/A|Sí|Moneda actual disponible Bs.|VEB|
|12|EMAIL|40|A|N/A|No|Dirección email del beneficiario|<joseh.cortez@gmail.com>|
|13|CELULAR|11|N|N/A|No|Teléfono celular para envío de SMS|04141234567|
| |FILLER|63| | |Sí|Uso futuro||
**Autorizados a retirar los pagos (opcional) TIPO=02. Longitud 250**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|1|IDENTIFICADOR REGISTRO|2|A|N/A|Sí|Identificación de registro de Autorizados. Puede haber más de un (1) autorizado por beneficiario.|02|
|2|TIPO PERSONA (Autorizado)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|3|RIF/CI (Autorizado)|9|N|N/A|Sí|Número RIF/CI||
|4|NOMBRE DEL AUTORIZADO|60|A|N/A|Sí|Nombre del Autorizado|Juan Pedro Gimenez|
|5|STATUS DEL AUTORIZADO|2|A|N/A|Sí|"Indica la acción a realizar en el estado del autorizado "AC" Activar "IN" inactivar|AC|
| |FILLER|176| | |Sí|Uso futuro||

**Formato Archivo Beneficiarios de Pago (Del Banco al Cliente)**

**Registro de Detalle por cada Beneficiario TIPO=01. Longitud 250**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|---|---|---|---|---|---|---|---|
|1|TIPO REGISTRO|2|A|N/A|Sí|Identificación de detalle. Pueden haber tantos registros de detalle como beneficiarios se requieran en el lote.|01|
|2|NUMERO DE CONTRATO|17|N|0|Sí|Numero de Contrato al cual el beneficiario se encontrará relacionado en el sistema|900012345678911001|
|3|TIPO PERSONA (Beneficiario)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|4|NUMERO RIF/CI (Beneficiario)|9|N|N/A|Sí|Número RIF/CI||
|5|NOMBRE DEL BENEFICIARIO|60|A|N/A|Sí|Nombre del Beneficiario del crédito. Obligatorio cuando el beneficiario no está registrado o si la modalidad de pago es CHQ o EFE|Jose Herrera Cortez|
|6|FORMA DE PAGO|3|A|N/A|Sí|Valores: CTA Cuenta mismo bancos - BAN cuenta otro bancos - CHQ Cheque de Gerencia - EFE Efectivo - TAR  TC Visa / Master Otros bancos - AME TC American Express-  V/M TC Visa / Master mismo Banco|123456789|
|7|NUMERO DE CUENTA ó TARJETA DE CRÉDITO|20|N|N/A|Sí|Numero de la cuenta a acreditar. Obligatorio para Abono en cuenta mismo banco, otros bancos y tarjetas de crédito|01080265007712345678|
| | | | | | |crédito.|00000377003480751006|
| | | | | | | |00005466205600823018|
|8|CODIGO DE BANCO|4|N|N/A|Sí|Código del Banco|0108|
|9|STATUS BENEFICIARIO|2|A|N/A|Sí|Indica el estado del beneficiario "AC" Activo "IN" inactivo|AC|
|10|MONTO MÁXIMO|15|N|2|Sí|Monto máximo en una operación de pago|1400000|
|11|MONEDA|3|N|N/A|Sí|Moneda actual disponible Bs.|VEB|
|12|EMAIL|40|A|N/A|No|Dirección email del beneficiario|<joseh.cortez@gmail.com>|
|13|CELULAR|11|N|N/A|No|Teléfono celular para envío de SMS|04141234567|
|14|COD RESPUESTA|2|N|N/A| |Será aportado por el Banco||
|15|DESCRIPCION|30|A|N/A| |Será aportado por el Banco||
|16|COD RECHAZO|2|N|N/A| |Será aportado por el Banco||
|17|DESCRIPCION RECHAZO|30|A|N/A| |Será aportado por el Banco||
| |FILLER|31| | |Sí|Uso futuro||
**Autorizados a retirar los pagos (opcional) TIPO=02. Longitud 250**
|Número|Nombre del Campo|Longitud|Tipo|Decimal|Requerido|Descripción/Valor|Ejemplo|
|1|IDENTIFICADOR REGISTRO|2|A|N/A|Sí|Identificación de registro de Autorizados. Puede haber más de un (1) autorizado por beneficiario.|02|
|2|TIPO PERSONA (Autorizado)|1|A|N/A|Sí|Calificador (V-Venezolano,E-Extranjero ó P-Pasaporte)  Para el caso de RIF: Calificador (J-Juridico, G-Gobierno)|J012345678     V006117681|
|3|NUMERO RIF/CI (Autorizado)|9|N|N/A|Sí|Número RIF/CI||
|4|NOMBRE DEL AUTORIZADO|60|A|N/A|Sí|Nombre del Autorizado|Juan Pedro Gimenez|
|5|STATUS DEL AUTORIZADO|2|A|N/A|Sí|Indica la acción. "AC" Activar "IN" Inactivar "IN" inactivo|AC|
| |FILLER|176| | |Sí|Uso futuro||

::: info Nota

    - Debe ser un archivo de texto.
    - Los campos numéricos(N), deben ir alineados a la derecha y completados con ceros a la izquierda.
    - Los campos alfanuméricos(A), deben ir alineados a la izquierda.
    - Caracteres y dígitos permitidos:
        - Alfanuméricos(A):  /abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ.
        - Numéricos(N):  0123456789.
    - Cada registro debe terminar con CR(Carrige Return), LF(Line Feed).

:::

**Archivo para Pagos**

Al ejecutar el proceso de selección de pago de la nómina quincenal "**NQ-13**" procesada en ADempiere, con los siguientes empleados:

- Socio del Negocio "**Empleado Estándar**", con cédula de identidad "**000085007**", perteneciente a la nómina "**Quincenal**".
- Socio del Negocio "**E.R.P. Consultores y Asociados, C.A.**", con cédula de identidad "**J400788315**", perteneciente a la nómina "**Quincenal**".
- Socio del Negocio "**Empleado**", con cédula de identidad "**0000002**", perteneciente a la nómina "**Quincenal**".
- Socio del Negocio "**Empleado Cinco**", con cédula de identidad "**0000003**", perteneciente a la nómina "**Quincenal**".

Se obtiene como resultado del proceso "**Imprimir /Exportar**", un documento en formato "**.txt**" con los detalles de los pagos a ser realizados desde el banco exterior a terceros en el mismo banco, así como también a terceros en otros bancos. El mismo se puede descargar en el enlace [Archivo de Pago de Nómina del Banco Occidental de Descuento](/assets/img/docs/lve/procedures/treasury-management/resources/upload-bank-statement-to-bank/bod/Banco_Occidental_de_Descuento_BU_CA_1000039.txt) y visualizar de la siguiente manera:

    01NOMINA              J400788315000000000000008760010000392021073000000400000000912335940VES                                                                                                                                                              
    020000085007Empleado Estndar                                            000000000NQ13                          BAN01740000005000000089017420210730000000156637539VES000000000000000                                                                       
    03NQ-13               000000156637539VES2021/07/30000000000000000                                                                                                                                                                                           
    020000000002Empleado                                                    000000001NQ13                          BAN01028619579265659568010220210730000000015197723VES000000000000000empleado@ejemplo.com                                                   
    03NQ-13               000000015197723VES2021/07/30000000000000000                                                                                                                                                                                           
    02J400788315ERP Consultores y Asociados CA                              000000002NQ13                          CTA01160058752984563012011620210730000000425623139VES000000000000000erpya@ejemplo.com                                                      
    03NQ-13               000000425623139VES2021/07/30000000000000000                                                                                                                                                                                           
    020000000003Empleado Cinco                                              000000003NQ13                          BAN01345986828692910058013420210730000000314877539VES000000000000000empleadociinco@ejemplo.com                                             
    03NQ-13               000000314877539VES2021/07/30000000000000000                                                                                                                                                                                           
