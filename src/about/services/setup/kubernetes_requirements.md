---
title: Definición de Cluster
category: Configuración
star: 9
sticky: 9
tag:
  - Servicios
  - Producto

article: false
---
# Definición de Cluster

Sistema Operativo | Minimo | Deseable | Descripción del Equipo | CPU | Memoria RAM | Disco Duro |
--: |--: | --: | -- | --: | --: | --: |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | 0 | 3 |ETCD / Base de Datos de Kubernetes | >= 4 | >= 8GB | >= 100GB |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | 1 | 3 | Master / Principal | >= 4 | >= 8GB | >= 100GB |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | 1 | 3 | Worker / Aplicaciones | >= 8 | >= 32GB | >= 100GB |
[Ubuntu 22.04.2](https://releases.ubuntu.com/22.04.2/ubuntu-22.04.2-live-server-amd64.iso?_ga=2.101330882.2107205611.1686582914-1158267313.1681999161) | 1 | 3 | Worker / Almacenamiento | >= 8 | >= 32GB | >= 1TB |
