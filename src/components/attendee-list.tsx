import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 w-72 gap-3 border border-white/10 rounded-lg flex items-center">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none p-0 border-0 text-sm"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-3 font-semibold text-sm text-left">
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </th>
              <th className="px-4 py-3 font-semibold text-sm text-left">
                Código
              </th>
              <th className="px-4 py-3 font-semibold text-sm text-left">
                Participantes
              </th>
              <th className="px-4 py-3 font-semibold text-sm text-left">
                Data de inscrição
              </th>
              <th className="px-4 py-3 font-semibold text-sm text-left">
                Data do check-in
              </th>
              <th className="px-4 py-3 font-semibold text-sm text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5"
                >
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">12375</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Jeong Lee
                      </span>
                      <span>jeeonglee.dev@gmail.com</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td>
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td
                className="px-4 py-3 text-sm text-zinc-300 text-right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 rounded-md p-1.5 border border-white/10">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 rounded-md p-1.5 border border-white/10">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 rounded-md p-1.5 border border-white/10">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 rounded-md p-1.5 border border-white/10 ">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
