export default function PresentacionPrograma() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden"> 
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
                <h1 style={{ fontWeight: "bold", fontSize: '2rem' }}>Introducción</h1>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                El Proyecto Educativo del Programa de Ingeniería Electromecánica (PEP)
                de la Universidad Francisco de Paula Santander emerge como resultado
                de los últimos procesos de autoevaluación, efectuados en el programa,
                cuyos insumos permiten delinear el camino a seguir en aras de
                garantizar la consolidación del programa, realizar aportes al
                crecimiento institucional y alcanzar los propósitos de hacer de la
                universidad una institución de excelencia formativa, comprometida
                socialmente e innovadora.
              </p>  
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 style={{ fontWeight: "bold", fontSize: 16 }}>Base y Soporte</h3>
            <p className="text-gray-600 text-justify">
              La construcción del Proyecto Educativo del Programa de Ingeniería
              Electromecánica se soporta en los criterios establecidos en el
              Proyecto Educativo Institucional (PEI), el cual, como construcción
              colectiva sobre el sentido de la Misión, Visión, Identidad y
              postura académica institucional, ofrece luces respecto a los ejes
              orientadores del programa y los propósitos a cumplir atendiendo a
              la dinámica evolutiva y de transformación que caracteriza la
              ciencia y la educación en la actualidad.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 style={{ fontWeight: "bold", fontSize: 16 }}>
              Reto y Propósito
            </h3>
            <p className="text-gray-600 text-justify">
              En consonancia con lo expuesto en el Proyecto Educativo
              Institucional, el Proyecto Educativo del Programa de Ingeniería
              Electromecánica plantea como reto, a partir del mejoramiento
              continuo y el desarrollo eficiente, eficaz y efectivo de los
              procesos académicos, fortalecer y proyectar el liderazgo regional,
              nacional e internacional de la Universidad Francisco de Paula
              Santander.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 style={{ fontWeight: "bold", fontSize: 16 }}>
              Contenido del apartado
            </h3>
            <p className="text-gray-600 text-justify">
              Luego, se centra la atención en la descripción profusa de los
              lineamientos curriculares, detallando los fundamentos filosóficos
              y epistémicos del programa, así como los propósitos de formación;
              de igual manera, se reflejan los sustentos teóricos sobre los que
              se asientan las estrategias de flexibilidad, integralidad e
              interdisciplinariedad aplicadas en el programa.
            </p>
          </div>
        </div>
      </div>

      <div></div>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
              <h2 style={{ fontWeight: "bold", fontSize: 16 }}>Por ultimo</h2>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg text-justify">
              Finalmente se indican los aspectos más resaltantes que delinean el
          proceso de autoevaluación, para luego plasmar la propuesta de
          mejoramiento a través del Plan Operativo, el cual se construye con el
          propósito de contribuir al logro de las metas de calidad
          institucionales y del programa mediante la consolidación de la visión
          alrededor de la competitividad y pertinencia del programa académico
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
