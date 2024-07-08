export default function TablaElectivas() {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <table className="w-full max-w-4xl border-collapse">
          <thead>
            <tr>
              <th className="bg-gray-100 dark:bg-gray-800 py-3 font-bold text-center">ELECTIVA I</th>
              <th className="bg-gray-100 dark:bg-gray-800 py-3 font-bold text-center">ELECTIVA II</th>
              <th className="bg-gray-100 dark:bg-gray-800 py-3 font-bold text-center">ELECTIVA III</th>
              <th className="bg-gray-100 dark:bg-gray-800 py-3 font-bold text-center">ELECTIVA IV</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Nanociencia y Nanotecnología </td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center"> Domótica e Inmotica</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center"> Robótica</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center"> Automatización de redes eléctricas</td>
            </tr>
            <tr>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Ingeniería de Mantenimiento</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Protecciones Eléctricas</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Fundamentos de calidad de energía</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Sistemas Embebidos</td>
            </tr>
            <tr>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Eficiencia Energética</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Energías Renovables</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Control Inteligente</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Industrias 4,0</td>
            </tr>
            <tr>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Accionamientos Electroneumáticos</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center"></td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center">Control moderno de máquinas</td>
              <td className="border border-gray-200 dark:border-gray-700 py-3 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }