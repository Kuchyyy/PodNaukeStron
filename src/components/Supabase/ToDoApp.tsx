import { useEffect, useState } from "react";
import { supabase } from "./client";

type Todo = {
  id: string;
  title: string;
};



export default function ToDoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadTodos() {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.from("todo").select("*").order("id");
    if (error) setError(error.message);
    setTodos(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadTodos();
  }, []);

  async function addTodo(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setAdding(true);
    setError(null);

    const tempId = crypto.randomUUID();
    const optimistic: Todo = { id: tempId, title: input.trim() };
    setTodos((prev) => [optimistic, ...prev]);

    const { error } = await supabase.from("todo").insert({ title: input.trim() });

    if (error) {
      setError(error.message);
      setTodos((prev) => prev.filter((t) => t.id !== tempId));
    } else {
      await loadTodos();
      setInput("");
    }
    setAdding(false);
  }

  async function removeTodo(id: string) {
    const prev = todos;
    setTodos((curr) => curr.filter((t) => t.id !== id));

    const { error } = await supabase.from("todo").delete().eq("id", id);
    if (error) {
      setError(error.message);
      setTodos(prev);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-10">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white/90 p-6 shadow-xl ring-1 ring-black/5">
        <h1 className="mb-6 text-center text-2xl font-bold tracking-tight text-slate-800">
          ✅ Supabase To-Do (React + TS + Tailwind)
        </h1>

        <form onSubmit={addTodo} className="mb-4 flex gap-2">
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            placeholder="Dodaj zadanie…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={adding}
          />
          <button
            type="submit"
            disabled={adding}
            className="rounded-xl bg-slate-900 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:opacity-50"
          >
            {adding ? "Dodaję…" : "Dodaj"}
          </button>
        </form>

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-2">
          {loading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-slate-500">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-transparent" />
              Ładowanie…
            </div>
          ) : todos.length === 0 ? (
            <div className="py-8 text-center text-slate-500">
              Brak zadań. Dodaj pierwsze ✨
            </div>
          ) : (
            <ul className="space-y-2">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="group flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100"
                >
                  <span className="text-slate-800">{todo.title}</span>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="rounded-lg border border-slate-200 px-3 py-1 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    Usuń
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
