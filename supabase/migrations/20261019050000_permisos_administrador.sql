CREATE TABLE IF NOT EXISTS public.administradores_calendario (
    usuario_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE public.administradores_calendario ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.administradores_calendario FROM anon;
GRANT SELECT ON public.administradores_calendario TO authenticated;

DROP POLICY IF EXISTS "Consultar mi acceso administrador"
ON public.administradores_calendario;

CREATE POLICY "Consultar mi acceso administrador"
ON public.administradores_calendario
FOR SELECT TO authenticated
USING (usuario_id = auth.uid());

INSERT INTO public.administradores_calendario (usuario_id)
VALUES ('a6a92316-b0df-4998-b462-0920da412618')
ON CONFLICT (usuario_id) DO NOTHING;

GRANT SELECT, INSERT, UPDATE ON public.respuestas_dia11 TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.respuestas_dia11_id_seq TO authenticated;

DROP POLICY IF EXISTS "Administrador puede leer respuestas"
ON public.respuestas_dia11;

CREATE POLICY "Administrador puede leer respuestas"
ON public.respuestas_dia11
FOR SELECT TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.administradores_calendario
        WHERE usuario_id = auth.uid()
    )
);
