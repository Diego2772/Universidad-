export default function TablaElectivasTecnicas() {
  return <>
  
  <div className="flex justify-center my-10">
                <div>
                  <h2
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                    className="text-lg font-semibold mb-4"
                  >
                     Electivas técnicas
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
  
  
  
  
  </>;
}
