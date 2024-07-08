export default function TablaRelacionPorcentaje() {
    return (
      <>
  
  <div className="flex justify-center my-10">
                  <h2
                    style={{ fontWeight: "bold", fontSize: "1rem" }}
                    className="text-lg font-semibold mb-4"
                  >
                  Relación porcentual de créditos
                  </h2>
                </div>
          <table className="table-auto border-collapse border my-5 w-full mpx-10">
                  <thead className="text-black">
                    <tr>
                      <th className="text-center">
                        AREA
                      </th>
                      <th className="text-center">
                        {" "}
                        <tr> EJE DE FORMACIÓN </tr> <tr>PROFESIONAL</tr>{" "}
                      </th>
                      <th className="text-center">
                      CRÉDITOS
                      </th>
                      <th className="text-center">
                      %
                      </th>
                
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-t border-black">
                        Ciencias Basicas
                      </td>
                      <td className="border-t border-black"></td>
                      <td className="border-t border-black">32</td>
                      <td className="border-t border-black">20,25</td>
                      
                    </tr>

                    <tr>
                      <td className="border-t border-black" rowSpan={2}>
                      Ciencias Básicas Aplicadas
                      </td>
                      <td className="border-t border-black">1. Sistemas Eléctricos y Electrónicos</td>
                      <td className="border-t border-black">30</td>
                      <td className="border-t border-black">18,99</td>
                      
                    </tr>
                    <tr>
                      <td className="">2. Mecánica</td>
                      <td className="">14</td>
                      <td className="">8,86</td>
                    </tr>


                    <tr>
                      <td className="border-t border-black" rowSpan={2}>
                      Formación Profesional Específica
                      </td>
                      <td className="border-t border-black">3. Sistemas de Control y Automatización</td>
                      <td className="border-t border-black">24</td>
                      <td className="border-t border-black">15,19</td>
                      
                    </tr>
                    <tr>
                      <td className="">4. Sistemas de Conversión y Distribución de energía</td>
                      <td className="">19</td>
                      <td className="">12,03</td>
                    </tr>

                    <tr>
                      <td className="border-t border-black">Investigacion</td>
                      <td className="border-t border-black"></td>
                      <td className="border-t border-black">21</td>
                      <td className="border-t border-black">11,39</td>
                    </tr>

                    <tr>
                      <td className="border-t border-black">Socio Humanistica</td>
                      <td className="border-t border-black"></td>
                      <td className="border-t border-black">18</td>
                      <td className="border-t border-black">11,39</td>
                    </tr>
  
  
                    <tr>
                      <td className="border-t border-black"></td>
                      <td className="border-t border-black"></td>
                      <td className="border-t border-black">158</td>
                      <td className="border-t border-black">100,00</td>
                    </tr>
  
                   
  
  
                         
                 
                  </tbody>
                </table>
      
      </>
    )
  }