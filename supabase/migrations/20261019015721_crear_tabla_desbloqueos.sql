CREATE TABLE IF NOT EXISTS public.desbloqueos (
    id integer PRIMARY KEY,
    dia integer NOT NULL UNIQUE CHECK (dia BETWEEN 1 AND 24),
    desbloqueado boolean NOT NULL DEFAULT false
);

ALTER TABLE public.desbloqueos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leer desbloqueos"
ON public.desbloqueos
FOR SELECT
TO anon, authenticated
USING (true);

INSERT INTO public.desbloqueos (id, dia, desbloqueado)
SELECT numero, numero, false
FROM generate_series(1, 24) AS numero
ON CONFLICT (id) DO NOTHING;

ALTER PUBLICATION supabase_realtime
ADD TABLE public.desbloqueos;