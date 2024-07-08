export default function TablaCurriculum() {
  return (
    <>
      <div className="flex justify-center my-10">
        <h2
          style={{ fontWeight: "bold", fontSize: "1rem" }}
          className="text-lg font-semibold mb-4"
        >
          Estructura malla curricular ingeniería electromecánica
        </h2>
      </div>
      <div>
      <table className="table-auto border-collapse border my-5 w-full mpx-10">
        <thead className="text-black">
          <tr>
            <th className="text-center">
              <tr>PERIODO</tr>
              <tr> ACADÉMICO</tr>
            </th>
            <th className="text-center">
              {" "}
              <tr> NOMBRE</tr> <tr>ACTIVIDAD</tr> <tr>ACADÉMICA</tr>{" "}
            </th>
            <th className="text-center">
              <tr>NÚMERO </tr> <tr>CRÉDITOS</tr>
              <tr>ACTIVIDAD </tr>
              <tr>ACADÉMICA</tr>{" "}
            </th>
            <th className="text-center">
              {" "}
              <tr>TIPO CREDITO</tr>
              <tr>OBLIGATORIOS </tr> <tr>ELECTIVOS</tr> <tr>OPTATIVOS </tr>{" "}
            </th>
            <th className="text-center">
              <tr># HORAS </tr>
              <tr> TEÓRICAS </tr>
            </th>
            <th className="text-center">
              <tr># HORAS </tr>
              <tr>TEÓRICO-PRÁCTICAS </tr>
            </th>
            <th className="text-center">
              <tr># HORAS </tr>
              <tr>PRÁCTICAS </tr>
            </th>
            <th className="text-center">
              <tr># HORAS </tr>
              <tr> TRABAJO</tr> <tr> INDEPENDIENTE</tr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              I
            </td>
            <td className="border-t border-black">QUIMICA GENERAL</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">Obligatorio</td>
            <td className="border-t border-black">4</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">5</td>
          </tr>
          <tr>
            <td className="">CALCULO DIFERENCIAL</td>
            <td className="">3</td>
            <td className="">Obligatorio</td>
            <td className="">4</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">
              <tr>INTRODUCCIÓN A LA</tr>
              <tr> VIDA UNIVERSITARIA</tr>
            </td>
            <td className="">1</td>
            <td className="">OBLIGATORIO</td>
            <td className="">1</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">2</td>
          </tr>

          <tr>
            <td className="">
              <tr>INTRODUCCIÓN A LA</tr> <tr> INGENIERIA ELECTROMECÁNICA</tr>
            </td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">4</td>
          </tr>

          <tr>
            <td className="">PROGRAMACIÓN I</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">1</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">6</td>
          </tr>

          <tr>
            <td className="">COMUNICACIÓN ORAL Y ESCRITA</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">4</td>
          </tr>

          {/* II*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              II
            </td>
            <td className="border-t border-black">FISICA MECANICA</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">4</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">5</td>
          </tr>
          <tr>
            <td className="">CALCULO INTEGRAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">4</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">ALGEBRA LINEAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">6</td>
          </tr>

          <tr>
            <td className="">DISEÑO ASISTIDO POR COMPUTADOR</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">1</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">6</td>
          </tr>

          <tr>
            <td className="">PENSAMIENTO CRITICO</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">1</td>
            <td className="">5 </td>
          </tr>

          <tr>
            <td className="">LECTURA CRITICA</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">4</td>
          </tr>

          {/* III*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              III
            </td>
            <td className="border-t border-black">FISICA ELECTROMAGNETICA</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">4</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">5</td>
          </tr>
          <tr>
            <td className="">CALCULO VECTORIAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">4</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">ANALISIS DE CIRCUITOS ELECTRICOS EN DC</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">4</td>
            <td className="">0</td>
            <td className="">1</td>
            <td className="">4</td>
          </tr>

          <tr>
            <td className="">PROGRAMACIÓN II</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">1</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">6</td>
          </tr>

          <tr>
            <td className="">ECUACIONES DIFERENCIALES</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">4</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className=""> 5</td>
          </tr>

          <tr>
            <td className="">CONSTITUCIÓN POLÍTICA Y CIVISMO</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">4</td>
          </tr>
          {/* END III*/}

          {/* IV*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              IV
            </td>
            <td className="border-t border-black">FISICA ONDULATORIA</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">4</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">5</td>
          </tr>
          <tr>
            <td className="">MEDICIONES ELECTRICAS</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">1</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">6</td>
          </tr>

          <tr>
            <td className="">ANALISIS DE CIRCUITOS ELECTRICOS EN AC</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">4</td>
            <td className="">0</td>
            <td className="">1</td>
            <td className="">4</td>
          </tr>

          <tr>
            <td className="">FUNDAMENTOS MECÁNICOS PARA INGENIEROS</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">6</td>
          </tr>

          <tr>
            <td className="">PROBABILIDAD Y ESTADISTICA</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">3 </td>
          </tr>

          <tr>
            <td className="">EMPRENDIMIENTO</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">4</td>
          </tr>
          {/* END IV*/}

          {/* V*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              V
            </td>
            <td className="border-t border-black">TEORIA ELECTROMAGNETICA</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">6</td>
          </tr>
          <tr>
            <td className="">ELECTRÓNICA I</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">SEÑALES Y SISTEMAS</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">FUNDAMENTOS DE LA DINÁMICA DE LOS FLUIDOS</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">METODOS NUMERICOS</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">1</td>
            <td className="">6 </td>
          </tr>

          <tr>
            <td className="">METODOLOGÍA DE LA INVESTIGACIÓN</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">4</td>
          </tr>
          {/* END V*/}

          {/* VI*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              VI
            </td>
            <td className="border-t border-black">
              MATERIALES ELECTRÓNICOS Y MAGNETICOS
            </td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">4</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">1</td>
            <td className="border-t border-black">4</td>
          </tr>
          <tr>
            <td className="">ELECTRÓNICA II</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">MODELAMIENTO DE PROCESOS INDUSTRIALES</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">FUNDAMENTOS DE PRINCIPOS TÉRMICOS</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">FUNDAMENTOS DE MECANISMOS</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">3 </td>
          </tr>

          <tr>
            <td className="">PROYECTO INTEGRADOR I</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">3</td>
            <td className="">6</td>
          </tr>
          {/* END VI*/}

          {/* VII*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              VII
            </td>
            <td className="border-t border-black">
              SISTEMAS ELÉCTRICOS DE POTENCIA
            </td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">2</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">2</td>
            <td className="border-t border-black">5</td>
          </tr>
          <tr>
            <td className="">LOGICA Y DISEÑO DIGITAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">INSTRUMENTACION INDUSTRIAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">SENSORES Y ACONDICIONADORES DE SEÑAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">MÁQUINAS ELÉCTRICAS I</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">3 </td>
          </tr>

          <tr>
            <td className="">ETICA PROFESIONAL</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">4</td>
          </tr>
          {/* END VII*/}

          {/* VIII*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              VIII
            </td>
            <td className="border-t border-black">ELECTRÓNICA DE POTENCIA I</td>
            <td className="border-t border-black">2</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">3</td>
          </tr>
          <tr>
            <td className="">AUTOMATIZACIÓN INDUSTRIAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">CONTROL AUTOMÁTICO</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">LABORATORIO DE MÁQUINAS ELÉCTRICAS I</td>
            <td className="">1</td>
            <td className="">OBLIGATORIO</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">1</td>
          </tr>

          <tr>
            <td className="">MÁQUINAS ELÉCTRICAS II</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">3 </td>
          </tr>

          <tr>
            <td className="">ELECTIVA TÉCNICA I</td>
            <td className="">3</td>
            <td className="">ELECTIVO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>
          {/* END VIII*/}

          {/* IX*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              IX
            </td>
            <td className="border-t border-black">
              LABORATORIO DE MÁQUINAS ELÉCTRICAS II
            </td>
            <td className="border-t border-black">1</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">2</td>
            <td className="border-t border-black">1</td>
          </tr>
          <tr>
            <td className="">ELECTRONICA DE POTENCIA II</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">3</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">3</td>
          </tr>

          <tr>
            <td className="">LABORATORIO DE ELECTRONICA DE POTENCIA I</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">0</td>
            <td className="">0</td>
            <td className="">3</td>
            <td className="">3</td>
          </tr>

          <tr>
            <td className="">COMUNICACIONES INDUSTRIALES</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">ELECTIVA TÉCNICA II</td>
            <td className="">3</td>
            <td className="">ELECTIVO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5 </td>
          </tr>

          <tr>
            <td className="">CONTROL DIGITAL</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>
          {/* END IX*/}

          {/* X*/}
          <tr>
            <td className="border-t border-black" rowSpan={6}>
              X
            </td>
            <td className="border-t border-black">
              LABORATORIO DE ELECTRONICA DE POTENCIA II
            </td>
            <td className="border-t border-black">2</td>
            <td className="border-t border-black">OBLIGATORIO</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">3</td>
            <td className="border-t border-black">3</td>
          </tr>
          <tr>
            <td className="">SISTEMAS SUPERVISORIOS</td>
            <td className="">3</td>
            <td className="">OBLIGATORIO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">ELECTIVA TÉCNICA III</td>
            <td className="">3</td>
            <td className="">ELECTIVO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">ELECTIVA TÉCNICA IV</td>
            <td className="">3</td>
            <td className="">ELECTIVO</td>
            <td className="">2</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">5</td>
          </tr>

          <tr>
            <td className="">PROYECTO INTEGRADOR II</td>
            <td className="">2</td>
            <td className="">OBLIGATORIO</td>
            <td className="">1</td>
            <td className="">0</td>
            <td className="">2</td>
            <td className="">6 </td>
          </tr>

          <tr>
            <td className="">PROYECTO DE GRADO</td>
            <td className="">4</td>
            <td className="">OBLIGATORIO</td>
            <td className="">4</td>
            <td className="">0</td>
            <td className="">6</td>
            <td className="">5</td>
          </tr>
          {/* END X*/}

          <tr>
            <td className="border-t border-black"></td>
            <td className="border-t border-black">TOTALES</td>
            <td className="border-t border-black">158</td>
            <td className="border-t border-black"></td>
            <td className="border-t border-black">138</td>
            <td className="border-t border-black">0</td>
            <td className="border-t border-black">72</td>
            <td className="border-t border-black">273</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
