# Tarea 3

Creación de cuentas Cloud:

- [Listo] Creación de cuenta en AWS
- [Listo] Creación de cuenta en GCP
- [En proceso] Creación de cuenta en Azure

Creación de instancias en:

- [Listo] Windows Server 2019
  -- Disco EBS de 30Gb
  -- Con RDP
  -- Security group abierto a internet
  -- Zona de disponibilidad A en South America
  -- Nombre de la instancia: "InstanciaCloudDevopsTeam+<nombre-del-equipo>"
  -- Tags de la instancia: año, sistema operativo, nombre del equipo, carrera, "institucion"="educacionit", "proyecto"="carrera clouddevops", "Entorno"="Development"
- [Listo] Windows Server 2012
  -- Disco EBS de 30Gb
  -- Con RDP
  -- Security group abierto a internet
  -- Zona de disponibilidad B en South America
  -- Nombre de la instancia: "InstanciaCloudDevopsTeam+<nombre-del-equipo>"
  -- Tags de la instancia: año, sistema operativo, nombre del equipo, carrera, "institucion"="educacionit", "proyecto"="carrera clouddevops", "Entorno"="Stage"
- [Listo] Windows Server 2016
  -- Con EC2 tipo t2.micro
  -- Con RDP
  -- Disco EBS de 30Gb
  -- Security group abierto a internet
  -- Zona de disponibilidad C en South America
  -- Nombre de la instancia: "InstanciaCloudDevopsTeam+<nombre-del-equipo>"
  -- Tags de la instancia: año, sistema operativo, nombre del equipo, carrera, "institucion"="educacionit", "proyecto"="carrera clouddevops", "Entorno"="Production"

- [En proceso] Creación de la AMI en base a la instancia Windows Server 2019 con las siguiente instalaciones:
  -- Docker en su ultima Version
  -- WAMP
  -- Kubernetes
  -- Visual Studio
  -- El ejecutable de Terraform
  -- Jenkins en su ultima versión
  -- GIT

Cambiar el fondo de pantalla de la AMI para probar su creación sin plagio

- [Listo] Actualizar tableros en Trello y Github
