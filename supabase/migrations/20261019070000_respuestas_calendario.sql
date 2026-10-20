-- Respuestas del calendario, privadas y editables mediante un token privado guardado en el navegador.
CREATE TABLE IF NOT EXISTS public.respuestas_calendario (
 dia integer NOT NULL CHECK (dia BETWEEN 1 AND 24),
 pregunta integer NOT NULL CHECK (pregunta BETWEEN 1 AND 30),
 token uuid NOT NULL,
 respuesta text NOT NULL CHECK (char_length(respuesta) BETWEEN 1 AND 5000),
 actualizada_en timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY (dia, pregunta, token)
);
ALTER TABLE public.respuestas_calendario ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.respuestas_calendario FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.respuestas_calendario TO authenticated;
DROP POLICY IF EXISTS "Administrador consulta respuestas" ON public.respuestas_calendario;
CREATE POLICY "Administrador consulta respuestas" ON public.respuestas_calendario FOR SELECT TO authenticated
 USING (EXISTS (SELECT 1 FROM public.administradores_calendario WHERE usuario_id = auth.uid()));
-- La funcion permite guardar/leer exclusivamente las respuestas del token del navegador.
CREATE OR REPLACE FUNCTION public.guardar_respuesta_calendario(p_dia integer,p_pregunta integer,p_token uuid,p_respuesta text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
 IF p_dia NOT BETWEEN 1 AND 24 OR p_pregunta NOT BETWEEN 1 AND 30 OR
    p_token IS NULL OR length(trim(p_respuesta)) NOT BETWEEN 1 AND 5000 THEN
   RAISE EXCEPTION 'Respuesta no valida';
 END IF;
 INSERT INTO public.respuestas_calendario(dia,pregunta,token,respuesta)
 VALUES(p_dia,p_pregunta,p_token,trim(p_respuesta))
 ON CONFLICT(dia,pregunta,token) DO UPDATE SET respuesta=excluded.respuesta,actualizada_en=now();
END; $$;
CREATE OR REPLACE FUNCTION public.leer_mis_respuestas_calendario(p_token uuid)
RETURNS TABLE(dia integer,pregunta integer,respuesta text) LANGUAGE sql SECURITY DEFINER SET search_path = '' AS $$
 SELECT r.dia,r.pregunta,r.respuesta FROM public.respuestas_calendario r WHERE r.token=p_token;
$$;
REVOKE ALL ON FUNCTION public.guardar_respuesta_calendario(integer,integer,uuid,text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.leer_mis_respuestas_calendario(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.guardar_respuesta_calendario(integer,integer,uuid,text) TO anon,authenticated;
GRANT EXECUTE ON FUNCTION public.leer_mis_respuestas_calendario(uuid) TO anon,authenticated;
