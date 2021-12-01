## GrupoB4-Equipo9
*Aplicacion web para Outsourcing de Contabilidad*

# Bienvenidos a App Contable

AppContable es un aplicativo web que le permitirá tercerizar sus procesos de contabilidad a empresas myPymes y unipersonales.

## Nombre de la aplicación:

- AppContable.

# Definición de Roles

A continuación se listan los colaboradores e integrantes del grupo de desarrollo del aplicativo y su rol:

|Rol| Integrante |
|--|--|
| Product Owner | Álvaro Javier Hernández Rueda |
| Scrum Master | Miguel Angel Vivas |
| Scrum Team | Jairo Solano |
| Scrum Team | Lina Marcela Perilla Barrios |
| Scrum Team | Diego Alejandro Garcia Cardenas |
| Scrum Team | Edgar Villamizar |

## Objetivo General

AppContable en un aplicativo web que ayuda a los departamentos de contabilidad de empresas pequeñas y/o unipersonales en el procesamiento de transacciones contables diarias tales como consulta, creación, eliminación y actualización de registro de compras, ventas y gastos.

## Misión.

Crear un aplicativo web que permita tercerizar procesos de contabilidad a empresas myPymes y unipersonales.

## PRODUCT BACKLOG

| Id | Tipo | Descripcion | 
|--|--|--|
| **EP-01** | **Epica** | **Registro de usuarios** |
| HU-01 | Historia  | Como Administrador Quiero tener acceso a todo el sistema Para autorizar transacciones previamente creadas por los usuarios |
| HU-02 | Historia | Como administrador Quiero que el ingreso de los usuarios a la aplicación se realice por medio de una vista de inicio de sesión o registro para tener control sobre el acceso y las transacciones |
| HU-03 | Historia | Como Usuario del aplicativo Quiero que el ingreso a la plataforma se realice haciendo uso de un *Nombre de Usuario* y *Contrasena* Para tener seguridad de que mis registros no van aser editados por otro usuario |
| HU-04 | Historia | Yo como Administrador del sistema Quiero crear y autorizar los perfiles de usuario para acceso y funcionalidades de la aplicacion. |
| HU-05 | Historia | Yo como Administrador del sistema Quiero que el programa guarde el dia y la hora de ingreso de los usuarios Para tener control en los accesos y ediciones de los registros. |
| TK-01 | Tarea | Implementar el boton de registro inicial de usuario |
| TK-02 | Tarea | Implementar inicio de sesion, que incluya campo de username y password |
| TK-03 | Tarea | Implemenar una vista de registro de usuario nuevo |
| **EP-02** | **Epica** | **Procesamiento de asiento contable. Registro Contable.** |
| HU-06 | Historia | Yo como contador quiero que por cada tipo de asiento contable (ejemplo comprobante de egresos) se registre un consecutivo, la fecha, el contenido, codigo contable y un tercero, para que se refleje cada transaccion en la contabilidad de la empresa |
| HU-07 | Historia | Yo como Usuario Quiero que existan los botones de crear, consultar, actualizar, guardar y eliminar regitros en la interfaz grafica Para simplificar el proceso. |
| HU-08 | Historia | Yo como Usuario Quiero que en la interfaz grafica exista un formulario donde pueda ingresar la informacion Para que el proceso de registro se realice de manera agil y rapida |
| HU-09 | Historia | Como contador Quiero registrar los ingresos y egresos Para mantener bajo control el estado contable y obtener la utilidad |
| HU-10 | Historia | Como Administrador del sistema Quiero que los registros ingresados por los auxiliares se guarden en una base de datos Para tener trazabilidad de los mismos |
| HU-11 | Historia | Como Administrador del sistema Quiero que exista un boton para aprobar las transacciones registradas por los auxiliares Para tener control de calidad de la informacion. |
| TK-04 | Tarea | Implementar el boton de creacion de asiento contable |
| TK-05 | Tarea | Implementar el boton de consulta de asiento contable |
| TK-06 | Tarea | Implementar el boton de actualizacion de asiento contable |
| TK-07 | Tarea | Implementar el boton de eliminacion de asiento contable |
| TK-08 | Tarea | Implementar una vista donde se me muestre un formulario con todos los campos necearios para crear un asiento contable *(fecha, contenido, codigo contable, consecutivo, tercero)* |
| **EP-03** | **Epica** | **Informes contables.** |
| HU-12 | Historia | Como usuario quiero realizar consultas de los movimientos contables diarios, mensual, anual para llevar un control de la contabilidad |
| HU-13 | Historia | Como usuario quiero que exista un boton para generar el informe mensual de los registros Para tener la informacion de manera automatizada |
| HU-14 | Historia | Como usuario quiero que exista un boton para imrpimir el informe generado para tener el informe impreso cuando sea necesario |
| TK-09 | Tarea | Implementar una vista de previsualizacion de Informe Contable |

# SPRINT 2

## DIAGRAMA DE CLASES 

![image](https://user-images.githubusercontent.com/90942232/140674642-bf14cb6e-3acc-4a6b-8671-baa75a9cfcbb.png)

## EVIDENCIA VERSION NODEJS Y ANGULAR
![image](https://user-images.githubusercontent.com/68785130/140678653-f0e7d997-4017-4d1a-89a0-8b03d2d9bb8a.png)



![ANGULAR DIEGO GARCIA](https://user-images.githubusercontent.com/90811644/140679537-a621a5f8-06ba-4d4d-843d-eb66dbc0940d.png)


## INSTALACION ROBO-3T

![ROBO 3T DIEGO GARCIA](https://user-images.githubusercontent.com/90811644/140679490-26ddfa0d-608c-447f-887f-c353655436ab.png)


# SPRINT 3
## DIAGRAMA DE CLASES FUNCIONALIDADES CRUD
![Diagramas de Clases UML (1)](https://user-images.githubusercontent.com/90811644/144167928-ebda891f-1377-4409-8275-1cc13eb60c4d.png)

# SPRINT 4
## WIREFRAME

## LISTAR MAESTRO DE CUENTAS
![wireframe_1](https://user-images.githubusercontent.com/90811644/144170968-e1963b68-9afa-41a1-b3a7-45634b809c1d.JPG)

## CREAR MAESTRO DE CUENTAS
![wireframe_2](https://user-images.githubusercontent.com/90811644/144171007-9f1047c5-b405-4866-9d4d-20c84f8bcfc6.JPG)

## LOGIN
![wireframe_3](https://user-images.githubusercontent.com/90811644/144171040-3c48948c-5aab-4d70-a406-5609b36f6665.JPG)

## REGISTRO
![wireframe_4](https://user-images.githubusercontent.com/90811644/144171053-10ff0a30-d410-4075-948d-bd76c61d064e.JPG)

# COMPONENTES FRONTEND

Ver en: ComponentesFrontend.txt

# PRUEBAS UNITARIAS CON LA HERRAMIENTA INSONMIA

Ver en: Insomnia_2021-11-30.json

![PRUEBAS_UNITARIAS_INSONMIA](https://user-images.githubusercontent.com/90811644/144172659-94579109-25e8-4d4a-9cdc-854f541e84df.jpeg)
