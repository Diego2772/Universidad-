import TablaIngenieria from "./tablaIngenieria";

export default function Interaccion() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex my-10 justify-center items-center">
                <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>
                  Interacción con el entorno nacional e internacional
                </h1>
              </div>
              <div className="flex my-10 justify-left items-center">
                <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Necesidades Actuales y Futuras del País/Región y su
                  articulación con el programa
                </h1>
              </div>

              <p className="text-gray-600 sm:text-base lg:text-lg">
                La ingeniería Electromecánica nace de la necesidad de preparar
                un profesional polivalente con competencias evidenciables, capaz
                de enfrentar este mundo cambiante en tecnología y nuevos
                mercados, en un contexto de modernización y globalización
                productiva, sus orígenes se remontan a inicios del siglo XX
                donde a medida que el conocimiento científico y tecnológico se
                multiplicaba, los campos de acción de los ingenieros se iban
                especializando cada vez más, un ejemplo de este proceso lo
                constituye la Ingeniería Eléctrica de donde se desprendieron las
                Ingenierías Electrónica, Electromecánica, Informática,
                Telecomunicaciones, Telemática y Mecatrónica, entre otras.
              </p>
              <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                Actualmente, los procesos productivos a nivel mundial, están
                atravesando por un proceso de transición y renovación, enmarcado
                por la incorporación de varias tendencias como la implementación
                de sofisticados sistemas de automatización y control de
                procesos, integración de fuentes de energía renovables
                descentralizadas y energía almacenamiento, redes eléctricas
                inteligentes y sistemas de generación distribuida, enmarcados en
                la tendencia de las industrias 4,0. En consecuencia las
                economías emergentes, deben adaptarse a estos procesos de
                cambio, en donde se evidencia la necesidad de profesionales
                competentes, capaces de generar cambio y desarrollo en las
                regiones.
              </p>
              <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                El escenario anteriormente descrito, justifica la existencia del
                Ingeniero Electromecánico en la actualidad, desde dos puntos de
                vista claros y concisos
              </p>

              <div className="container mx-auto px-4 py-12 grid grid-cols-6  md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3
                      className="text-center"
                      style={{ fontWeight: "bold", fontSize: 16 }}
                    >
                      1. La gran empresa
                    </h3>
                    <p className="text-gray-600 text-justify">
                      1. El primero se da con la gran empresa, donde los
                      sistemas productivos contienen un alto grado de
                      complejidad, donde se hace necesario manejar un lenguaje
                      especializado que integre la Ingeniería Mecánica, la
                      Ingeniería Eléctrica y la Electrónica, logrando un alto
                      rendimiento en procesos de mantenimiento, diseño, montaje
                      y renovación del sistema productivo asociado a la labor
                      del trabajo en equipo.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3
                      className="text-center"
                      style={{ fontWeight: "bold", fontSize: 16 }}
                    >
                      2. La pequeña y mediana empresa
                    </h3>
                    <p className="text-gray-600 text-justify">
                      El segundo tiene que ver con la realidad que viven la
                      pequeña y mediana empresa en el manejo de su economía. El
                      recurso económico es muy limitado y la necesidad
                      profesional es ineludible. Se necesita un Ingeniero con
                      fuertes competencias para que asuma el rol tecnológico que
                      le exige determinada situación, un ingeniero polivalente
                      con capacidad creativa presto a resolver los problemas
                      propios de su profesión en diferentes áreas de la
                      Ingeniería.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 sm:text-base lg:text-lg">
                Los procesos de autoevaluación realizados por el plan de
                estudios en los últimos años, permitieron identificar, las
                necesidades actuales, de industria a nivel local, regional y
                nacional, la cual requiere de profesionales idóneos y
                actualizados en actividades de investigación, diseño e
                implementación de tecnologías y sistemas electromecánicos
                aplicados a sistemas de conversión y distribución de energía,
                así como sistemas de control y automatización de procesos
                productivos, lo que refleja una oportunidad para el desarrollo
                del perfil ocupacional y profesional de los futuros ingenieros
                en el área de la electromecánica.
              </p>
              <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                A continuación, se describen las tendencias y necesidades del
                país y región, que se articulan a los campos de formación del
                Ingeniero Electromecánico de la Universidad Francisco de Paula
                Santander:
              </p>

              <br />
              <ul>
                <li>
                  <strong>
                    {" "}
                    <a>
                      {" "}
                      •Optimización de procesos productivos, a partir de la
                      automatización y control de procesos
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    <a> • Robótica e industrias 4.0</a>
                  </strong>
                </li>

                <li>
                  <strong>
                    {" "}
                    <a> • Desarrollo de nuevos materiales de ingeniería</a>
                  </strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    <a>
                      {" "}
                      • Desarrollo de sistemas de generación de energía, a
                      partir de fuentes renovables no convencionales.
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    <a>
                      {" "}
                      • Implementación de sistemas de medición inteligentes
                      (AMIs)
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    <a>
                      {" "}
                      • Desarrollo de sistemas de almacenamiento de energía
                    </a>
                  </strong>
                </li>

                <li>
                  <strong>
                    {" "}
                    <a> • Microrredes eléctricas.</a>
                  </strong>
                </li>
              </ul>

              <br />
              <br />
              <div className="flex my-10 justify-left items-center">
                <h1 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Estado de la Educación en el Área del Programa.
                </h1>
              </div>

              <p className="text-gray-600 sm:text-base lg:text-lg">
                En la actualidad en América Latina hay más de un centenar de
                universidades que tienen la oferta académica del programa de
                Ingeniería Electromecánica, entre los países que la ofertan
                están: Argentina, Bolivia, Ecuador, Colombia, Paraguay,
                Republica Dominicana y Costa Rica. En Argentina, existen
                aproximadamente veinte (20) programas de Ingeniería
                Electromecánica las diferentes ofertas varían en el énfasis,
                pero sus perfiles son semejantes a las competencias del
                Ingeniero Electromecánico que demanda la realidad del contexto.
              </p>
                <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                En Argentina el Consejo Federal de Decanos de Facultades de
                Ingeniería (CONFEDI) y en México la Asociación Nacional de
                Facultades y Escuelas de Ingeniería (ANFEI) es reconocida la
                Ingeniería Electromecánica como un programa Básico. En México,
                considerado entre los países con mejor desarrollo de la
                Ingeniería Electromecánica, tiene en la actualidad más de
                cincuenta (50) programas de Ingeniería Electromecánica en los
                que su perfil profesional, en varias de las ofertas académicas,
                se orienta al desarrollo de competencias que demanda el
                contexto, tales como: conversión de energía eléctrica,
                generación y distribución de energía, diseño mecánico, análisis
                y diseño de máquinas térmicas, análisis y diseño de máquina
                eléctricas entre otras.
              </p>
                <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                En América Latina existe una amplia oferta académica de
                Ingeniería Electromecánica, lo cual deriva en el creciente
                interés de este Programa en el contexto mundial, su divulgación
                en el contexto mundial tiene como referentes el Primer Encuentro
                de Universidades latinoamericanas realizado en Madrid, España en
                el mes de noviembre de 1997, en el que se discutió la temática:
                ‘el modelo educativo latinoamericano en Ingeniería
                Electromecánica’.
              </p>
              <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                El Instituto Politécnico Nacional de México (IPN) realizado ocho
                Congresos Internacionales de Ingeniería Electromecánica y de
                Sistemas en México, D.F. El primero se realizó en noviembre de
                1996, el segundo el 29 de octubre de 1999, el tercero el 26 de
                noviembre de 2002, el cuarto en noviembre de 2005 y el quinto se
                llevó a cabo del 10 al 14 de noviembre de 2008, el sexto en
                noviembre de 2011, el séptimo en noviembre del 2013, el Octavo
                se llevó a cabo del 17 al 21 de Octubre de 2016 con sede en la
                Unidad Politécnica para el Desarrollo y la Competitividad
                Empresarial. Igualmente se han realizado XVII Congresos
                Nacionales de Ingeniería Electromecánica y de Sistemas, con la
                colaboración de la Escuela Superior de Ingeniería Mecánica y
                Eléctrica ESIME.
              </p>
              <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                Actualmente las siguientes universidades, entre otras, ofrecen
                la Maestría en Ingeniería Electromecánica;
              </p>
              <br />
              <ul>
                <li>
                  <strong>
                    {" "}
                    <a>
                      {" "}
                      •Universidad de Ghent, Vrije Universiteit Brussel,
                      Université Libre De Bruxelles y Université Catholique de
                      Louvain en Bélgica
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    <a> •Universidad de Beira Interior en Portugal </a>
                  </strong>
                </li>

                <li>
                  <strong>
                    {" "}
                    <a> • Universidad Politécnica de Madrid </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    {" "}
                    <a> •Universidad De Macao y Wuhan University En China .</a>
                  </strong>
                </li>
              </ul>

              <br />

              <p className="text-gray-600 sm:text-base lg:text-lg">
                En Colombia se oferta el primer programa de Ingeniería
                Electromecánica en la Universidad Pedagógica y Tecnológica de
                Colombia (UPTC) seccional Duitama en el año 1980; luego la
                Universidad Antonio Nariño (UAN) la oferta en el año 1995; la
                Universidad Autónoma de Colombia (UAC) la oferta en 1996 y la
                Universidad Francisco de Paula Santander la oferta el 4 de Julio
                de 1997.
              </p>
              <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                En el Departamento del Norte de Santander en la década de los
                noventa, se incrementó la demanda de tecnólogos electromecánicos
                con propósitos de profesionalización, se implementaron nuevas 11
                tecnologías, el cambio de la política económica incrementó el
                desarrollo tecnológico, a través de la pequeña industria en el
                Norte de Santander, dio origen a la oferta académica de
                Ingeniería Electromecánica por parte de la UAN a finales de
                1995. La modalidad era semipresencial o por ciclos, el perfil de
                ingreso de los estudiantes era el Tecnólogos Electromecánicos
                que trabajaran como empleados o de manera independiente. La UFPS
                para atender la demanda creciente del contexto de Ingenieros
                Electromecánicos creo mediante Acuerdo 053 el programa de
                Ingeniería Electromecánica.
              </p>
              <br />
              <p className="text-gray-600 sm:text-base lg:text-lg">
                La Ingeniería Electromecánica en América Latina, es una oferta
                académica tanto de universidades a nivel mundial como en el
                contexto nacional y regional, cada una con diferentes líneas o
                énfasis que las diferencian entre sí conforme a las necesidades
                del contexto. En América Latina existen más de 100 programas de
                Ingeniería Electromecánica; en México existen 50 Programas
                aproximadamente, en Argentina 20 Programas y en Colombia 4, etc.
                A continuación, se presenta en el siguiente tabla, la oferta
                académica de Ingeniería Electromecánica en América Latina
              </p>
              <br />
           
            <div>
            <TablaIngenieria>
            </TablaIngenieria>


            </div>
           
           
            </div>
          </div>
        </div>
      </div>

      <br />
      <div></div>
    </>
  );
}
