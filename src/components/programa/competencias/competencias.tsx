export default function CompeteciasComponent() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
                <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
                  Competencias
                </h1>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                La Universidad Francisco de Paula Santander adopta el concepto
                de competencia propuesto en el Acuerdo 02-2020 del CESU. “Son
                conjuntos articulados de conocimientos, capacidades,
                habilidades, disposiciones, actitudes y aptitudes que hacen
                posible comprender y analizar problemas o situaciones y actuar
                coherente y eficazmente, individual o colectivamente, en
                determinados contextos. Son susceptibles de ser evaluadas
                mediante resultados de aprendizaje y se pueden materializar en
                la capacidad demostrada para utilizar conocimientos, destrezas y
                habilidades personales, sociales, profesionales y metodológicas
                en situaciones de trabajo o estudio y en el desarrollo
                profesional y personal. Las competencias le pertenecen al
                individuo y este las continúa desarrollando por medio de su
                ejercicio profesional y su aprendizaje a lo largo de la vida”
                (Acuerdo 02-2020 – CESU, pág. 11).
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div></div>

      {/* Competencias genericas*/}

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
                <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Competencias genericas
                </h2>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                La Universidad Francisco de Paula Santander establece cinco
                competencias genéricas, transversales a todos los programas
                académicos, que se presentan en la tabla 4:
              </p>

              <div className="flex justify-center my-10">
                <div>
                  <h2
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                    className="text-lg font-semibold mb-4"
                  >
                    Tabla 4. Competencias Genéricas Establecidas por la UFPS
                  </h2>
                  <table className="border-collapse border border-black my-5">
                    <thead>
                      <tr>
                        <th className="border border-black px-4 py-2">
                          COMPETENCIA
                        </th>
                        <th className="border border-black px-4 py-2">
                          DESCRIPCIÓN
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-black px-4 py-2">CG1</td>
                        <td className="border border-black px-4 py-2">
                          CIUDADANÍA ÉTICA Y CRITICA
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black px-4 py-2">CG2</td>
                        <td className="border border-black px-4 py-2">
                          COMUNICATIVA
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black px-4 py-2">CG3</td>
                        <td className="border border-black px-4 py-2">
                          RAZONAMIENTO CUANTITATIVO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black px-4 py-2">CG4</td>
                        <td className="border border-black px-4 py-2">
                          APRENDIZAJE CONTINUO
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-black px-4 py-2">CG5</td>
                        <td className="border border-black px-4 py-2">
                          TRABAJO EN EQUIPO
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competencias especificas*/}

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
                <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Competencias especificas del programa
                </h2>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                El programa de Ingeniería Electromecánica establece tres
                competencias específicas, transversales a sus ejes de formación
              </p>

              <div className="flex justify-center my-10">
                <div>
                  <h2
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                    className="text-lg font-semibold mb-4"
                  ></h2>

                  <ul>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-600 sm:text-base lg:text-lg"
                        >
                          CE1:
                        </a>{" "}
                        Capacidad de diseñar, adaptar y optimizar sistemas
                        electromecánicos, tendientes al control y automatización
                        de los procesos de producción y a la conversión,
                        distribución y uso final de la energía, con miras a
                        satisfacer las diferentes necesidades presentes en los
                        sectores productivos del país y/o región.{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-600 sm:text-base lg:text-lg"
                        >
                          CE2:
                        </a>{" "}
                        Impulsar y desarrollar programas de investigación en los
                        sectores energético y productivo que, a partir de la
                        identificación de problemas particulares, proponga y
                        diseñe soluciones que conduzcan al crecimiento de los
                        sectores mencionados.{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-gray-600 sm:text-base lg:text-lg"
                        >
                          CE3:
                        </a>{" "}
                        Capacidad para plantear proyectos de ingeniería basado
                        en conceptos y procedimientos básicos en la formulación
                        de estos, reconociendo el papel y responsabilidad
                        disciplinar, social y ética del ingeniero
                        electromecánico en un contexto de desempeño profesional.
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                La tabla 5 muestra la relación entre las competencias genéricas
                institucionales y las competencias específicas del programa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resultados de aprendizaje*/}

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="my-10 justify-center items-center">
                <div>
                  {" "}
                  <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Resultados de Aprendizaje
                  </h2>
                </div>
                <br />
                <div>
                  <h2 style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Resultados de Aprendizaje Competencias Genéricas
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                La Universidad Francisco de Paula Santander define los
                siguientes resultados de aprendizaje:
              </p>

              <div className="flex justify-center my-10">
                <div>
                  <h2
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                    className="text-lg font-semibold mb-4"
                  ></h2>

                  <ul>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RAI1:
                        </a>
                        Aplicar los conocimientos y habilidades matemáticas en
                        la solución de situaciones problemas que se presenten en
                        los contextos cotidianos y profesionales que involucran
                        información de carácter cuantitativo.
                      </p>{" "}
                    </li>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RAI2:
                        </a>
                        Demostrar las capacidades necesarias para el aprendizaje
                        permanente y a lo largo de toda la vida.{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-gray-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RAI3:
                        </a>
                        Trabajar conjunta y colaborativamente con otros pares
                        desde diversos roles buscando solucionar problemas en
                        diversos contextos.{" "}
                      </p>{" "}
                    </li>

                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-gray-600 sm:text-base lg:text-lg"
                        >
                          RAI4 :
                        </a>
                        Demostrar comportamientos éticos en diversos contextos
                        basados en principios y valores universales, analizando
                        las diferentes perspectivas presentes en diversos
                        entornos donde se ve involucrados los derechos y deberes
                        del ciudadano.
                      </p>{" "}
                    </li>

                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-gray-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RAI5:
                        </a>
                        Utilizar con efectividad la comunicación oral y escrita
                        a través de informes, documentos de trabajo, ponencias,
                        exposiciones o en reuniones de trabajo.{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-gray-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RAI5:
                        </a>
                        Comunicarse mediante expresiones de uso frecuente y de
                        la profesión en un segundo idioma.{" "}
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="my-10 justify-center items-center">
                <div>
                  {" "}
                  <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Resultados de Aprendizaje del programa
                  </h2>
                </div>
                <br />
              </div>
              <p className="text-gray-600 sm:text-base lg:text-lg">
                El programa de Ingeniería Electromecánica, se basa en el modelo
                de Acreditación ABET y adopta, los siguientes resultados de
                aprendizaje:
              </p>

              <div className="flex justify-center my-10">
                <div>
                  <h2
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                    className="text-lg font-semibold mb-4"
                  ></h2>

                  <ul>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RA1:
                        </a>
                        Habilidad para identificar, formular y resolver
                        problemas en el área de la ingeniería electromecánica,
                        mediante la aplicación de principios de ingeniería,
                        ciencias y matemáticas, proponiendo soluciones
                        tecnológicas e innovadoras capaces de transformar su
                        entorno.
                      </p>{" "}
                    </li>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RA2:
                        </a>
                        Habilidad para diseñar sistemas y dispositivos
                        electromecánicos tendientes al control y automatización
                        de los procesos de producción y a la conversión,
                        distribución y uso final de la energía, para producir
                        soluciones que satisfagan necesidades específicas en la
                        industria, teniendo en cuenta la salud, la seguridad y
                        el bienestar público, así como factores globales,
                        culturales, sociales, ambientales y económicos
                      </p>{" "}
                    </li>
                    <li>
                      <p className="text-gray-600 sm:text-base lg:text-lg">
                        {" "}
                        <a
                          style={{ fontWeight: "bold" }}
                          className="text-black-gray-600 sm:text-base lg:text-lg"
                        >
                          {" "}
                          RA3:
                        </a>
                        Habilidad para desarrollar y realizar modelos utilizando
                        métodos de experimentación, apropiados con herramientas
                        tecnológicas para la interpretación y análisis de datos
                        utilizando el juicio de ingeniería para sacar
                        conclusiones.
                      </p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              <p className="text-gray-600 sm:text-base lg:text-lg">
                Los Resultados de aprendizaje se articulan a las competencias
                específicas del programa de ingeniería electromecánica, como se
                muestra en la tabla 5:
              </p>
            </div>
          </div>


   

          <div className="flex justify-center my-10">
      <div className="mx-auto" style={{ maxWidth: "40rem" }}>
        <h2
          style={{ fontWeight: "bold", fontSize: "1rem" }}
          className="text-lg font-semibold mb-4"
        >
          Tabla 5. Matriz de Relación RA y Competencias Específicas
        </h2>
        <table className="border-collapse border border-black my-5" style={{ width: "100%" }}> {/* Establece el ancho deseado */}
          <thead>
            <tr>
              <th className="border border-black px-4 py-2"></th>
              <th className="border border-black px-4 py-2">CE1</th>
              <th className="border border-black px-4 py-2">CE2</th>
              <th className="border border-black px-4 py-2">CE3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">RA1</td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2 bg-blue-200"></td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">RA2</td>
              <td className="border border-black px-4 py-2 bg-blue-200"></td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">RA3</td>
              <td className="border border-black px-4 py-2"></td>
              <td className="border border-black px-4 py-2 bg-blue-200"></td>
              <td className="border border-black px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
          
        </div>
      </div>


    </>
  );
}
