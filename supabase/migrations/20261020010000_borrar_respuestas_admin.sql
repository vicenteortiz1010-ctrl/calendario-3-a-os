-- Solo administradores autenticados pueden borrar respuestas de prueba.
DROP POLICY IF EXISTS "admin_puede_borrar_respuestas" ON public.respuestas_calendario;
CREATE POLICY "admin_puede_borrar_respuestas" ON public.respuestas_calendario
FOR DELETE TO authenticated
USING (EXISTS (SELECT 1 FROM public.administradores_calendario a WHERE a.usuario_id = auth.uid()));
GRANT DELETE ON public.respuestas_calendario TO authenticated;
