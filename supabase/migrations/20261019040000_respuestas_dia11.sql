CREATE TABLE IF NOT EXISTS public.respuestas_dia11 (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    pregunta_numero integer NOT NULL
        CHECK (pregunta_numero BETWEEN 1 AND 11),
    respuesta text NOT NULL,
    creada_en timestamptz NOT NULL DEFAULT now(),
    actualizada_en timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT respuesta_no_vacia CHECK (length(trim(respuesta)) > 0)
);

ALTER TABLE public.respuestas_dia11 ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.respuestas_dia11 FROM anon, authenticated;

CREATE INDEX IF NOT EXISTS respuestas_dia11_pregunta_idx
ON public.respuestas_dia11 (pregunta_numero);