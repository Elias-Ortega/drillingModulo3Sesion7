
const vehiculo = {
    marca: "Peakauto",
    modelo: "Goenx",
    motor: {
      tipoMotor: "4 CILINDROS EN LÍNEA",
      bloque: "ALEACIÓN/ALUMINIO",
      desplazamiento: "1.99/1996",
      caballosDeFuerza: "155@ 6500",
      lineaRoja: 6700,
      inyeccion: "PUNTOS MÚLTIPLES",
    }
  }
  
  // Extraer información del objeto vehículo y asignarla a variables
  const marca = vehiculo.marca;
  const modelo = vehiculo.modelo ??= "";
  const tipoMotor = vehiculo.motor.tipoMotor ??= "";
  const presion = vehiculo.motor.presion?.enPSI;
  const bloque = vehiculo.motor.bloque ??= "";
  const desplazamiento = vehiculo.motor.desplazamiento ??= "";
  const caballosDeFuerza = vehiculo.motor.caballosDeFuerza ??= "";
  const lineaRoja = vehiculo.motor.lineaRoja ??= "";
  const smartAssist = vehiculo.motor.smartAssist?.Tiene;
  const inyeccion = vehiculo.motor.inyeccion ??= "";
  const encendidoRemoto = vehiculo.motor.encendidoRemoto?.Tiene;
  
  // Mostrar las variables en la consola del navegador
  console.log(`Marca: ${marca}`);
  console.log(`Modelo: ${modelo}`);
  console.log(`Tipo de motor: ${tipoMotor}`);
  console.log(`Presión: ${presion}`);
  console.log(`Bloque: ${bloque}`);
  console.log(`Desplazamiento: ${desplazamiento}`);
  console.log(`Caballos de fuerza: ${caballosDeFuerza}`);
  console.log(`Línea roja: ${lineaRoja}`);
  console.log(`Smart Assist: ${smartAssist}`);
  console.log(`Inyección: ${inyeccion}`);
  console.log(`Encendido remoto: ${encendidoRemoto}`);
  






